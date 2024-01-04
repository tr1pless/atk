import { NavLink } from 'react-router-dom'
import g from '../global.module.css'
import s from './footer.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import langJson from '../../lang/lang.json'

export const Footer = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]

  return (
    <footer className={s.footerContainer}>
      <ul className={`${s.listLinks} ${g.m50}`}>
        <NavLink to='/' className={`${s.footerLinks} ${g.white}`}>
          {currentLangData[1].nav[1]}
        </NavLink>
        <NavLink to='/about' className={`${s.footerLinks} ${g.white}`}>
          {currentLangData[1].nav[2]}
        </NavLink>
        <NavLink to='/actual' className={`${s.footerLinks} ${g.white}`}>
          {currentLangData[1].nav[3]}
        </NavLink>
        <NavLink to='/services' className={`${s.footerLinks} ${g.white}`}>
          {currentLangData[1].nav[4]}
        </NavLink>
        <NavLink to='/prices' className={`${s.footerLinks} ${g.white}`}>
          {currentLangData[1].nav[5]}
        </NavLink>
        <NavLink to='/contacts' className={`${s.footerLinks} ${g.white}`}>
          {currentLangData[1].nav[6]}
        </NavLink>
        <NavLink to='/pp' className={`${s.footerLinks} ${g.white}`}>
          {currentLangData[1].nav[7]}
        </NavLink>
      </ul>
      <img className={s.certImg} src='/cert.png' alt='Certificate' />
      <ul className={s.footerContactsList}>
        <li className={`${s.footerContacts} ${g.white}`}>
          SIA Agrotirdzniecības kompānija
        </li>
        <li className={`${s.footerContacts} ${g.white}`}>
          Āres, Augstkalnes pag.
        </li>
        <li className={`${s.footerContacts} ${g.white}`}>
          Dobeles nov., LV-3709
        </li>
        <li className={`${s.footerContacts} ${g.white}`}>
          Reģ.Nr. 40003302398
        </li>
        <li className={`${s.footerContacts} ${g.white}`}>
          PVN maks.nr. LV40003302398{' '}
        </li>
        <li className={`${s.footerContacts} ${g.white}`}>Tel. +371 29256981</li>
        <li className={`${s.footerContacts} ${g.white}`}>
          epasts: info@atk.lv
        </li>
      </ul>
    </footer>
  )
}
