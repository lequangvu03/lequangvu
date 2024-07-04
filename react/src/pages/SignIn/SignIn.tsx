import HeaderBrandTitle from '../../components/HeaderBrandTitle'
import Input from '../../components/Input/Input'

function SignIn() {
  return (
    <div>
      <div className='flex items-center bg-linear justify-center min-h-screen'>
        <div className='pt-11 pb-[41px] max-w-[475px] w-full px-[30px] rounded-2xl bg-white'>
          <header className='flex flex-col items-center justify-center'>
            <HeaderBrandTitle label='CRUD OPERATIONS' />
            <div>
              <h3 className='mt-[43px] uppercase font-bold text-center text-[22px] mb-[9px]'>Sign In</h3>
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
              className='text-white mt-[30px] block text-sm py-[14px] w-full rounded bg-primary uppercase text-center'
            >
              Sign in
            </button>
          </form>
          <div className='flex mt-[27px] items-center justify-center text-sm'>
            <div>Forgot your password?&nbsp;</div>
            <a href='#' className='underline text-primary'>
              Reset Password
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
