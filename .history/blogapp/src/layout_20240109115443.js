import React from 'react'
import { Outlet } from 'react-router-dom'
const layout = () => {
  return (
    <main>
      <Head></Head>
      <Outlet/>
    </main>
  )
}

export default layout