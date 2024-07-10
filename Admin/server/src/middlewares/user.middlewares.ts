import { check, checkSchema, ParamSchema } from 'express-validator'
import { JsonWebTokenError } from 'jsonwebtoken'
import { capitalize } from 'lodash'
import { UserVerifyStatus } from '~/constants/enums'
import envs from '~/constants/env-variables'
import HTTP_RESPONSE_STATUS_CODES from '~/constants/http-status-codes'
import { ServerError } from '~/models/Errors'
import databaseService from '~/services/database.services'
import userService from '~/services/user.services'
import { hashPassword } from '~/utils/crypto'
import { verifyToken } from '~/utils/jwt'
import validate from '~/utils/validate'

const passwordShema: ParamSchema = {
  notEmpty: {
    errorMessage: 'Password is required'
  },
  isLength: {
    options: {
      min: 6,
      max: 50
    },
    errorMessage: 'Password length must be from 6-50 characters'
  },
  isStrongPassword: {
    errorMessage: 'Password is not strong enough',
    options: {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    }
  }
}

const confirmPasswordShema: ParamSchema = {
  notEmpty: {
    errorMessage: 'Confirm password is required'
  },
  isLength: {
    options: {
      min: 6,
      max: 50
    },
    errorMessage: 'Confirm password length must be from 6-50 characters'
  },
  custom: {
    options: async (confirm_password, { req }) => {
      if (confirm_password !== req.body.password) {
        throw new Error('Confirm password does not match')
      }
      return true
    }
  }
}

export const loginValidator = validate(
  checkSchema(
    {
      email: {
        isEmail: {
          errorMessage: 'Email is invalid'
        },
        trim: true,
        custom: {
          options: async (value, { req }) => {
            const user = await databaseService.users.findOne({
              email: value,
              password: hashPassword(req.body.password)
            })

            if (!user) {
              throw new Error('Email or password is incorrect')
            }
            req.user = user
            return true
          }
        }
      },
      password: passwordShema
    },
    ['body']
  )
)

export const registerValidator = validate(
  checkSchema(
    {
      email: {
        notEmpty: {
          errorMessage: 'Email is requierd'
        },
        isEmail: {
          errorMessage: 'Email is invalid'
        },
        trim: true,
        custom: {
          options: async (value) => {
            const user = await userService.isEmailInUse(value)

            if (user) {
              throw new Error('Email already exists')
            }

            return true
          }
        }
      },
      password: passwordShema,
      confirm_password: confirmPasswordShema
    },
    ['body']
  )
)

export const accessTokenValidator = validate(
  checkSchema(
    {
      Authorization: {
        custom: {
          options: async (value, { req }) => {
            const access_token = (value || '').split('Bearer ')[1]
            if (!access_token) {
              throw new ServerError({
                message: 'Access token is invalid',
                status: HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED
              })
            }

            try {
              const decoded_access_token = await verifyToken({
                privateKey: envs.accessTokenPrivateKey,
                token: access_token
              })

              req.decoded_access_token = decoded_access_token
              return true
            } catch (error) {
              if (error instanceof JsonWebTokenError) {
                throw new ServerError({
                  message: capitalize(error.message),
                  status: HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED
                })
              }
              throw error
            }
          }
        }
      }
    },
    ['headers']
  )
)

export const refreshTokenValidator = validate(
  checkSchema(
    {
      refresh_token: {
        custom: {
          options: async (value, { req }) => {
            if (!value) {
              throw new ServerError({
                message: 'Refresh token is required',
                status: HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED
              })
            }

            try {
              const [decoded_refresh_token, refresh_token] = await Promise.all([
                verifyToken({
                  privateKey: envs.refreshTokenPrivateKey,
                  token: value
                }),
                databaseService.refreshTokens.findOne({ token: value })
              ])
              if (!refresh_token) {
                throw new ServerError({
                  message: 'Refresh token does not exist',
                  status: HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED
                })
              }
              req.decoded_refresh_token = decoded_refresh_token
              return true
            } catch (error) {
              if (error instanceof JsonWebTokenError) {
                throw new ServerError({
                  message: capitalize(error.message),
                  status: HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED
                })
              }
              throw error
            }
          }
        }
      }
    },
    ['body']
  )
)

export const emailVerifyTokenValidator = validate(
  checkSchema(
    {
      token: {
        trim: true,
        custom: {
          options: async (value, { req }) => {
            if (!value) {
              throw new ServerError({
                message: 'Email verify token is invalid',
                status: HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED
              })
            }

            try {
              const decoded_email_verify_token = await verifyToken({
                privateKey: envs.emailVerifyTokenPrivateKey,
                token: value
              })

              req.decoded_email_verify_token = decoded_email_verify_token

              return true
            } catch (error) {
              if (error instanceof JsonWebTokenError) {
                throw new ServerError({
                  message: capitalize(error.message),
                  status: HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED
                })
              }
              throw error
            }
          }
        }
      }
    },
    ['query']
  )
)
