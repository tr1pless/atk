import { useEffect, useState } from 'react'
import { MobileNav } from './MobileNav'
import { DesktopNav } from './DesktopNav'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../MainPage/MainPage'
import { About } from '../About/About'
import { Services } from '../Services/Services'
import { Contacts } from '../Contacts/Contacts'
import { Pp } from '../Pp/Pp'

export const Navigation = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (windowSize.innerWidth < 800) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [windowSize.innerWidth])

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [windowSize.innerWidth])

  function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }

  return (
    <>
      {mobile ? <MobileNav /> : <DesktopNav />}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<MainPage />} />
        <Route path='/pp' element={<Pp />} />
      </Routes>
    </>
  )
}
