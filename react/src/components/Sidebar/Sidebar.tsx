import { NavLink } from 'react-router-dom'
import navlinks from '../../constants/links'
import HeaderBrandTitle from '../HeaderBrandTitle'
import images from '../../assets/images'
import { cn } from '../../lib/utils'
import icons from '../../assets/icons'

function Sidebar() {
  return (
    <aside className='flex flex-col hide-scroll items-center max-h-screen min-h-screen h-full overflow-y-auto overflow-x-hidden bg-[#F2EAE1] max-w-[270px] w-full pt-[18px] pb-[30px]'>
      <HeaderBrandTitle label='CRUD OPERATIONS' className='text-[20px] border-l-4' />
      <div className='mt-[54px]'>
        <div className='w-[130px] h-[130px] overflow-hidden rounded-full'>
          <img src={images.avatar} className='w-full h-full object-cover' />
        </div>
        <div className='mt-[20px] text-center'>
          <div className='font-bold text-[17px] pb-[10px]'>Karthi Madesh</div>
          <span className='text-primary text-sm font-400'>Admin</span>
        </div>
      </div>
      <ul className='flex-1 w-full space-y-4 px-[38px] pt-20'>
        {navlinks.map(({ id, label, to, icon }) => (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                cn('text-black flex items-center pl-10 rounded gap-[15px] text-center pt-[11px] pb-[13px] text-base', {
                  'bg-primary': isActive
                })
              }
              to={to}
            >
              <img src={icon} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className=''>
        <button className='flex px-[38px] items-center pt-16 gap-x-[23px] text-nowrap'>
          Logout
          <img src={icons.logout} />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
