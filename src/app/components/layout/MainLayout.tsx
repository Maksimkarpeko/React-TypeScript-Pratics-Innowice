import type { FC, PropsWithChildren } from 'react'
import { Header } from '../header/Header'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
