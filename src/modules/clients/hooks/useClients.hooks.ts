import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { getClients } from '../api/clients.api'

export const useClients = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => getClients(),
    placeholderData: keepPreviousData,
  })
}
