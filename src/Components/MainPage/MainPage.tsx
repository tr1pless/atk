import { useSelector } from 'react-redux'
import { useState } from 'react'
import { PageButton } from '../PageButton/PageButton'
import g from '../global.module.css'
import s from './mainPage.module.css'
import langJson from './../../lang/lang.json'
import { RootState } from '../store/store'
import { LoadingPage } from '../LoadingPage/LoadingPage'

export const MainPage = () => {
  const [loading, setLoading] = useState(true)
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const mainText: string = currentLangData[1].main
  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <div className={`${g.background} `}>
      <img
        onLoad={handleLoad}
        className={`${g.backgroundImg} ${s.mainBg}`}
        src='/mainBg.jpg'
        alt='mainBg'
      />
      {loading ? (
        <LoadingPage />
      ) : (
        <div className={s.mainTextWrp}>
          <p className={`${s.mainText} ${g.white}`}>{mainText}</p>
          <PageButton className={s.mainPageBtn} to='/about' nav={2} />
        </div>
      )}
    </div>
  )
}
