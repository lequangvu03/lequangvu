import { Request, Response } from 'express'
import type { ParamsDictionary } from 'express-serve-static-core'
import { ObjectId } from 'mongodb'
import HTTP_RESPONSE_STATUS_CODES from '~/constants/http-status-codes'
import { ServerError } from '~/models/Errors'
import User from '~/models/schemas/admin.model'
import { ResponseObject } from '~/models/ResponseObject'
import databaseService from '~/services/database.services'
import userService from '~/services/admin.services'
import {
  LoginReqBody,
  LogoutReqBody,
  RegisterReqBody,
  ResendEmailReqBody,
  TokenPayload
} from '~/types/requests/admin.requests'
import { UserVerifyStatus } from '~/constants/enums'
import { omit } from 'lodash'

export const loginController = async (req: Request<ParamsDictionary, any, LoginReqBody>, res: Response) => {
  const { _id, verify, ...rest } = req.user as User

  if (verify === UserVerifyStatus.Unverified) {
    return res.status(HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED).json(
      new ResponseObject({
        message: "You account hasn't been verified yet!",
        data: {}
      })
    )
  }

  const { access_token, refresh_token } = await userService.login({
    user_id: (_id as ObjectId).toString(),
    verify
  })

  res.json({
    message: 'Login successfully',

    data: {
      access_token,
      refresh_token,
      user: { ...omit(req.user, ['password', 'email_verify_token']) }
    }
  })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  await userService.register(req.body)

  res.json(
    new ResponseObject({
      message: 'Register successfully! Please check the email to verify your account',
      data: {}
    })
  )
}

export const verifyEmailController = async (req: Request, res: Response) => {
  const { user_id } = req.decoded_email_verify_token as TokenPayload

  const user = await databaseService.users.findOne({ _id: new ObjectId(user_id) })
  if (!user) {
    throw new ServerError({
      message: 'User not found',
      status: HTTP_RESPONSE_STATUS_CODES.NOT_FOUND
    })
  }

  if (user.email_verify_token === '') {
    return res.render('pages/verify-notification', {
      status: HTTP_RESPONSE_STATUS_CODES.OK,
      success: true,
      message: 'Email already verified'
    })
  }

  await userService.verifyEmail(user_id)

  return res.render('pages/verify-notification', {
    status: HTTP_RESPONSE_STATUS_CODES.OK,
    success: true,
    message: 'Email verified successfully'
  })
}

export const refreshTokenController = async (
  req: Request<ParamsDictionary, any, { refresh_token: string }>,
  res: Response
) => {
  const { user_id, verify } = req.decoded_refresh_token as TokenPayload

  const { refresh_token } = req.body

  const result = await userService.refreshToken({ refresh_token, user_id, verify })
  return res.json(
    new ResponseObject({
      message: 'Refresh token successfully',
      data: result
    })
  )
}

export const resendEmailVerifyTokenController = async (
  req: Request<ParamsDictionary, any, ResendEmailReqBody>,
  res: Response
) => {
  const { email } = req.body
  const user = await databaseService.users.findOne({
    email: email
  })

  if (!user) {
    return res.status(HTTP_RESPONSE_STATUS_CODES.NOT_FOUND).json({
      message: 'User does not exist'
    })
  }

  if (user.verify === UserVerifyStatus.Verified) {
    return res.json(
      new ResponseObject({
        message: 'Email already verified',
        data: {}
      })
    )
  }
  const result = await userService.resendEmailVerifyToken({
    email,
    user_id: String(user._id)
  })

  res.json(
    new ResponseObject({
      message: result.message,
      data: {}
    })
  )
}

export const logoutController = async (req: Request<ParamsDictionary, any, LogoutReqBody>, res: Response) => {
  const { refresh_token } = req.body
  await userService.logout(refresh_token)
  res.json(
    new ResponseObject({
      message: 'Logout successfully',
      data: {}
    })
  )
}

export const getStudentsController = async (req: Request, res: Response) => {
  res.json({
    message: 'Get list of students successfully',
    data: [
      {
        id: 1,
        avatar: '',
        name: 'Vu',
        email: 'vu@gmail.com',
        phone: '0388025148',
        enrollNumber: '456',
        dateOfAdmission: 'efg'
      },
      {
        id: 2,
        avatar: '',
        name: 'Huyen',
        email: 'huyen@gmail.com',
        phone: '0388025148',
        enrollNumber: '789',
        dateOfAdmission: 'hik'
      },
      {
        id: 3,
        avatar: '',
        name: 'Test',
        email: 'test@gmail.com',
        phone: '123456789',
        enrollNumber: '012',
        dateOfAdmission: 'bhw'
      }
    ]
  })
}
