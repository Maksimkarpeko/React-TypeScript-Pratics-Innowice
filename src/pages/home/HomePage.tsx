import monitor from '@shared/assets/Monitor.png'
import { useNavigate } from '@tanstack/react-router'
import { Button } from 'antd'
import { Plus } from 'lucide-react'

import { useAuth } from '@/modules/auth'
import { APP_TEXT, ROUTES_PATHS } from '@/shared/constants'

export const HomePage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { home } = APP_TEXT

  return (
    <div className='flex border justify-center items-center bg-blue-50 mt-10 gap-45 rounded-2xl mx-40 py-10 max-[1500px]:mx-0 max-[1500px]:gap-10 max-[1000px]:flex-col'>
      <div className='pl-20 max-[1440px]:pl-6'>
        <h1 className='text-3xl font-bold'>Hi,{user?.firstName}!</h1>
        <p className='pt-4 pb-4 text-2xl text-justify w-130 max-[900px]:text-xl max-[900px]:w-100 max-[600px]:w-70'>
          {home.text}
        </p>
        <Button
          className='flex'
          icon={<Plus />}
          onClick={() => navigate({ to: ROUTES_PATHS.problemCreate })}
          type='primary'
        >
          Create new problem
        </Button>
      </div>
      <div className='max-[1500px]:w-100 max-[1000px]:pl-10 '>
        <img alt='Monitor' src={monitor} width={'250px'} />
      </div>
    </div>
  )
}
