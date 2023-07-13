import issuesPlan from "@/app/assets/issues-plan.png"
import projects from "@/app/assets/illu-projects.png"
import { issuesStyles as css } from "./styles"

export const Issues = () => {
  return (
    <div className={css.container}>
      <img
        src={issuesPlan.src}
        alt="issues_plan/png"
        className={css.issuesImage}
      />
      <img
        src={projects.src}
        alt="projects/png"
        className={css.projectsImage}
      />
    </div>
  )
}
