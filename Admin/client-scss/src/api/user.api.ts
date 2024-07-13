import { TSignIn } from '../lib/rules'
import { getRefreshTokenFromLocalStorage } from '../lib/utils'
import { AuthResponse } from '../types/responses'
import http from './http'

const authApi = {
  login: ({ email, password }: TSignIn) =>
    http.post<AuthResponse>('/auth/login', {
      email,
      password
    }),
  logout: () =>
    http.post('/auth/logout', {
      refresh_token: getRefreshTokenFromLocalStorage()
    })
}

export default authApi
