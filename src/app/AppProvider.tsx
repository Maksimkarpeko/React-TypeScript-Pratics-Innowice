import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode, type FC, type PropsWithChildren } from 'react'

const queryClient = new QueryClient()

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  )
}
