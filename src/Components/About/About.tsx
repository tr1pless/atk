import s from './about.module.css'
import g from '../global.module.css'
import { TextContainer } from '../TextContainer/TextContainer'
import { useSelector } from 'react-redux'
import langJson from '../../lang/lang.json'
import { RootState } from '../store/store'
import { nanoid } from 'nanoid'

export const About = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const title = currentLangData[1].about.title1
  const text = currentLangData[1].about.text1
  const text2 = currentLangData[1].about.text2

  return (
    <div className={`${g.background} ${s.aboutContainer}`}>
      <TextContainer
        marginValue={5}
        title={title}
        children={<p>{text}</p>}
        fontSize={70}
      />
      <TextContainer
        fontSize={45}
        marginValue={5}
        title={currentLangData[1].about.title2}
        children={
          <div>
            {text2.map((item: string) => {
              return (
                <div className={g.multiTextContainer} key={nanoid()}>
                  <span className={g.triangleSpan}></span>
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        }
      />
    </div>
  )
}