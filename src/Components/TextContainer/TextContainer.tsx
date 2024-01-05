import g from '../global.module.css'
import s from './textContainer.module.css'

interface Props {
  title: string
  marginValue: string
  children: React.ReactNode
  fontSize?: number
  marginContainer?: string
}
export const TextContainer = ({
  title,
  marginValue,
  children,
  fontSize,
  marginContainer,
}: Props) => {
  return (
    <>
      <div style={{ margin: `${marginContainer}` }} className={s.textContainer}>
        <fieldset>
          <legend
            style={{ margin: `${marginValue}`, fontSize: `${fontSize}rem` }}
            className={`${s.containerTitle} ${g.yellow} ${g.pagesTitle} `}
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
