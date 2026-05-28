import type { ResponseType, User } from '@/shared/types'

import { customFetch } from '@/shared/utils'

export const getClients = async (): Promise<ResponseType<User, 'users'>> => {
  return await customFetch<ResponseType<User, 'users'>>('users?limit=0&skip=0')
}
