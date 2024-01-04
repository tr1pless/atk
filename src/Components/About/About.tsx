import s from './about.module.css'
import g from '../global.module.css'
import { TextContainer } from '../TextContainer/TextContainer'
import { useSelector } from 'react-redux'
import langJson from '../../lang/lang.json'
import { RootState } from '../store/store'
import { nanoid } from 'nanoid'
import { PageButton } from '../PageButton/PageButton'

export const About = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const title = currentLangData[1].about.title1
  const text = currentLangData[1].about.text1
  const text2 = currentLangData[1].about.text2
  const mobileData = useSelector((state: RootState) => state.counter.mobileData)

  return (
    <div className={`${g.background} ${s.aboutContainer}`}>
      <TextContainer
        marginValue={'0 auto 0 5%'}
        title={title}
        children={<p className={g.TextContainerText}>{text}</p>}
        fontSize={mobileData ? 4 : 4}
      />
      <TextContainer
        fontSize={mobileData ? 1.3 : 1.5}
        marginValue={'0 auto 0 5%'}
        title={currentLangData[1].about.title2}
        children={
          <div>
            {text2.map((item: string) => {
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
      <div className={g.globalBtnsWrp}>
        <PageButton className={g.backButton} rev={true} to={'/'} nav={1} />
        <PageButton className={g.nextButton} to={'/actual'} nav={3} />
      </div>
    </div>
  )
}
