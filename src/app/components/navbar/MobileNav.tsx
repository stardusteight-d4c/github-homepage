"use client"

import * as logo from "@/app/assets/logos/index"
import Image from "next/image"
import { useEffect } from "react"

interface Props {}

export const MobileNav = (props: Props) => {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle")
    const menu = document.querySelector(".menu")

    menuToggle?.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      menu?.classList.toggle("active")
    })
  }, [])

  return (
    <header className="top-0 absolute w-screen lg:hidden z-50">
      <div className="flex items-center justify-between w-full py-4 px-4 md:px-[40px]">
        <button className="py-[4px] px-[8px] w-[74px] whitespace-nowrap text-white bg-transparent border border-white rounded-md text-light font-inter flex items-center justify-center">
          Sign up
        </button>
        <Image
          src={logo.github}
          alt="github_logo/svg"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <div className="w-[74px]">
        <div className="w-full flex items-end justify-end">
          <div className="menu-toggle">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <div className="menu"></div>
        </div>
        </div>
      </div>
    </header>
  )
}
