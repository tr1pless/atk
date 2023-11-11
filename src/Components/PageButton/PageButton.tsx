import s from './pageButton.module.css'
import g from '../global.module.css'
import { arrowSvg } from '../Constants'
import langJson from '../../lang/lang.json'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface Props {
  nav: number
  to: string
  className?: string
  rev?: boolean
}

export const PageButton = ({ nav, to, className, rev }: Props) => {
  const lang = useSelector((state: RootState) => state.counter.value)

  const data: any = Object.entries(langJson)
  const currentLangData = data[lang]
  return (
    <button className={`${s.pageButton} ${className}`}>
      <NavLink to={to} className={`${s.buttonTxt} ${g.yellow}`}>
        {currentLangData[1].nav[nav]}
      </NavLink>
      <span
        style={
          rev
            ? { transform: 'rotate(180deg)', marginBottom: '5px' }
            : { transform: 'rotate(0)' }
        }
        className={s.buttonSvg}
      >
        {arrowSvg}
      </span>
    </button>
  )
}
