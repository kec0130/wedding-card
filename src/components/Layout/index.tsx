import { Outlet } from 'react-router-dom'
import GNB from './GNB'

const Layout = () => {
  return (
    <>
      <GNB />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
