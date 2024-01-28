import React from 'react'
import { Outlet } from 'react-router'
const layout = () => {
  return (
    <main>
      <Head></Head>
      <Outlet/>
    </main>
  )
}

export default layout