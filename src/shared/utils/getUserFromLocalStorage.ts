import type { User } from '../types'

export const getUserFromLocalStorage = (): User | null => {
  try {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  } catch (error:unknown) {
    if (error instanceof Error) {
      throw error
    }
    return null
  }
}
