import { Check } from "@/app/components/atoms/icons/check"
import { buildStepData } from "./data"
import { buildRunningStyles as css } from "./styles"

interface BuildStepProps {
  name: string
  time: string
  styles?: string
}

export const BuildRunning = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.stepsSpan}>Steps</div>
      <div className={css.stepsContainer}>
        {buildStepData.map((step: any, index) => (
          <BuildStep key={index} {...step} />
        ))}
      </div>
    </div>
  )
}

const BuildStep = ({ name, time, styles }: BuildStepProps) => {
  return (
    <div className={css.buildStep.container(styles!)}>
      <span className={css.buildStep.checkContainer}>
        <Check className={css.buildStep.check} />
        <span>{name}</span>
      </span>
      <span className={css.buildStep.timing}>{time}</span>
    </div>
  )
}
