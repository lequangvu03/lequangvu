import { z } from 'zod'

export const SignInSchema = z
  .object({
    email: z.string().email('Email is invalid'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password must be at least 50 characters')
  })
  .required()

export type TSignIn = z.infer<typeof SignInSchema>

export const RegisterSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Email is invalid'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password must be at least 50 characters'),

    confirm_password: z.string().min(1, 'Confirm password is required')
  })
  .refine(
    (value) => {
      return value.password === value.confirm_password
    },
    {
      message: 'Confirm password does not match',
      path: ['confirm_password']
    }
  )
