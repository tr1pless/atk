import s from './pp.module.css'
import g from '../global.module.css'
import { PageButton } from '../PageButton/PageButton'
import { TextContainer } from '../TextContainer/TextContainer'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import langJson from '../../lang/lang.json'
import { useState } from 'react'
import { LoadingPage } from '../LoadingPage/LoadingPage'

export const Pp = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const title = currentLangData[1].pp.pageTitle
  const ppData = currentLangData[1].pp
  const text = ppData.text
  const mobileData = useSelector((state: RootState) => state.counter.mobileData)

  const [loading, setLoading] = useState(true)
  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <div className={`${g.background} `}>
      <img
        onLoad={handleLoad}
        className={g.backgroundImg}
        src='/ppBg.jpg'
        alt='mainBg'
      />
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <TextContainer
            title={title}
            fontSize={mobileData ? 1.9 : 2.5}
            marginValue={'0 auto 0 60px'}
            children={
              <>
                <div className={s.ppWrp}>
                  <div className={s.ppTextWrp}>
                    <h2 className={`${g.yellow} ${s.h2Title}`}>{ppData.sia}</h2>
                    <p className={`${g.white} ${s.ppText}`}>{text[1]}</p>
                    <p className={`${g.white} ${s.ppText}`}>{text[2]}</p>
                    <p className={`${g.white} ${s.ppText}`}>{text[3]}</p>
                    <p className={`${g.white} ${s.ppText}`}>{text[4]}</p>
                    <h3 className={`${g.yellow} ${s.h3Title}`}>
                      {ppData.phone1}
                    </h3>
                    <h3 className={`${g.yellow} ${s.h3Title}`}>
                      {ppData.phone2}
                    </h3>
                  </div>
                  <div className={s.mapWrp}>
                    <iframe
                      className={s.gMap}
                      src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d70643.16177550518!2d23.354166!3d56.40574!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTbCsDI0JzIwLjciTiAyM8KwMjEnMTUuMCJF!5e0!3m2!1sru!2sus!4v1700755326247!5m2!1slv!2sus'
                      style={{
                        filter: 'invert(90%) grayscale(1)',
                        border: '0',
                      }}
                      allowFullScreen={true}
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                  </div>
                </div>
                <div className={g.globalBtnsWrp}>
                  <PageButton
                    className={g.backButton}
                    rev={true}
                    to={'/services'}
                    nav={4}
                  />
                  <PageButton
                    className={g.nextButton}
                    to={'/contacts'}
                    nav={7}
                  />
                </div>
              </>
            }
          />
        </>
      )}
    </div>
  )
}
