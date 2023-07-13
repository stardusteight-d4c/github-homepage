import ghasList from "@/app/assets/illu-ghas-list.png"
import { Workflow } from "./integrate/Workflow"
import { buildWorkflowStyles as css } from "./styles"

export const BuildWorkflow = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.card}>
          <div className={css.spanContainer}>
            <span className={css.span1}>cmake.yml</span>
            <span className={css.span2}>on: push</span>
          </div>
          <Workflow />
        </div>
      </div>
      <img src={ghasList.src} alt="ghas_list/png" className={css.image} />
    </div>
  )
}
