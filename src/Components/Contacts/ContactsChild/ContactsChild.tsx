import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import langJson from '../../../lang/lang.json'
import s from './contactChild.module.css'
import g from '../../global.module.css'
import { PersonSvg, PhoneSvg, MailSvg, LocationSvg } from '../../Constants'

export const ConctactChild = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const andrejs = currentLangData[1].contacts.andrejs
  const aigar = currentLangData[1].contacts.aigars
  const buh = currentLangData[1].contacts.buh
  const office = currentLangData[1].contacts.office
  const rek = currentLangData[1].contacts.rek

  return (
    <div className={s.contactsChildContainer}>
      <div className={s.stateContainer}>
        <div className={s.AAcontainer}>
          <div className={`${s.ccText} ${s.AAnames}`}>
            <span>{PersonSvg}</span>
            <p>{andrejs.name}</p>
          </div>
          <div className={s.ccText}>
            <span>{PhoneSvg}</span>
            <p>{andrejs.phone}</p>
          </div>
          <div className={s.ccText}>
            <span>{MailSvg}</span>
            <p>{andrejs.mail}</p>
          </div>
        </div>
        <div className={s.AAcontainer}>
          <div className={`${s.ccText} ${s.AAnames}`}>
            <span>{PersonSvg}</span>
            <p>{aigar.name}</p>
          </div>
          <div className={s.ccText}>
            <span>{PhoneSvg}</span>
            <p>{aigar.phone}</p>
          </div>
          <div className={s.ccText}>
            <span>{MailSvg}</span>
            <p>{aigar.mail}</p>
          </div>
        </div>
        <div className={s.contactsList}>
          <div className={s.ccText}>
            <span>{PersonSvg}</span>
            <p>{buh.name}</p>
          </div>
          <div className={s.ccText}>
            <span>{PhoneSvg}</span>
            <p>{buh.phone}</p>
          </div>
          <div className={s.ccText}>
            <span>{MailSvg}</span>
            <p>{buh.mail}</p>
          </div>
        </div>
      </div>
      <div className={s.companyContainer}>
        <div className={s.contactsList}>
          <div className={s.ccText}>
            <span>{LocationSvg}</span>
            <p>{office.adress}</p>
          </div>
          <div className={s.ccText}>
            <span>{PhoneSvg}</span>
            <p>{office.phone}</p>
          </div>
          <div className={s.ccText}>
            <span>{MailSvg}</span>
            <p>{office.mail}</p>
          </div>
        </div>
        <div className={s.contactsList}>
          <div className={`${s.ccText} ${s.AAnames}`}>
            <p>{rek.sia}</p>
          </div>
          <div className={s.ccText}>
            <p>{rek.reg}</p>
          </div>
          <div className={s.ccText}>
            <p>{rek.pvn}</p>
          </div>
          <div className={s.ccText}>
            <span>{LocationSvg}</span>
            <p>{rek.adress}</p>
          </div>
          <div className={s.ccText}>
            <p>{rek.bank}</p>
          </div>
          <div className={s.ccText}>
            <p>{rek.iban}</p>
          </div>
          <div className={s.ccText}>
            <p>{rek.mail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
