import { ReactNode } from "react"
import {
  Header,
  Issues,
  Branch,
  GitHubDiscussions,
  PullRequests,
  GitHubSponsors,
} from "./integrate"
import { collaborationStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

interface GridContainerProps {
  children: ReactNode
}

export const Collaboration = () => {
  return (
    <Wrapper>
      <Header />
      <Issues />
      <Branch />
      <GridContainer>
        <GitHubDiscussions />
        <PullRequests />
      </GridContainer>
      <GitHubSponsors />
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section id="collaboration" className={css.wrapper}>
      <div className={css.container}>{children}</div>
    </section>
  )
}

const GridContainer = ({ children }: GridContainerProps) => {
  return <div className={css.gridContainer}>{children}</div>
}
