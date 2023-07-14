"use client"

import { ReactNode } from "react"
import { Fade, Slide } from "react-awesome-reveal"
import {
  BackgroundImage,
  SignUpButton,
  EnterpriseTrialButton,
  AstrocatLookingAtEarth,
} from "./integrate"
import { globeStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

export const Globe = () => {
  return (
    <Wrapper>
      <Fade duration={1300} delay={400}>
        <h4 className={css.title}>
          The place for anyone from anywhere to build anything
        </h4>
        <p className={css.description}>
          Whether you’re scaling your startup or just learning how to code,
          GitHub is your home. Join the world’s largest developer platform to
          build the innovations that empower humanity. Let’s build from here.
        </p>
      </Fade>
      <div className={css.buttonContainer}>
        <SignUpButton />
        <EnterpriseTrialButton />
      </div>
      <AstrocatLookingAtEarth />
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <div className={css.backgroundTransitiongradient} />
      <section className={css.wrapper}>
        <BackgroundImage />
        <div className={css.container}>
          <div className={css.contentContainer}>{children}</div>
        </div>
      </section>
    </>
  )
}
