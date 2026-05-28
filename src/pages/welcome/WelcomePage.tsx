import logo from '@shared/assets/logo.png'
import { APP_TEXT, type AuthModeType, ROUTES_PATHS } from '@shared/constants'
import { useNavigate } from '@tanstack/react-router'
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
        <img alt='logo' className='w-24' src={logo} />
      </div>
      <h1 className='text-3xl font-bold'>{welcome.title}</h1>
      <p>{welcome.description}</p>
      <div className='flex space-x-4 mt-5'>
        <Button
          onClick={() => handleNavigate(ROUTES_PATHS.auth, authMode.register)}
          size={'large'}
          type='primary'
          variant='text'
        >
          {welcome.registrationButton}
        </Button>
        <Button
          onClick={() => handleNavigate(ROUTES_PATHS.auth, authMode.login)}
          size={'large'}
          type='default'
          variant='outlined'
        >
          {welcome.loginButton}
        </Button>
      </div>
    </div>
  )
}
