import { textSpanWithUnderlineStyles as css } from "./styles"

interface Props {
  title: string
  styles?: string
}

export const TextSpanWithUnderline = ({ title, styles }: Props) => {
  return (
    <span className={css.wrapper(styles ?? "")}>
      <span className={css.title}>{title}</span>
      <div className={css.caretContainer}>
        <div className={css.caret} />
        <span className={css.arrowLine} />
      </div>
    </span>
  )
}
