"use client"

import Image from "next/image"
import { useState } from "react"
import github from "@/app/assets/logos/github-logo.svg"
import { Overlay, Menu, SignUp } from "./integrate"
import { mobileNavStyles as css } from "./styles"

export const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
      <Overlay openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <header className={css.wrapper}>
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
    </>
  )
}
