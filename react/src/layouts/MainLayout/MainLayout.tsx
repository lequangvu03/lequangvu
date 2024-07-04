import { ReactNode } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

type MainLayoutProps = {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <div className='flex-1'>
        <Header />
        <div className='overflow-x-hidden overflow-y-auto max-h-screen pb-[72px]'>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
