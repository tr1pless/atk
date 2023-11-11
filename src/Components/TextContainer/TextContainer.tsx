import g from '../global.module.css'
import s from './textContainer.module.css'

interface Props {
  title: string
  marginValue: number
  children: React.ReactNode
  fontSize: number
}
export const TextContainer = ({
  title,
  marginValue,
  children,
  fontSize,
}: Props) => {
  return (
    <>
      <div className={s.textContainer}>
        <fieldset>
          <legend
            style={{ marginLeft: `${marginValue}%`, fontSize: `${fontSize}px` }}
            className={`${s.containerTitle} ${g.yellow}`}
          >
            {title}
          </legend>
          <div className={`${g.white} ${g.textContainerChildsWrp}`}>
            {children}
          </div>
        </fieldset>
      </div>
    </>
  )
}
