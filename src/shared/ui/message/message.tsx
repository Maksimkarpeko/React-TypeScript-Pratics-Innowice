import type { FC } from 'react'

type ErrorMessageProps = {
  message?: string
  mode: 'success' | 'error'
}

export const Message: FC<ErrorMessageProps> = ({ message, mode }) => {
  return <p className={mode === 'error' ? 'text-red-500' : 'text-green-500'}>{message}</p>
}
