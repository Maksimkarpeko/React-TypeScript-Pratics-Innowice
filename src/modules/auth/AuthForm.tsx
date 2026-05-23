import type { FC } from 'react'

import logo from '@shared/assets/logo.png'
import { type AuthModeType, ROUTES_PATHS } from '@shared/constants'
import { Message } from '@shared/ui'
import { Link } from '@tanstack/react-router'
import { Button, Form, Input } from 'antd'
import { Controller } from 'react-hook-form'

import { useAuth } from './hooks/useAuth'
import { useCustomForm } from './hooks/useCustomForm'

type AuthFormProps = {
  mode: AuthModeType
}

export const AuthForm: FC<AuthFormProps> = ({ mode }) => {
  const { error, handleSubmitAuth, isError, isPending, isRegister, isSuccess } = useAuth(mode)

  const { current, errorsForm, handleSubmit, currentSearchMode, control, fieldsLabel } =
    useCustomForm(mode)

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img alt='Logo' src={logo} width={'100px'} />
      <h1 className='text-3xl font-bold'>{current.title}</h1>
      <p className='text-xl'>{current.subTitle}</p>
      <form
        action='#'
        className='display-flex flex-col gap-4 w-full max-w-sm mt-5'
        name='basic'
        onSubmit={handleSubmit(handleSubmitAuth)}
      >
        <Form.Item
          help={errorsForm?.username?.message}
          label={fieldsLabel.name}
          validateStatus={errorsForm?.username ? 'error' : ''}
        >
          <Controller
            control={control}
            name='username'
            render={({ field }) => (
              <Input placeholder='Jordan Lee' size='large' type={'text'} {...field} />
            )}
          />
        </Form.Item>
        {isRegister && (
          <Form.Item
            help={errorsForm?.email?.message}
            label={fieldsLabel.email}
            validateStatus={errorsForm?.email ? 'error' : ''}
          >
            <Controller
              control={control}
              name='email'
              render={({ field }) => (
                <Input placeholder='jordan.lee@example.com' size='large' type='email' {...field} />
              )}
            />
          </Form.Item>
        )}
        <Form.Item
          help={errorsForm?.password?.message}
          label={fieldsLabel.password}
          validateStatus={errorsForm?.password ? 'error' : ''}
        >
          <Controller
            control={control}
            name='password'
            render={({ field }) => (
              <Input.Password placeholder='•••••••••' size='large' {...field} />
            )}
          />
        </Form.Item>
        <Form.Item label={null}>
          <p>
            {current.footerText}{' '}
            <Link
              className='text-primary hover:border-b-2 hover:border-primary hover:transition-all'
              search={{ mode: currentSearchMode }}
              to={ROUTES_PATHS.auth}
            >
              {current.footerLink}
            </Link>
          </p>
        </Form.Item>

        <Form.Item label={null}>
          <Button disabled={isPending} htmlType='submit' type='primary'>
            {isPending ? 'Loading...' : current.buttonText}
          </Button>
        </Form.Item>

        {isError && <Message message={error?.message} mode='error' />}
        {isSuccess && <Message message='Success!!!' mode='success' />}
      </form>
    </div>
  )
}
