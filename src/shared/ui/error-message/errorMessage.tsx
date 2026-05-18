import type { FC } from 'react'

type ErrorMessageProps = {
  message?: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <p className='text-red-500'>{message}</p>
}
