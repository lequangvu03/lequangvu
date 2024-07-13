import { Router } from 'express'
import {
  getStudentsController,
  loginController,
  logoutController,
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
} from '~/middlewares/admin-auth.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const adminAuthRouter = Router()

/**
 * path: /auth/register
 * method: POST
 * body:{ email: string, password: string, confirm_password}
 */

adminAuthRouter.post('/auth/register', registerValidator, wrapRequestHandler(registerController))

/**
 * path: /auth/login
 * method: POST
 * body: {email: string, password: string}
 */

adminAuthRouter.post('/auth/login', loginValidator, wrapRequestHandler(loginController))

/**
 * path: /auth/verify-email?token=<email_verified_token>
 * method: GET
 * query: {token: string}
 */

adminAuthRouter.get('/auth/verify-email', emailVerifyTokenValidator, wrapRequestHandler(verifyEmailController))

/**
 * path: /auth/refresh-token
 * method: GET
 * body: {refresh_token: string}
 */

adminAuthRouter.post('/auth/refresh-token', refreshTokenValidator, wrapRequestHandler(refreshTokenController))

/**
 * path: /auth/resend-verify-token
 * method: post
 * body: {email: string}
 */

adminAuthRouter.post('/auth/logout', refreshTokenValidator, wrapRequestHandler(logoutController))

/**
 * path: /auth/resend-verify-token
 * method: post
 * body: {email: string}
 */

adminAuthRouter.post(
  '/auth/resend-verify-token',
  refreshTokenValidator,
  wrapRequestHandler(resendEmailVerifyTokenController)
)

/**
 * path: /students
 * method: GET
 * headers: { Authorization: Bearer <access_token> }
 */

adminAuthRouter.get('/students', accessTokenValidator, wrapRequestHandler(getStudentsController))

export default adminAuthRouter
