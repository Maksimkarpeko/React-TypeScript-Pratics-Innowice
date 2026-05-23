import type { User } from '@shared/types'

import { BASE_URL } from '@shared/constants'
import { customFetch } from '@shared/utils'

import type { AuthFormFields } from '../schema/auth.schema'

export const registrationUser = async ({
  username,
  password,
  email,
}: AuthFormFields): Promise<User> => {
  const response = await customFetch<User>(`${BASE_URL}/user/add`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  })
  return response
}

export const loginUser = async ({
  username,
  password,
}: Pick<AuthFormFields, 'username' | 'password'>): Promise<User> => {
  const response = await customFetch<User>(`${BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
  })
  return response
}
