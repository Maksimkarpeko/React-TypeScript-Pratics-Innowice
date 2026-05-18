import type { FC, ReactNode } from 'react'
import { Header } from '../header/Header'

type MainLayoutProps = {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
