import { ReactNode } from "react"
import {
  Header,
  BuildWorkflow,
  Branch,
  SecretScanning,
  Dependabot,
  CodeScanning,
} from "./integrate"
import { securityStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

interface GridContainerProps {
  children: ReactNode
}

export const Security = () => {
  return (
    <Wrapper>
      <Header />
      <BuildWorkflow />
      <Branch />
      <SecretScanning />
      <GridContainer>
        <Dependabot />
        <CodeScanning />
      </GridContainer>
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section id="security" className={css.wrapper}>
      <div className={css.container}>{children}</div>
    </section>
  )
}

const GridContainer = ({ children }: GridContainerProps) => {
  return <div className={css.gridContainer}>{children}</div>
}
