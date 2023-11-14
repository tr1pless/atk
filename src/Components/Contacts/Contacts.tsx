import g from '../global.module.css'
import { Form } from './Form/Form'
import { TextContainer } from '../TextContainer/TextContainer'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import langJson from '../../lang/lang.json'
import { ConctactChild } from './ContactsChild/ContactsChild'

export const Contacts = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const title = currentLangData[1].contacts.pageTitle

  return (
    <div className={g.background}>
      <TextContainer
        title={title}
        fontSize={80}
        marginValue={'0 auto 0 60px'}
        children={<ConctactChild />}
      />
      <Form />
    </div>
  )
}
