import monitor from '@shared/assets/Monitor.png'
import { useNavigate } from '@tanstack/react-router'
import { Button } from 'antd'
import { Plus } from 'lucide-react'

import { useAuth } from '@/modules/auth'

export const WelcomeSection = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  return (
    <div className='flex border justify-center items-center bg-blue-50 mt-10 gap-45 rounded-2xl mx-40 '>
      <div className='pl-20'>
        <h1 className='text-3xl font-bold'>Hi,{user?.firstName}!</h1>
        <p className='pt-4 pb-4 text-2xl text-justify w-130'>
          Have a great day! You can create new requests regarding issues and track their status.
          Click the button below to describe your problem, and our team will get to work right away.
        </p>
        <Button className='flex' icon={<Plus />} onClick={() => navigate({})} type='primary'>
          Create new problem
        </Button>
      </div>
      <div>
        <img alt='Monitor' src={monitor} width={'80%'} />
      </div>
    </div>
  )
}
