import { ArrowRight } from "@/app/components/atoms/icons/arrow-right"
import { enterpriseTrialButtonStyles as css } from "./styles"

export const EnterpriseTrialButton = () => {
  return (
    <button className={css.wrapper}>
      <span className={css.container}>Start a free enterprise trial</span>
      <ArrowRight />
    </button>
  )
}
