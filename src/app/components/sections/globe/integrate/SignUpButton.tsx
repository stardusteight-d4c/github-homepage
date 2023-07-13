import { ArrowRight } from "@/app/components/atoms/icons/arrow-right"
import { signUpButtonStyles as css } from "./styles"

export const SignUpButton = () => {
  return (
    <button className={css.wrapper}>
      <span>Sign up for GitHub</span>
      <ArrowRight />
    </button>
  )
}
