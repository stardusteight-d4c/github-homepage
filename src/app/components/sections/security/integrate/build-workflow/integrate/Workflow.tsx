import { Build } from "./Build"
import { BuildRunning } from "./BuildRunning"
import { workflowStyles as css } from "./styles"

export const Workflow = () => {
  return (
    <div className={css.wrapper}>
      <Build />
      <BuildRunning />
    </div>
  )
}
