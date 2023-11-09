import g from '../global.module.css'
import s from './mainPage.module.css'

export const MainPage = () => {
  return (
    <div className={g.background}>
      <div className={s.mainTextWrp}>
        <p className={`${s.mainText} ${g.white}`}>
          Vienmēr centīsimies atrast optimālāko sadarbības modeli jūsu ražas
          realizācijai, un noteikti atradīsim kompromisu lai strādātu ilgstoši
          un produktīvi.
        </p>
      </div>
    </div>
  )
}
