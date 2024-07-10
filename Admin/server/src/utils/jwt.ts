import jwt, { SignOptions } from 'jsonwebtoken'
import { TokenPayload } from '~/types/requests/user.requests'

export const signToken = ({
  payload,
  privateKey,
  options
}: {
  payload: string | Buffer | object
  privateKey: string
  options: SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privateKey, options, function (error, token) {
      if (error) reject(error)
      resolve(token as string)
    })
  })
}

export const verifyToken = ({ privateKey, token }: { token: string; privateKey: string }) => {
  return new Promise<TokenPayload>((resolve, reject) => {
    jwt.verify(token, privateKey, function (error, decoded) {
      if (error) reject(error)
      resolve(decoded as TokenPayload)
    })
  })
}
