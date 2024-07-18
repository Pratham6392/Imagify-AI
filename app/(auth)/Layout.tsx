import React, { ReactNode } from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>{children}</main>
  )
}

export default Layout