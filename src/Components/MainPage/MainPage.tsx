import { useSelector } from 'react-redux'
import { PageButton } from '../PageButton/PageButton'
import g from '../global.module.css'
import s from './mainPage.module.css'
import langJson from './../../lang/lang.json'
import { RootState } from '../store/store'

export const MainPage = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const mainText: string = currentLangData[1].main

  return (
    <div className={`${g.background} ${s.background}`}>
      <div className={s.mainTextWrp}>
        <p className={`${s.mainText} ${g.white}`}>{mainText}</p>
        <PageButton className={s.mainPageBtn} to='/about' nav={2} />
      </div>
    </div>
  )
}
