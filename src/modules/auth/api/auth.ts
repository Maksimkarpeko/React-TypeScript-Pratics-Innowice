import { BASE_URL } from '@shared/constants'
import type { AuthFormFields } from '../schema/auth'
import type { User } from './auth.type'

export const registrationUser = async ({
  username,
  password,
  email,
}: AuthFormFields): Promise<User> => {
  try {
    const response = await fetch(BASE_URL + '/user/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })

    if (!response.ok) {
      throw new Error('Ops problem with the server!!!')
    }

    const data: User = await response.json()
    localStorage.setItem('user', JSON.stringify(data))
    return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Ops problem with the server!!!')
  }
}

export const loginUser = async ({ username, password }: AuthFormFields): Promise<User> => {
  try {
    const response = await fetch(`${BASE_URL}auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
      credentials: 'include',
    })

    if (response.status === 400) {
      throw new Error('The password or username maybe incorrect.')
    }

    if (!response.ok ) {
      throw new Error('Ops problem with the server!!!')
    }

    const data: User = await response.json()
    localStorage.setItem('user', JSON.stringify(data))
    return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Ops problem with the server!!!')
  }
}
