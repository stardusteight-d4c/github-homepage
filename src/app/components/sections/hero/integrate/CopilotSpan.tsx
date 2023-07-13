import { CopilotIcon } from "@/app/components/atoms/icons/copilot"
import { copilotSpanStyles as css } from "./styles"

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
      <div className={css.caretContainer}>
        <div className={css.caret} />
        <span className={css.lineArrow} />
      </div>
    </div>
  )
}
