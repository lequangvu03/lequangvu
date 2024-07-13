import icons from '../../assets/icons'

function Header() {
  return (
    <header className='sticky left-0 right-0 top-0 flex h-full max-h-[60px] w-full items-center justify-between bg-white pl-[30px] pr-[51px] shadow-sm'>
      <div className='flex w-full justify-between'>
        <div className='flex items-center' role='button'>
          <img src={icons.play} />
        </div>
        <div className='flex items-center gap-[27px]'>
          <div className='relative'>
            <input
              placeholder='Search...'
              className='rounded border pb-[11px] pl-[13px] pt-[9px] outline-none placeholder:text-sm'
              type='text'
            />
            <button className='absolute right-0 top-1/2 block h-full -translate-y-1/2 px-[14px]'>
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
