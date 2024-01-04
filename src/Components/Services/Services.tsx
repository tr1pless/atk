import { TextContainer } from '../TextContainer/TextContainer'
import g from '../global.module.css'
import s from './services.module.css'
import langJson from '../../lang/lang.json'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { nanoid } from 'nanoid'
import { PageButton } from '../PageButton/PageButton'

export const Services = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const mobileData = useSelector((state: RootState) => state.counter.mobileData)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const servicesTitle = currentLangData[1].services.pageTitle
  const title = currentLangData[1].services.title1
  const title2 = currentLangData[1].services.title2
  const text = currentLangData[1].services.text1
  const text2 = currentLangData[1].services.text2
  const mw = currentLangData[1].services.mw
  const rs = currentLangData[1].services.rs

  return (
    <div className={`${g.background} ${s.servicesContainer}`}>
      <h1 className={`${g.pagesTitle} ${g.yellow} ${s.serviceTitle}`}>
        {servicesTitle}
      </h1>
      <TextContainer
        fontSize={mobileData ? 3.5 : 3.5}
        title={title}
        marginValue={'0 100px 0 auto'}
        children={
          <div>
            {text.map((item: string) => {
              return (
                <div className={g.multiTextContainer} key={nanoid()}>
                  <span className={g.triangleSpan}></span>
                  <p className={g.innerListItem}>{item}</p>
                </div>
              )
            })}
          </div>
        }
      />
      <TextContainer
        fontSize={mobileData ? 2.5 : 2.5}
        title={title2}
        marginValue={mobileData ? '0 20px 0 auto' : '0 100px 0 auto'}
        children={
          <>
            <div className={s.servicesItemList}>
              {text2.map((item: string) => {
                return (
                  <p key={nanoid()} className={`${s.innerListItem} `}>
                    {item}
                  </p>
                )
              })}
            </div>
            <div className={s.linksWrp}>
              <div className={s.linkContainer}>
                <h2 className={s.linksTitle}>{mw} : </h2>
                <a
                  className={s.euronextLink}
                  target='_blank'
                  href='https://live.euronext.com/en/product/commodities-futures/EBM-DPAR'
                ></a>
              </div>
              <div className={s.linkContainer}>
                <h2 className={s.linksTitle}>{rs} : </h2>
                <a
                  className={s.euronextLink}
                  target='_blank'
                  href='https://live.euronext.com/en/product/commodities-futures/ECO-DPAR'
                ></a>
              </div>
            </div>
          </>
        }
      />
      <div className={g.globalBtnsWrp}>
        <PageButton
          className={g.backButton}
          rev={true}
          nav={3}
          to={'/actual'}
        />
        <PageButton className={g.nextButton} nav={6} to={'/prices'} />
      </div>
    </div>
  )
}
