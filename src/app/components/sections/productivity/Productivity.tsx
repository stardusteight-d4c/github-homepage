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

interface WrapperProps {
  children: ReactNode
}

interface GridContainerProps {
  children: ReactNode
}

export const Productivity = () => {
  return (
    <Wrapper>
      <Header />
      <Editor />
      <Branch />
      <GitHubCopilot />
      <GridContainer>
        <GitHubActions />
        <GitHubMobile />
        <div className={css.collaborationBranchLine} />
      </GridContainer>
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section id="productivity" className={css.wrapper}>
      <div className={css.container}>{children}</div>
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
