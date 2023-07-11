import React, { ReactNode } from "react"
import { wrapperStyles as css } from "./styles"

interface Props {
  children: ReactNode
}

export const Wrapper = ({ children }: Props) => {
  return (
    <header className={css.wrapper}>
      <nav className={css.container}>{children}</nav>
    </header>
  )
}
