import g from '../global.module.css'
import s from './contacts.module.css'
import { Form } from './Form/Form'
import { TextContainer } from '../TextContainer/TextContainer'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import langJson from '../../lang/lang.json'
import { ConctactChild } from './ContactsChild/ContactsChild'
import { PageButton } from '../PageButton/PageButton'
import { useState } from 'react'
import { LoadingPage } from '../LoadingPage/LoadingPage'

export const Contacts = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const title = currentLangData[1].contacts.pageTitle
  const mobileData = useSelector((state: RootState) => state.counter.mobileData)
  const [loading, setLoading] = useState(true)
  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <div className={`${g.background} ${s.contactsContainer}`}>
      <img
        onLoad={handleLoad}
        className={g.backgroundImg}
        src='/conctactsBg.jpg'
        alt='contactsBg'
      />
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <TextContainer
            title={title}
            fontSize={mobileData ? 3 : 3}
            marginValue={'0 auto 0 60px'}
            children={
              <>
                <ConctactChild />
                <div className={g.globalBtnsWrp}>
                  <PageButton
                    className={`${g.backButton} `}
                    rev={true}
                    to={'/prices'}
                    nav={4}
                    cClass={true}
                  />
                  <PageButton
                    className={`${g.nextButton} `}
                    pp={true}
                    to={'/pp'}
                    nav={7}
                    cClass={true}
                  />
                </div>
              </>
            }
          />
          <Form />
        </>
      )}
    </div>
  )
}
