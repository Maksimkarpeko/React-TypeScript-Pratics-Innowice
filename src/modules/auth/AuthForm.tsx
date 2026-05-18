import { Link } from '@tanstack/react-router'
import logo from '@shared/assets/logo.png'
import {
  Field,
  FieldGroup,
  FieldLabel,
  Button,
  Input,
  ErrorMessage,
  SuccessMessage,
  InputPassword,
} from '@shared/ui'
import { Route } from '@/app'
import { useAuth } from './hooks/use-auth'

export const AuthForm = () => {
  const { mode } = Route.useSearch()
  const {
    current,
    error,
    errors,
    fieldsLabel,
    handleSubmit,
    handleSubmitAuth,
    isError,
    isPending,
    register,
    isReg,
    currentSearchMode,
    isSuccess,
  } = useAuth(mode)

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src={logo} alt='Logo' width={'100px'} />
      <h1 className='text-3xl font-bold'>{current.title}</h1>
      <p className='text-xl'>{current.subTitle}</p>
      <form
        action='#'
        onSubmit={handleSubmit(handleSubmitAuth)}
        className='display-flex flex-col gap-4 w-full max-w-sm mt-5'
      >
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='fieldgroup-name'>{fieldsLabel.Name}</FieldLabel>
            <Input
              type='text'
              id='fieldgroup-name'
              placeholder='Jordan Lee'
              styleSize='lg'
              {...register('username')}
            />
            <ErrorMessage message={errors?.username?.message} />
          </Field>
          {isReg && (
            <Field>
              <FieldLabel htmlFor='fieldgroup-email'>{fieldsLabel.Email}</FieldLabel>
              <Input
                type='email'
                id='fieldgroup-email'
                placeholder='jordan.lee@example.com'
                styleSize='lg'
                {...register('email')}
              />
              <ErrorMessage message={errors?.email?.message} />
            </Field>
          )}
          <Field>
            <FieldLabel htmlFor='fieldgroup-password'>{fieldsLabel.Password}</FieldLabel>
            <InputPassword styleSize='lg' {...register('password')} />
            <ErrorMessage message={errors?.password?.message} />
          </Field>
          <Field orientation='horizontal'>
            <Button disabled={isPending} type='submit'>
              {isPending ? 'Loading...' : current.buttonText}
            </Button>
          </Field>
          <Field>
            <p>
              {current.footerText}{' '}
              <Link
                to='/auth'
                search={{ mode: currentSearchMode }}
                className='text-primary hover:border-b-2 hover:border-primary hover:transition-all'
              >
                {current.footerLink}
              </Link>
            </p>
          </Field>
          {isError && <ErrorMessage message={error?.message} />}
          {isSuccess && <SuccessMessage message='Success!!!' />}
        </FieldGroup>
      </form>
    </div>
  )
}
