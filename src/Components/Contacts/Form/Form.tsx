import s from './form.module.css'
import g from '../../global.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import langJson from '../../../lang/lang.json'

export const Form = () => {
  const lang = useSelector((state: RootState) => state.counter.value)
  const data = Object.entries(langJson)
  const currentLangData: any = data[lang]
  const formData = currentLangData[1].form
  return (
    <>
      <form className={s.form} action='submit'>
        <div className={s.inputsWrp}>
          <input className={g.white} placeholder={formData.name} type='text' />
          <input className={g.white} placeholder={formData.mail} type='email' />
          <input
            className={g.white}
            placeholder={formData.number}
            type='text'
          />
        </div>
        <textarea
          placeholder={formData.text}
          className={g.white}
          name=''
          id=''
          rows={1}
        ></textarea>
        <button className={`${g.white}  ${s.submitButton}`}>
          <p className={s.formButtonText}>{formData.button}</p>
          <svg
            className={s.formButtonSvg}
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
          >
            <path
              d='M21.2729 14.9062C20.9792 14.6812 20.6479 14.5791 20.3229 14.5791C19.5125 14.5791 18.75 15.2166 18.75 16.1395V33.8499C18.75 34.777 19.5146 35.4124 20.3229 35.4124C20.65 35.4124 20.9812 35.3083 21.275 35.0812C24.5125 32.5749 30.0229 28.3062 32.7292 26.2104C33.1125 25.9145 33.3333 25.4604 33.3333 24.977C33.3333 24.4979 33.1104 24.0416 32.7271 23.7458L21.2729 14.9062ZM21.875 30.6624V19.3166L29.2125 24.9812L21.875 30.6624Z'
              fill='white'
            />
          </svg>
        </button>
      </form>
    </>
  )
}
