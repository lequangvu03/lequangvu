import User from './models/schemas/admin.model'
import { Request } from 'express'
import { TokenPayload } from './types/requests/admin.requests'

declare module 'express' {
  interface Request {
    user?: User
    decoded_access_token?: TokenPayload
    decoded_refresh_token?: TokenPayload
    decoded_email_verify_token?: TokenPayload
  }
}
