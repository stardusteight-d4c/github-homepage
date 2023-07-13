import { ArrowRight } from "../atoms/icons/arrow-right"
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
        <ArrowRight />
      </div>
    </span>
  )
}
