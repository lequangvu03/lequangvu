import HeaderBrandTitle from '../../components/HeaderBrandTitle'
import Input from '../../components/Input'

function SignIn() {
  return (
    <div>
      <div className='flex min-h-screen items-center justify-center bg-linear'>
        <div className='w-full max-w-[475px] rounded-2xl bg-white px-[30px] pb-[41px] pt-11'>
          <header className='flex flex-col items-center justify-center'>
            <HeaderBrandTitle label='CRUD OPERATIONS' />
            <div>
              <h3 className='mb-[9px] mt-[43px] text-center font-bold text-[22px] uppercase'>Sign In</h3>
              <div className='text-sm'>Enter your credentials to access your account</div>
            </div>
          </header>
          <form className='mt-[50px]'>
            <div className='space-y-[20px]'>
              <Input title='Email' placeholder='Enter your email' />
              <Input title='Password' placeholder='Enter your password' />
            </div>
            <button
              type='submit'
              className='mt-[30px] block w-full rounded bg-primary py-[14px] text-center text-sm uppercase text-white'
            >
              Sign in
            </button>
          </form>
          <div className='mt-[27px] flex items-center justify-center text-sm'>
            <div>Forgot your password?&nbsp;</div>
            <a href='#' className='text-primary underline'>
              Reset Password
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
