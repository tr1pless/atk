import { useEffect, useState } from 'react'
import { MobileNav } from './MobileNav'
import { DesktopNav } from './DesktopNav'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../MainPage/MainPage'
import { About } from '../About/About'
import { Services } from '../Services/Services'
import { Contacts } from '../Contacts/Contacts'
import { Pp } from '../Pp/Pp'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useDispatch } from 'react-redux'
import { mobile, smallDevice } from '../store/counterSlice'

export const Navigation = () => {
  const mobileData = useSelector((state: RootState) => state.counter.mobileData)
  const sdData = useSelector((state: RootState) => state.counter.sdData)

  const dispatch = useDispatch()

  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    if (windowSize.innerWidth < 500) {
      dispatch(smallDevice(true))
      dispatch(mobile(false))
      console.log('sd on', mobileData, sdData)
    } else if (windowSize.innerWidth < 1000 && windowSize.innerWidth > 500) {
      dispatch(smallDevice(false))
      dispatch(mobile(true))
      console.log('mobile on', mobileData, sdData)
    } else {
      dispatch(mobile(false))
      dispatch(smallDevice(false))
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
      {mobileData || sdData ? <MobileNav /> : <DesktopNav />}
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
