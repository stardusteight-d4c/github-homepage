"use client"

import { Fade, Slide } from "react-awesome-reveal"
import { Productivity as ProductivityIcon } from "@/app/components/atoms/icons/productivity"
import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.headingContainer}>
          <div className={css.absoluteIconWrapper}>
            <div className={css.sectionIconContainer}>
              <div className={css.blurEffect} />
              <ProductivityIcon className={css.icon} />
              <div className={css.productivityBranchLine} />
            </div>
          </div>
          <Fade delay={0} cascade damping={1e-1}>
            Productivity
          </Fade>
        </h2>
        <Slide duration={2000}>
          <Paragraph />
        </Slide>
      </div>
    </div>
  )
}

const Paragraph = () => {
  return (
    <p className={css.paragraph.container}>
      <span className={css.paragraph.strongSpan}>
        Accelerate high-quality <br /> software development.
      </span>
      <span className={css.paragraph.span}>
        Our AI-powered platform drives innovation with tools that boost
        developer velocity.
      </span>
    </p>
  )
}
