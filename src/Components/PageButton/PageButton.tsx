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
}

export const PageButton = ({ nav, to }: Props) => {
  const lang = useSelector((state: RootState) => state.counter.value)

  const data: any = Object.entries(langJson)
  const currentLangData = data[lang]
  return (
    <button className={s.pageButton}>
      <NavLink to={to} className={`${s.buttonTxt} ${g.yellow}`}>
        {currentLangData[1].nav[nav]}
      </NavLink>
      <span className={s.buttonSvg}>{arrowSvg}</span>
    </button>
  )
}
