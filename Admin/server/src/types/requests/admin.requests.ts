import type { JwtPayload } from 'jsonwebtoken'
import type { Query } from 'express-serve-static-core'
import { TokenType, UserVerifyStatus } from '~/constants/enums'

export interface TokenPayload extends JwtPayload {
  user_id: string
  token: TokenType
  verify: UserVerifyStatus
}

export interface LoginReqBody {
  email: string
  password: string
}

export interface RegisterReqBody {
  email: string
  password: string
  confirm_password: string
}

export interface EmailVerifyReqQuery extends Query {
  token: string
}

export interface ResendEmailReqBody {
  email: string
}

export interface LogoutReqBody {
  refresh_token: string
}
