import g from '../global.module.css'
import s from './textContainer.module.css'

interface Props {
  title: string
}
export const TextContainer = ({ title }: Props) => {
  return (
    <>
      <div className={s.textContainer}>
        <fieldset>
          <legend className={`${s.containerTitle} ${g.yellow}`}>{title}</legend>
        </fieldset>
      </div>
    </>
  )
}
