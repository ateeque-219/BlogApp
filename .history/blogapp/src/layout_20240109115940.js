import React from 'react'
import Head from './Head'
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