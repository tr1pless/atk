import s from './about.module.css'
import g from '../global.module.css'
import { TextContainer } from '../TextContainer/TextContainer'
import { useSelector, useDispatch } from 'react-redux'
import langJson from '../../lang/lang.json'
import { RootState } from '../store/store'

export const About = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  console.log(currentLangData[1].about.title1)
  return (
    <div className={`${g.background} ${s.aboutContainer}`}>
      <TextContainer title={currentLangData[1].about.title1} />
    </div>
  )
}
