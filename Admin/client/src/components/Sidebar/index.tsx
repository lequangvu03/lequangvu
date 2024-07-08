import { NavLink } from 'react-router-dom'
import navlinks from '../../constants/links'
import HeaderBrandTitle from '../HeaderBrandTitle'
import images from '../../assets/images'
import { cn } from '../../lib/utils'
import icons from '../../assets/icons'

type SidebarProps = {
  className?: string
}

function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'sticky bottom-0 left-0 top-0 flex h-full max-h-screen min-h-screen w-full max-w-[70px] flex-col items-center overflow-y-auto overflow-x-hidden bg-[#F2EAE1] pb-[30px] pt-[18px] transition-all lg:max-w-[270px]',
        className
      )}
    >
      <HeaderBrandTitle label='CRUD OPERATIONS' className='hidden border-l-4 text-[20px] lg:block' />
      <div className='mt-8 flex w-[50px] flex-col items-center px-1 lg:mt-6 lg:w-full'>
        <div className='flex h-full justify-center overflow-hidden rounded-full lg:max-h-[130px] lg:w-full lg:max-w-[130px]'>
          <img src={images.avatar} className='h-full w-full object-cover' />
        </div>
        <div className='mt-[20px] text-center'>
          <div className='pb-[10px] font-bold text-sm lg:text-[17px]'>Karthi Madesh</div>
          <span className='font-400 text-xs text-primary lg:text-sm'>Admin</span>
        </div>
      </div>
      <ul className='flex w-full flex-1 flex-col items-center space-y-2 pt-6 lg:px-[38px] lg:pt-4'>
        {navlinks.map(({ id, label, to, icon }) => (
          <li key={id} className='flex w-full justify-center'>
            <NavLink
              className={({ isActive }) =>
                cn(
                  'flex min-h-[40px] w-[40px] items-center justify-center rounded py-2 text-center text-base text-black lg:w-full lg:justify-start lg:pb-[13px] lg:pl-10 lg:pt-[11px]',
                  {
                    'bg-primary': isActive
                  }
                )
              }
              to={to}
            >
              <img src={icon} className='object-contain' />
              <span className='ml-[15px] hidden lg:block'>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <button className='flex min-w-[40px] items-center justify-center text-nowrap px-2 pt-6 lg:gap-x-[23px] lg:px-[38px]'>
          <span className='hidden lg:block'>Logout</span>
          <img src={icons.logout} />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
