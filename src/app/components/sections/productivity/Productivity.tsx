import { ReactNode } from "react"
import {
  Header,
  Editor,
  Branch,
  GitHubCopilot,
  GitHubActions,
  GitHubMobile,
} from "./integrate"
import { productivityStyles as css } from "./styles"

interface GridContainerProps {
  children: ReactNode
}

export const Productivity = () => {
  return (
    <section id="productivity" className={css.wrapper}>
      <Header />
      <div className={css.container}>
        <Editor />
        <Branch />
        <GitHubCopilot />
        <GridContainer>
          <GitHubActions />
          <GitHubMobile />
          <div className={css.collaborationBranchLine} />
        </GridContainer>
      </div>
    </section>
  )
}

const GridContainer = ({ children }: GridContainerProps) => {
  return (
    <div className={css.gridContainer.wrapper}>
      <div className={css.gridContainer.container}>{children}</div>
    </div>
  )
}
