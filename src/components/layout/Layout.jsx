import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SmoothScroll from '../../lib/SmoothScroll'
import ScrollToHash from '../../lib/ScrollToHash'

export default function Layout() {
  return (
    <>
      <SmoothScroll />
      <ScrollToHash />
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-screen bg-night" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}