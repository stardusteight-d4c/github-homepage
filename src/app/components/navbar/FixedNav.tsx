"use client"

import { useEffect, useState } from "react"

interface Props {}

export const FixedNav = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<
    "productivity" | "collaboration" | "security" | false
  >(false)

  useEffect(() => {
    const handleScroll = () => {
      const productivitySection = document.getElementById("productivity")
      const collaborationSection = document.getElementById("collaboration")
      const securitySection = document.getElementById("security")

      if (productivitySection) {
        const { top } = productivitySection.getBoundingClientRect()
        const inSection = top <= 175
        setShowNavbar(inSection)
        setActiveItem(inSection ? "productivity" : false)
      }

      if (collaborationSection) {
        const { top } = collaborationSection.getBoundingClientRect()
        const inSection = top <= 175
        setActiveItem(inSection && "collaboration")
      }

      if (securitySection) {
        const { top } = securitySection.getBoundingClientRect()
        const inSection = top <= 175
        setActiveItem(inSection ? "security" : false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleScrollView(id: string) {
    const element = document.getElementById(id)!
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
    setTimeout(() => {
      window.scrollBy(0, 10)
    }, 900)
    setTimeout(() => {
      window.scrollBy(0, -105)
    }, 1000)
  }

  return (
    <header
      className={`${
        showNavbar ? "block" : "hidden"
      } w-screen fixed p-[16px] z-[500] bg-[#0d1117] text-[#f0f0f0] shadow-black/70 shadow-md`}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="font-roboto flex items-center justify-between">
          <ul className="flex items-center gap-x-[25px]">
            <li
              onClick={() => handleScrollView("productivity")}
              className="text-with-underline leading-[24px] py-[8px] cursor-pointer hover:text-[#7ee787] before:bg-[#7ee787] transition-all duration-300 ease-in-out"
            >
              Productivity
            </li>
            <li
              onClick={() => handleScrollView("collaboration")}
              className="text-with-underline leading-[24px] py-[8px] cursor-pointer hover:text-[#fe7b72] before:bg-[#fe7b72] transition-all duration-300 ease-in-out"
            >
              Collaboration
            </li>
            <li
              onClick={() => handleScrollView("security")}
              className="text-with-underline leading-[24px] py-[8px] cursor-pointer hover:text-[#939aff] before:bg-[#939aff] transition-all duration-300 ease-in-out"
            >
              Security
            </li>
          </ul>
          <div className="flex items-center gap-x-[24px]">
            <button className="trial-span active:scale-95 w-full md:w-[487px] lg:w-fit span transition-all ease-in-out duration-300 relative flex items-center justify-center py-[12px] px-[24px] rounded-md bg-transparent border-[1px] hover:border-[#f6f8fa] border-[#ffffff2e] font-semibold">
              <span className="pr-[4px] tracking-[0.03em] font-roboto font-medium">
                Start a free enterprise trial
              </span>
              <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
                <div className="chevron ml-2 mt-[1px]" />
                <span className="line absolute -translate-y-1/2 top-1/2 mt-[1px]" />
              </div>
            </button>
            <button className="py-[12px] active:scale-95 transition-all w-full md:w-fit px-[24px] bg-[#f0f0f0] text-[#0d1117] rounded-md text-base font-semibold font-inter flex items-center justify-center">
              Sign up for GitHub
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
