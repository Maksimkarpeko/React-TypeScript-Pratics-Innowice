import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Link } from '@tanstack/react-router'
import logo from '@shared/assets/logo.png'
import { Button, Form, Input } from 'antd'
import { Message } from '@shared/ui'
import { type AuthModeType, ROUTES_PATHS } from '@shared/constants'
import { useAuth } from './hooks/use-auth'
import { useCustomForm } from './hooks/use-custom-form'

type AuthFormProps = {
  mode: AuthModeType
}

export const AuthForm: FC<AuthFormProps> = ({ mode }) => {
  const { error, handleSubmitAuth, isError, isPending, isRegister, isSuccess } = useAuth(mode)

  const { current, errorsForm, handleSubmit, currentSearchMode, control, fieldsLabel } =
    useCustomForm(mode)

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src={logo} alt='Logo' width={'100px'} />
      <h1 className='text-3xl font-bold'>{current.title}</h1>
      <p className='text-xl'>{current.subTitle}</p>
      <form
        name='basic'
        action='#'
        onSubmit={handleSubmit(handleSubmitAuth)}
        className='display-flex flex-col gap-4 w-full max-w-sm mt-5'
      >
        <Form.Item
          label={fieldsLabel.name}
          help={errorsForm?.username?.message}
          validateStatus={errorsForm?.username ? 'error' : ''}
        >
          <Controller
            name='username'
            control={control}
            render={({ field }) => (
              <Input type={'text'} placeholder='Jordan Lee' size='large' {...field} />
            )}
          />
        </Form.Item>
        {isRegister && (
          <Form.Item
            label={fieldsLabel.email}
            validateStatus={errorsForm?.email ? 'error' : ''}
            help={errorsForm?.email?.message}
          >
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Input type='email' placeholder='jordan.lee@example.com' size='large' {...field} />
              )}
            />
          </Form.Item>
        )}
        <Form.Item
          label={fieldsLabel.password}
          validateStatus={errorsForm?.password ? 'error' : ''}
          help={errorsForm?.password?.message}
        >
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <Input.Password placeholder='•••••••••' size='large' {...field} />
            )}
          />
        </Form.Item>
        <Form.Item label={null}>
          <p>
            {current.footerText}{' '}
            <Link
              to={ROUTES_PATHS.auth}
              search={{ mode: currentSearchMode }}
              className='text-primary hover:border-b-2 hover:border-primary hover:transition-all'
            >
              {current.footerLink}
            </Link>
          </p>
        </Form.Item>

        <Form.Item label={null}>
          <Button disabled={isPending} type='primary' htmlType='submit'>
            {isPending ? 'Loading...' : current.buttonText}
          </Button>
        </Form.Item>

        {isError && <Message mode='error' message={error?.message} />}
        {isSuccess && <Message mode='success' message='Success!!!' />}
      </form>
    </div>
  )
}
