import React, { useState, type FC } from 'react'
import { Input } from '../input/input'
import { Button } from '../button/button'
import { Eye, EyeClosed } from 'lucide-react'

export const InputPassword: FC<React.ComponentProps<typeof Input>> = ({ ...rest }) => {
  const [showEye, setShowEye] = useState<boolean>(false)

  return (
    <div className='relative w-full'>
      <Input type={showEye ? 'text' : 'password'} placeholder='••••••••' {...rest} />
      <Button
        type='button'
        className='absolute right-2 top-1'
        variant={'ghost'}
        onClick={() => setShowEye(!showEye)}
      >
        {showEye ? <EyeClosed /> : <Eye />}
      </Button>
    </div>
  )
}
