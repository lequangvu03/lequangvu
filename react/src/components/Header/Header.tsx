import icons from '../../assets/icons'

function Header() {
  return (
    <header className='flex bg-white shadow-sm sticky top-0 right-0 left-0 items-center justify-between w-full max-h-[60px] h-full pl-[30px] pr-[51px]'>
      <div className='flex justify-between w-full'>
        <div className='flex items-center' role='button'>
          <img src={icons.play} />
        </div>
        <div className='flex items-center gap-[27px]'>
          <div className='relative'>
            <input
              placeholder='Search...'
              className='rounded border outline-none placeholder:text-sm pt-[9px] pl-[13px] pb-[11px]'
              type='text'
            />
            <button className='absolute block right-0 top-1/2 -translate-y-1/2 h-full px-[14px]'>
              <img src={icons.glass} alt='' />
            </button>
          </div>
          <div role='button'>
            <img src={icons.bell} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
