import { TSignIn } from '../lib/rules'
import { getRefreshTokenFromCookie } from '../lib/utils'
import { AuthResponse } from '../types/responses'
import request from './axios'

const authApi = {
  login: ({ email, password }: TSignIn) =>
    request.post<AuthResponse>('/auth/login', {
      email,
      password
    }),
  logout: () =>
    request.post('/auth/logout', {
      refresh_token: getRefreshTokenFromCookie()
    })
}

export default authApi
