import { useState } from 'react'
import { MobileNav } from './MobileNav'
import { DesktopNav } from './DesktopNav'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../MainPage/MainPage'

export const Navigation = () => {
  const [mobile, setMobile] = useState(false)
  return (
    <>
      {mobile ? <MobileNav /> : <DesktopNav />}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/main' element={<MainPage />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/pricelist' element={<Pricelist />} /> */}
        {/* <Route path='/contacts' element={<Contacts />} /> */}
        {/* <Route path='*' element={<Main />} /> */}
      </Routes>
    </>
  )
}
