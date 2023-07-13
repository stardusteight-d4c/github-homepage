import { CopilotIcon } from "@/app/components/atoms/icons/copilot"
import { copilotSpanStyles as css } from "./styles"
import { ArrowRight } from "@/app/components/atoms/icons/arrow-right"

export const CopilotSpan = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.copilotIconContainer}>
        <CopilotIcon className={css.icon} />
      </div>
      <div className={css.textContent}>
        <strong className={css.main}>Introducing GitHub Copilot X</strong>
        <span className={css.secondary}>
          Your AI pair programmer is leveling up
        </span>
      </div>
      <ArrowRight />
    </div>
  )
}
