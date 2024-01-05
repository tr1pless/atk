import { useState, useRef, useEffect } from 'react'
import s from './mobnav.module.css'
import g from '../global.module.css'
import { NavLink } from 'react-router-dom'
import { language } from '../store/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import langJson from '../../lang/lang.json'
import { RootState } from '../store/store'

export const MobileNav = () => {
  const [hide, setHide] = useState(true)
  const dispatch = useDispatch()
  const menu = useRef<HTMLDivElement>(null)
  const lang = useSelector((state: RootState) => state.counter.value)
  const btnArr = ['Rus', 'Eng', 'Lat']
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!menu?.current?.contains(event.target)) {
        setHide(true)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [menu])
  return (
    <>
      <div className={s.logo}>
        <div className={s.logoBackground}></div>
        <img className={s.logoImg} src='/logo.png' alt='Logo' />
      </div>

      <button className={s.burgerBtn} onClick={() => setHide(!hide)}>
        <svg
          className={s.burgerSvg}
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='33'
          viewBox='0 0 48 33'
          fill='none'
        >
          <path
            d='M26.4 30.8478C26.4 29.6598 25.5936 28.6957 24.6 28.6957H1.8C0.8064 28.6957 0 29.6598 0 30.8478C0 32.0358 0.8064 33 1.8 33H24.6C25.5936 33 26.4 32.0358 26.4 30.8478ZM48 16.5C48 15.312 47.1936 14.3478 46.2 14.3478H1.8C0.8064 14.3478 0 15.312 0 16.5C0 17.688 0.8064 18.6522 1.8 18.6522H46.2C47.1936 18.6522 48 17.688 48 16.5ZM38.4 2.15217C38.4 0.964174 37.5936 0 36.6 0H1.8C0.8064 0 0 0.964174 0 2.15217C0 3.34017 0.8064 4.30435 1.8 4.30435H36.6C37.5936 4.30435 38.4 3.34017 38.4 2.15217Z'
            fill='white'
          />
        </svg>
      </button>
      <div
        ref={menu}
        className={
          hide == true ? `${s.hideNav} ${s.navigation}` : `${s.navigation}`
        }
      >
        <div className={s.mobNavWrp}>
          <div className={s.mobileMenuLeftSection}>
            <img className={s.certImg} src='/cert.png' alt='Certificate' />
            <button className={s.burgerBtnInner} onClick={() => setHide(!hide)}>
              <svg
                className={s.burgerSvgInner}
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='33'
                viewBox='0 0 48 33'
                fill='none'
              >
                <path
                  d='M26.4 30.8478C26.4 29.6598 25.5936 28.6957 24.6 28.6957H1.8C0.8064 28.6957 0 29.6598 0 30.8478C0 32.0358 0.8064 33 1.8 33H24.6C25.5936 33 26.4 32.0358 26.4 30.8478ZM48 16.5C48 15.312 47.1936 14.3478 46.2 14.3478H1.8C0.8064 14.3478 0 15.312 0 16.5C0 17.688 0.8064 18.6522 1.8 18.6522H46.2C47.1936 18.6522 48 17.688 48 16.5ZM38.4 2.15217C38.4 0.964174 37.5936 0 36.6 0H1.8C0.8064 0 0 0.964174 0 2.15217C0 3.34017 0.8064 4.30435 1.8 4.30435H36.6C37.5936 4.30435 38.4 3.34017 38.4 2.15217Z'
                  fill='white'
                />
              </svg>
            </button>
          </div>
          <ul className={s.linksList}>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? `${s.activeLink} ${s.link} ${g.yellow}`
                  : `${s.link} ${g.white}`
              }
            >
              {currentLangData[1].nav[1]}
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive
                  ? `${s.activeLink} ${s.link} ${g.yellow}`
                  : `${s.link} ${g.white}`
              }
            >
              {currentLangData[1].nav[2]}
            </NavLink>
            <NavLink
              to='/actual'
              className={({ isActive }) =>
                isActive
                  ? `${s.activeLink} ${s.link} ${g.yellow}`
                  : `${s.link} ${g.white}`
              }
            >
              {currentLangData[1].nav[3]}
            </NavLink>
            <NavLink
              to='/services'
              className={({ isActive }) =>
                isActive
                  ? `${s.activeLink} ${s.link} ${g.yellow}`
                  : `${s.link} ${g.white}`
              }
            >
              {currentLangData[1].nav[4]}
            </NavLink>
            <NavLink
              to='/contacts'
              className={({ isActive }) =>
                isActive
                  ? `${s.activeLink} ${s.link} ${g.yellow}`
                  : `${s.link} ${g.white}`
              }
            >
              {currentLangData[1].nav[6]}
            </NavLink>
            <NavLink
              to='/pp'
              className={({ isActive }) =>
                isActive
                  ? `${s.activeLink} ${s.link} ${g.yellow}`
                  : `${s.link} ${g.white}`
              }
            >
              {currentLangData[1].nav[7]}
            </NavLink>
            <button
              className={`${s.langBtn} ${g.yellow}`}
              onClick={() => dispatch(language())}
            >
              {btnArr[lang]}
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}
