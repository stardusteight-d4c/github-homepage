import { Check } from "@/app/components/atoms/icons/check"
import { Divider } from "./Divider"
import { buildStyles as css } from "./styles"

export const Build = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.buildSpan}>
        <Check className={css.check} />
        <span>Build</span>
      </span>
      <span className={css.timing}>1m 21s</span>
      <Divider />
    </div>
  )
}
