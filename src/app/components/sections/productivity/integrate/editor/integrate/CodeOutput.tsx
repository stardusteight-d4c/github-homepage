"use client"

import Image from "next/image"
import { Zoom } from "react-awesome-reveal"
import { GithubLogo } from "@/app/components/atoms/icons/github-logo"
import { Notify } from "@/app/components/atoms/icons/notify"
import { Menu } from "@/app/components/atoms/icons/menu"
import globe from "@/app/assets/globe.jpg"
import { codeOutputStyles as css } from "./styles"

export const CodeOutput = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.header}>
        <Menu className={css.icon} />
        <GithubLogo className={css.githubLogo} />
        <Notify className={css.icon} />
      </ul>
      <div className={css.imgContainer}>
        <Zoom>
          <Image
            src={globe}
            alt="planet_globe/jpg"
            width={500}
            height={591}
            quality={100}
            className={css.image}
          />
        </Zoom>
      </div>
    </div>
  )
}
