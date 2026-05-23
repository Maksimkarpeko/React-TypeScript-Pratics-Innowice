import logo from '@shared/assets/logo.png'
import { Button, Menu } from 'antd'
import clsx from 'clsx'
import { ChevronLeft, Menu as MenuIcon } from 'lucide-react'
import { useState } from 'react'

import { MenuItems } from '@/app/constants/menuItem'

export const SideBar = () => {
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <>
      <div className={clsx(isShow ? 'h-screen w-[15%] ml-2' : 'hidden')}>
        <div className='flex'>
          <img alt='Logo' className='w-15' src={logo} />
          <p className='pt-4 text-xl font-bold'>Help Desk</p>
        </div>
        <Menu
          defaultOpenKeys={['sub1']}
          defaultSelectedKeys={['1']}
          items={MenuItems}
          mode='inline'
          style={{ width: '100%', height: '80%', fontSize: '17px', fontWeight: '600' }}
        />
        <Button className='ml-2' onClick={() => setIsShow(!isShow)}>
          <ChevronLeft /> Collapse
        </Button>
      </div>

      {!isShow && (
        <div className='w-[5%] p-2'>
          <Button onClick={() => setIsShow(!isShow)}>
            <MenuIcon />
          </Button>
        </div>
      )}
    </>
  )
}
