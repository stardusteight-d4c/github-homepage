"use client"

import * as logo from "@/app/assets/logos/index"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CaretRight } from "../atoms/icons/caretRight"
import { createPortal } from "react-dom"

interface Props {}

export const MobileNav = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle")
    const menu = document.querySelector(".menu")

    menuToggle?.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      menu?.classList.toggle("active")
    })
  }, [])

  return (
    <header className="top-0 absolute w-screen z-[200] lg:hidden">
      {createPortal(
        <div
          onClick={() => {
            const menuToggle = document.querySelector(".menu-toggle")
            const menu = document.querySelector(".menu")
            menuToggle?.classList.toggle("active")
            menu?.classList.toggle("active")
            setOpenMenu(false)
          }}
          className={`${
            openMenu ? "block" : "hidden"
          } overlay-glassmorphism w-screen min-h-screen inset-0 z-[100] overflow-hidden fixed`}
        />,
        document?.body
      )}
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
          <div className="w-full relative flex items-end justify-end">
            <div onClick={() => setOpenMenu(!openMenu)} className="menu-toggle">
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>

            <div
              className={`${
                openMenu ? "block" : "hidden"
              } menu top-[65px] -right-[16px] md:-right-[48px] p-[16px] w-[95vw] ssm:w-[320px] ml-4 bg-white rounded-l-lg border border-[#636a74]/30 fixed`}
            >
              <nav className="px-[16px] mb-auto text-[#1f2328]">
                <ul>
                  <li className="py-[16px] flex items-center justify-between text-[20px] font-semibold font-roboto whitespace-nowrap">
                    <span>Product</span>
                    <CaretRight className="w-[19px] h-[19px] text-[#96979a]" />
                  </li>
                  <li className="py-[16px] flex items-center justify-between text-[20px] font-semibold font-roboto whitespace-nowrap">
                    <span>Solutions</span>
                    <CaretRight className="w-[19px] h-[19px] text-[#96979a]" />
                  </li>
                  <li className="py-[16px] flex items-center justify-between text-[20px] font-semibold font-roboto whitespace-nowrap">
                    <span> Open Source</span>
                    <CaretRight className="w-[19px] h-[19px] text-[#96979a]" />
                  </li>
                  <li className="py-[16px] flex items-center justify-between text-[20px] font-semibold font-roboto whitespace-nowrap">
                    <span>Pricing</span>
                    <CaretRight className="w-[19px] h-[19px] text-[#96979a]" />
                  </li>
                </ul>
                <div className="mt-[128px] pb-[16px]">
                  <input
                    type="text"
                    placeholder="Search GitHub"
                    className="border border-[#1f2328]/10 mb-2 w-full bg-[#1f2328]/5 focus:border-blue-600 placeholder:text-[#1f2328]/50 text-[#1f2328] rounded-md py-[8px] px-[14px] outline-none"
                  />
                  <button className="py-[8px] px-[12px] w-full text-white bg-[#1f2328] font-inter rounded-md hover:opacity-80 transition-all ease-in-out duration-75">
                    Sign in
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
