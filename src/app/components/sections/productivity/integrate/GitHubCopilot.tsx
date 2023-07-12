import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"
import { CopilotExamples } from "./copilot/CopilotExamples"
import { gitHubCopilotStyles as css } from "./styles"

export const GitHubCopilot = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.textContainer}>
          <p className={css.paragraph}>
            <span className={css.spanStrong}>GitHub Copilot </span>is your AI
            pair programmer that empowers you to complete tasks 55% faster by
            turning natural language prompts into coding suggestions.
          </p>
          <TextSpanWithUnderline
            title="Meet GitHub Copilot"
            styles="mt-[60px] text-[#f0f0f0]"
          />
        </div>
        <CopilotExamples />
      </div>
    </div>
  )
}
