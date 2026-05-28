import women from '@shared/assets/female.png'
import men from '@shared/assets/user.jpg'
import { Button } from 'antd'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

import { useAuth } from '@/modules/auth'

export const Profile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { user, handleLogOut } = useAuth()

  return (
    <div className='flex justify-end  mr-20 pt-6 max-[1200px]:mr-0'>
      <div className='pr-5 flex'>
        {user?.gender === 'men' ? (
          <img alt='User' className='rounded-2xl w-15 mr-5' src={men} />
        ) : (
          <img alt='User' className='rounded-2xl w-15 mr-5' src={women} />
        )}
        <Button className='mt-4' onClick={() => setIsOpen(!isOpen)} type='primary'>
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </Button>
      </div>
      {isOpen && (
        <div className='absolute border bg-primary top-21 rounded-2xl w-55 right-3 p-4'>
          <div className='pt-4'>
            <h2 className='text-white'>
              <span className='pr-2 font-bold text-2xl'>{user?.firstName}</span>
              <span className='font-bold text-2xl'>{user?.lastName}</span>
            </h2>
          </div>
          <Button className='mt-3' onClick={handleLogOut} type='primary'>
            Log out
          </Button>
        </div>
      )}
    </div>
  )
}
