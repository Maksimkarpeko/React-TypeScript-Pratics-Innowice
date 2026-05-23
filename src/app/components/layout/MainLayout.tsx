import type { FC, PropsWithChildren } from 'react'

import { Header } from '../header/Header'
import { SideBar } from '../ui/sideBar/sideBar'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex w-screen h-screen'>
      <SideBar />
      <div className='flex flex-col w-full border-l border-gray-200 h-full'>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}
