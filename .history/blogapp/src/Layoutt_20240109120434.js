import React from 'react'

const Layoutt = () => {
  return (
    import React from 'react'
    import Head from './Head'
    import { Outlet } from 'react-router-dom'
    const Layout = () => {
      return (
        <main>
          <Head></Head>
          <Outlet/>
        </main>
      )
    }
    
    export default Layout
  )
}

export default Layoutt