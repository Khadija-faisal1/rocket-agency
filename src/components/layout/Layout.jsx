import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToHash from '../../lib/ScrollToHash'

export default function Layout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}
