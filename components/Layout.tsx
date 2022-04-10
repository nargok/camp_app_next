import Link from 'next/link'
import { ReactNode } from 'react'
import SideBar from './SideBar'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 flex h-14 items-center justify-center bg-purple-200 font-semibold uppercase">
        Camp App
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <SideBar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

export default Layout
