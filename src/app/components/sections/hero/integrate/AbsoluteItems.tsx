"use client"

import Image from "next/image"
import heroLine from "@/app/assets/hero-line.svg"
import heroDrone from "@/app/assets/hero-drone.webp"
import { Code } from "@/app/components/atoms/icons/code"

export const AbsoluteItems = () => {
  return (
    <>
      <div className="absolute w-full pointer-events-none left-6 md:left-[38px] -top-[45px] md:top-[80px] lg:top-[129px]">
        <div className="relative h-full w-[300px] -ml-1 md:-ml-0 md:w-[440px] ">
          <img
            src={heroLine.src}
            alt="roadmap_hero_line/svg"
            className="-ml-1 md:-ml-0 w-[440px] h-[630px]"
          />
          <div className="absolute bottom-[38px] md:bottom-[-58px] w-fit flex items-center justify-center my-[10px] -left-[19px] md:left-[-8px]">
            <div className="blur-effect bg-[#773fc6] w-[48px] h-[48px] rounded-full animate-pulse" />
            <Code className="absolute w-[28px] h-[28px] text-[#f6f8fa] z-[50]" />
            <div className="absolute top-[100%] left-[23px] w-[2.5px] md:w-[4px] h-[200vh] bg-gradient-to-b from-[#733fc8] via-[#266c40] to-[#55d163]" />
          </div>
        </div>
        <Image
          src={heroDrone.src}
          alt="hero_drone/svg"
          width={500}
          height={326}
          className="drone w-[35vw] xl:w-[320px] xl:h-[208px] absolute top-[240px] md:top-[15px] right-9 md:right-16 lx:right-12"
        />
      </div>
    </>
  )
}
