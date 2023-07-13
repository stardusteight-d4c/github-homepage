import { ArrowRight } from "@/app/components/atoms/icons/arrow-right"
import { formStyles as css } from "./styles"

export const Form = () => {
  return (
    <div className={css.wrapper}>
      <form className={css.form}>
        <div className={css.container}>
          <div className={css.inputContainer}>
            <input
              type="text"
              placeholder="Email address"
              className={css.input}
            />
          </div>
          <button type="button" className={css.signUpButton}>
            Sign up for GitHub
          </button>
        </div>
      </form>
      <div className={css.divider} />
      <button className={css.enterpriseTrial.container}>
        <span className={css.enterpriseTrial.span}>
          Start a free enterprise trial
        </span>
        <ArrowRight />
      </button>
    </div>
  )
}
