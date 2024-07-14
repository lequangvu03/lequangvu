import classNames from 'classnames/bind'
import { Button, Flex } from 'antd'
import { useForm } from 'react-hook-form'
import HeaderBrandTitle from '../../components/HeaderBrandTitle'
import styles from './style.module.scss'
import { SignInSchema, TSignIn } from '../../lib/rules'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import routes from '../../config/routes'
import { isAxiosUnprocessableEntityError } from '../../lib/utils'
import { ErrorResponse } from '../../types/responses'
import useAuth from '../../hooks/useAuth'
import { useLoginMutation } from '../../hooks/data/auth.data'

const cx = classNames.bind(styles)

function SignIn() {
  const navigation = useNavigate()
  const { setIsAuthenticated } = useAuth()
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError
  } = useForm<TSignIn>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(SignInSchema)
  })

  const loginMutation = useLoginMutation()

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<TSignIn>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof TSignIn, {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                message: (formError[key as keyof TSignIn] as any)?.msg,
                type: 'Server'
              })
            })
          }
        }
      },
      onSuccess: (data) => {
        console.log(data)
        setIsAuthenticated(true)
        navigation(routes.home)
      }
    })
  })

  return (
    <div>
      <div className={cx('signin')}>
        <div className={cx('signin__content')}>
          <header className={cx('signin__header')}>
            <HeaderBrandTitle label='CRUD OPERATIONS' />
            <h3 className={cx('form__title')}>Sign In</h3>
            <div className={cx('form__desc')}>Enter your credentials to access your account</div>
          </header>
          <form className={cx('form')} onSubmit={onSubmit}>
            <Flex vertical gap={10}>
              <Input
                placeholder='Enter your email'
                message={errors.email?.message}
                control={control}
                label='Email'
                name='email'
              />
              <Input
                control={control}
                message={errors.password?.message}
                placeholder='Enter your password'
                label='Password'
                name='password'
              />
            </Flex>
            <Button htmlType='submit' className={cx('signin__button')} onSubmit={onSubmit}>
              Sign in
            </Button>
          </form>
          <div className={cx('form__footer')}>
            <div>Forgot your password?&nbsp;</div>
            <a href='#' className={cx('reset-password')}>
              Reset Password
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
