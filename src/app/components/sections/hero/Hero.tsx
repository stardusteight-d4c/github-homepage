import { ReactNode } from "react"
import {
  AbsoluteItems,
  BackgroundImage,
  CopilotSpan,
  Form,
  Header,
  Organizations,
} from "./integrate"
import { heroStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

export const Hero = () => {
  return (
    <Wrapper>
      <AbsoluteItems />
      <div className={css.content}>
        <CopilotSpan />
        <Header />
        <Form />
        <Organizations />
      </div>
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section id="hero" className={css.wrapper}>
      <BackgroundImage />
      <div className={css.container}>{children}</div>
    </section>
  )
}
