import g from '../global.module.css'
import s from './textContainer.module.css'

interface Props {
  title: string
  marginValue: string
  children: React.ReactNode
  fontSize?: number
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
            style={{ margin: `${marginValue}`, fontSize: `${fontSize}px` }}
            className={`${s.containerTitle} ${g.yellow} ${g.pagesTitle}`}
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
