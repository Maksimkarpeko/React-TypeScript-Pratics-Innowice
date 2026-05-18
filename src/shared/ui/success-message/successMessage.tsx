import type { FC } from 'react'

type SuccessMessageProps = {
  message: string
}

export const SuccessMessage: FC<SuccessMessageProps> = ({ message }) => {
  return <p className='text-green-400'>{message}</p>
}
