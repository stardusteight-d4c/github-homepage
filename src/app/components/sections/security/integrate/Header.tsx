"use client"

import { Fade, Slide } from "react-awesome-reveal"
import { Security2 as SecurityIcon } from "@/app/components/atoms/icons/security-2"
import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>
        <div className={css.absoluteContainer}>
          <div className={css.iconContainer}>
            <div className={css.blurEffect} />
            <SecurityIcon className={css.sectionIcon} />
            <div className={css.brachLine} />
          </div>
        </div>
        <Fade delay={0} cascade damping={1e-1}>
          Security
        </Fade>
      </h2>
      <Slide duration={2000}>
        <p className={css.paragraph}>
          <p className={css.gradientText}>
            Embed security into <br /> the developer workflow.
          </p>
          <p className={css.regularText}>
            With GitHub, developers can secure their code in minutes and
            organizations can automatically comply with regulations.
          </p>
        </p>
      </Slide>
    </div>
  )
}
