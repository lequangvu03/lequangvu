import { Router } from 'express'
import {
  getStudentsController,
  loginController,
  refreshTokenController,
  registerController,
  resendEmailVerifyTokenController,
  verifyEmailController
} from '~/controllers/user.controllers'
import {
  accessTokenValidator,
  emailVerifyTokenValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator
} from '~/middlewares/user.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const userRouter = Router()

/**
 * path: /auth/register
 * method: POST
 * body:{ email: string, password: string, confirm_password}
 */

userRouter.post('/auth/register', registerValidator, wrapRequestHandler(registerController))

/**
 * path: /auth/login
 * method: POST
 * body: {email: string, password: string}
 */

userRouter.post('/auth/login', loginValidator, wrapRequestHandler(loginController))

/**
 * path: /auth/verify-email?token=<email_verified_token>
 * method: GET
 * query: {token: string}
 */

userRouter.get('/auth/verify-email', emailVerifyTokenValidator, wrapRequestHandler(verifyEmailController))
/**
 * path: /auth/refresh-token
 * method: GET
 * body: {refresh_token: string}
 */

userRouter.post('/auth/refresh-token', refreshTokenValidator, wrapRequestHandler(refreshTokenController))
/**
 * path: /auth/resend-verify-token
 * method: post
 * body: {email: string}
 */

userRouter.post('/auth/resend-verify-token', wrapRequestHandler(resendEmailVerifyTokenController))

/**
 * path: /students
 * method: GET
 * headers: { Authorization: Bearer <access_token> }
 */

userRouter.get('/students', accessTokenValidator, wrapRequestHandler(getStudentsController))

export default userRouter
