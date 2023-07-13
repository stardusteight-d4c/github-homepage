import { ArrowRight } from "../../atoms/icons/arrow-right"
import { callToActionStyles as css } from "./styles"

interface Props {
  mobile?: boolean
}

export const CallToAction = ({ mobile = false }: Props) => {
  return (
    <div className={css.wrapper(mobile)}>
      <button className={css.enterpriseTrialButton}>
        <span className={css.span}>Start a free enterprise trial</span>
        <ArrowRight />
      </button>
      <button className={css.signUpButton}>Sign up for GitHub</button>
    </div>
  )
}
