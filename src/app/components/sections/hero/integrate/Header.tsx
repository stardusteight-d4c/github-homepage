"use client"

import { Fade } from "react-awesome-reveal"
import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <div>
      <h1 className={css.heading1}>
        <Fade delay={0} cascade damping={1e-1}>
          Let’s build
        </Fade>{" "}
        <br className={css.breakLine} />
        <Fade delay={1e3} cascade damping={1e-1}>
          from here
        </Fade>
      </h1>
      <h2 className={css.heading2}>
        Harnessed for productivity. Designed for collaboration. Celebrated for
        built-in security. Welcome to the platform developers love.
      </h2>
    </div>
  )
}
