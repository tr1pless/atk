import s from './pageButton.module.css'
import g from '../global.module.css'
import langJson from '../../lang/lang.json'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface Props {
  nav: number
  to: string
  className?: string
  rev?: boolean
  pp?: boolean
  cClass?: boolean
}

export const PageButton = ({ nav, to, className, rev, pp, cClass }: Props) => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data: any = Object.entries(langJson)
  const currentLangData = data[lang]
  return (
    <button className={`${s.pageButton} ${className}`}>
      <NavLink
        to={to}
        style={rev ? { marginRight: '8px' } : { transform: 'rotate(0)' }}
        className={
          cClass
            ? `${s.contactsLink} ${s.buttonTxt} ${g.yellow}`
            : ` ${s.buttonTxt} ${g.yellow}`
        }
      >
        {pp ? currentLangData[1].ppBtn : currentLangData[1].nav[nav]}
      </NavLink>
      <span
        className={s.pbSpan}
        style={
          rev
            ? { transform: 'rotate(180deg)', marginBottom: '7px' }
            : { transform: 'rotate(0)', marginTop: '7px' }
        }
        // className={s.buttonSvg}
      >
        <svg
          className={s.arrowSvg}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 54 37'
          fill='none'
        >
          <path
            d='M10.9525 35L6 31.3459L22.3433 19.4948L6 7.65412L10.9525 4L32.25 19.4948L10.9525 35Z'
            fill='#E1D48E'
          />
        </svg>
      </span>
    </button>
  )
}
