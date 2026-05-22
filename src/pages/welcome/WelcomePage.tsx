import { useNavigate } from '@tanstack/react-router'
import { APP_TEXT, type AuthModeType, ROUTES_PATHS } from '@shared/constants'
import logo from '@shared/assets/logo.png'
import { Button } from 'antd'

export const WelcomePage = () => {
  const { welcome, authMode } = APP_TEXT
  const navigate = useNavigate()

  const handleNavigate = (to: string, mode: AuthModeType) => {
    navigate({ to, search: { mode } })
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div>
        <img src={logo} alt='logo' className='w-24' />
      </div>
      <h1 className='text-3xl font-bold'>{welcome.title}</h1>
      <p>{welcome.description}</p>
      <div className='flex space-x-4 mt-5'>
        <Button
          variant='text'
          type='primary'
          size={'large'}
          onClick={() => handleNavigate(ROUTES_PATHS.auth, authMode.register)}
        >
          {welcome.registrationButton}
        </Button>
        <Button
          variant='outlined'
          type='default'
          size={'large'}
          onClick={() => handleNavigate(ROUTES_PATHS.auth, authMode.login)}
        >
          {welcome.loginButton}
        </Button>
      </div>
    </div>
  )
}
