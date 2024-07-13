import { UserVerifyStatus } from '../constants/enums'

export interface IUser {
  _id?: string
  name?: string
  email: string
  verify: UserVerifyStatus
  date_of_birth?: number
  avatar?: string
  created_at?: number
  updated_at?: number
}
