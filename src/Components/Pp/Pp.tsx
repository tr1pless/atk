import s from './pp.module.css'
import g from '../global.module.css'
import { PageButton } from '../PageButton/PageButton'
import { TextContainer } from '../TextContainer/TextContainer'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import langJson from '../../lang/lang.json'

export const Pp = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const title = currentLangData[1].pp.pageTitle
  const ppData = currentLangData[1].pp
  const text = ppData.text
  return (
    <div className={`${g.background} ${s.ppContainer}`}>
      <TextContainer
        title={title}
        fontSize={80}
        marginValue={'0 auto 0 60px'}
        children={
          <>
            <div className={s.ppWrp}>
              <div>
                <h2 className={`${g.yellow} ${s.h2Title}`}>{ppData.sia}</h2>
                <p className={`${g.white} ${s.ppText}`}>{text[1]}</p>
                <p className={`${g.white} ${s.ppText}`}>{text[2]}</p>
                <p className={`${g.white} ${s.ppText}`}>{text[3]}</p>
                <p className={`${g.white} ${s.ppText}`}>{text[4]}</p>
                <h3 className={`${g.yellow} ${s.h3Title}`}>{ppData.phone1}</h3>
                <h3 className={`${g.yellow} ${s.h3Title}`}>{ppData.phone2}</h3>
              </div>
              <div>
                <iframe
                  className={s.gMap}
                  src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d70643.16177550518!2d23.354166!3d56.40574!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTbCsDI0JzIwLjciTiAyM8KwMjEnMTUuMCJF!5e0!3m2!1sru!2sus!4v1700755326247!5m2!1sru!2sus'
                  style={{ border: '0' }}
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
                to={'/contacts'}
                nav={6}
              />
              <PageButton className={g.nextButton} to={'/'} nav={1} />
            </div>
          </>
        }
      />
    </div>
  )
}
