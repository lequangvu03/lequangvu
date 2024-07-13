import { ReactNode } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

type MainLayoutProps = {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='flex min-h-screen'>
      <Sidebar className='shrink-0' />
      <div className='flex-1'>
        <Header />
        <div className='max-h-screen overflow-y-auto overflow-x-hidden pb-[72px]'>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
