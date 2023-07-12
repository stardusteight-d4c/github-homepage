"use client"

import { useState } from "react"
import Image from "next/image"
import github from "@/app/assets/logos/github-logo.svg"
import { Overlay } from "./integrate/Overlay"
import { SignUp } from "./integrate/SignUp"
import { Menu } from "./integrate/Menu"
import { mobileNavStyles as css } from "./styles"

export const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <header className={css.wrapper}>
      <Overlay openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className={css.container}>
        <SignUp />
        <Image
          src={github}
          alt="github_logo/svg"
          width={32}
          height={32}
          className={css.logo}
        />
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </header>
  )
}
