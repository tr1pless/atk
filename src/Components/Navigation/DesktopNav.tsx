import s from './desknav.module.css'
import g from '../global.module.css'
import { NavLink } from 'react-router-dom'
import { language } from '../store/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import langJson from '../../lang/lang.json'
import { RootState } from '../store/store'

export const DesktopNav = () => {
  const dispatch = useDispatch()
  const lang = useSelector((state: RootState) => state.counter.value)
  const btnArr = ['Rus', 'Eng', 'Lat']
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  return (
    <div className={s.navigation}>
      <div className={s.navBackground}></div>
      <div className={s.navWrp}>
        <div className={s.logo}>
          <img className={s.logoImg} src='/logo.png' alt='Logo' />
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
            to='/pp'
            className={({ isActive }) =>
              isActive
                ? `${s.activeLink} ${s.link} ${g.yellow}`
                : `${s.link} ${g.white}`
            }
          >
            {currentLangData[1].nav[6]}
          </NavLink>
          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              isActive
                ? `${s.activeLink} ${s.link} ${g.yellow}`
                : `${s.link} ${g.white}`
            }
          >
            {currentLangData[1].nav[7]}
          </NavLink>
        </ul>
        <button
          className={`${s.langBtn} ${g.yellow}`}
          onClick={() => dispatch(language())}
        >
          {btnArr[lang]}
        </button>
      </div>
      <div className={s.line}></div>
    </div>
  )
}
