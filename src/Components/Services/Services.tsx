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
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const servicesTitle = currentLangData[1].services.pageTitle
  const title = currentLangData[1].services.title1
  const title2 = currentLangData[1].services.title2
  const text = currentLangData[1].services.text1
  const text2 = currentLangData[1].services.text2

  return (
    <div className={`${g.background} ${s.servicesContainer}`}>
      <h1 className={`${g.pagesTitle} ${g.yellow} ${s.serviceTitle}`}>
        {servicesTitle}
      </h1>
      <TextContainer
        fontSize={60}
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
        fontSize={60}
        title={title2}
        marginValue={'0 100px 0 auto'}
        children={
          <div className={s.servicesItemList}>
            {text2.map((item: string) => {
              return (
                <p key={nanoid()} className={`${s.innerListItem} `}>
                  {item}
                </p>
              )
            })}
          </div>
        }
      />
      <div className={g.globalBtnsWrp}>
        <PageButton
          className={g.backButton}
          rev={true}
          nav={3}
          to={'/actual'}
        />
        <PageButton className={g.nextButton} nav={5} to={'/prices'} />
      </div>
    </div>
  )
}
