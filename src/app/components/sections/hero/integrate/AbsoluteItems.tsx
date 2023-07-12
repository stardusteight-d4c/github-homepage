"use client"

import Image from "next/image"
import heroLine from "@/app/assets/hero-line.svg"
import heroDrone from "@/app/assets/hero-drone.webp"
import { Code } from "@/app/components/atoms/icons/code"
import { absoluteItemsStyles as css } from "./styles"

export const AbsoluteItems = () => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.container}>
          <img
            src={heroLine.src}
            alt="roadmap_hero_line/svg"
            className={css.heroLine}
          />
          <div className={css.sectionIconContainer}>
            <div className={css.blurEffect} />
            <Code className={css.icon} />
            <div className={css.branchLine} />
          </div>
        </div>
        <Image
          src={heroDrone.src}
          alt="hero_drone/svg"
          width={500}
          height={326}
          className={css.drone}
        />
      </div>
    </>
  )
}
