import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import HTTP_RESPONSE_STATUS_CODES from '../constants/http-status-codes'
import { ErrorResponse } from '../types/responses'
import { IUser } from '../types/types'

export const formatNumber = (number: number) => new Intl.NumberFormat().format(number)

export const isAxiosError = <T>(error: unknown): error is AxiosError<T> => {
  return axios.isAxiosError(error)
}

export const isAxiosUnprocessableEntityError = <UnprocessableEntityError>(
  error: unknown
): error is AxiosError<UnprocessableEntityError> => {
  return (
    isAxiosError<UnprocessableEntityError>(error) &&
    error.response?.status === HTTP_RESPONSE_STATUS_CODES.UNPROCESSABLE_CONTENT
  )
}

export const isAxiosUnauthorizedError = <UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> => {
  return isAxiosError<UnauthorizedError>(error) && error.response?.status === HTTP_RESPONSE_STATUS_CODES.UNAUTHORIZED
}

export const isAxiosExpiredAccessTokenError = <ExpiredAccessTokenError>(
  error: unknown
): error is AxiosError<ExpiredAccessTokenError> => {
  return isAxiosUnauthorizedError<
    ErrorResponse<{
      message: string
      name: string
    }>
  >(error)
}

export const setAccessTokenToLocalCookie = (access_token: string) => {
  Cookies.set('access_token', access_token, {
    expires: 5 / 1440
  })
}

export const getAccessTokenFromCookie = () => {
  return Cookies.get('access_token') || ''
}

export const setRefreshTokenToCookie = (refresh_token: string) => {
  Cookies.set('refresh_token', refresh_token, {
    expires: 7
  })
}

export const getRefreshTokenFromCookie = () => {
  return Cookies.get('refresh_token') || ''
}

export const setProfileToCookie = (profile: IUser) => {
  Cookies.set('profile', JSON.stringify(profile), {
    expires: 7
  })
}

export const getProfileFromCookie = () => {
  const profile = Cookies.get('profile')
  return profile ? JSON.parse(profile) : null
}

export const removeAuthFromCookie = () => {
  Cookies.remove('access_token')
  Cookies.remove('refresh_token')
  Cookies.remove('profile')
}
