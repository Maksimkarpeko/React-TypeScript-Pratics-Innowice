import { useNavigate } from '@tanstack/react-router'
import { APP_TEXT, type AuthModeType } from '@shared/constants'
import { Button } from '@shared/ui'
import logo from '@shared/assets/logo.png'

export const OnboardingPage = () => {
  const { onboarding, auth_mode } = APP_TEXT
  const navigate = useNavigate()

  const handleNavigate = (to: string, mode: AuthModeType) => {
    navigate({ to, search: { mode } })
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div>
        <img src={logo} alt='logo' className='w-24' />
      </div>
      <h1 className='text-3xl font-bold'>{onboarding.title}</h1>
      <p>{onboarding.description}</p>
      <div className='flex space-x-4 mt-5'>
        <Button
          variant='default'
          type='button'
          size={'lg'}
          onClick={() => handleNavigate('/auth', auth_mode.reg)}
        >
          {onboarding.registrationButton}
        </Button>
        <Button
          variant='outline'
          type='button'
          size={'lg'}
          onClick={() => handleNavigate('/auth', auth_mode.login)}
        >
          {onboarding.loginButton}
        </Button>
      </div>
    </div>
  )
}
