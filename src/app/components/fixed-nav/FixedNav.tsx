"use client"

import { useEffect, useState } from "react"
import { CaretDown } from "../atoms/icons/caret-down"
import { X } from "../atoms/icons/X"

interface Props {}

export const FixedNav = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
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
        if (inSection) {
          setActiveItem("productivity")
        } else if (top >= 175) {
          setActiveItem(false)
        }
      }

      if (collaborationSection) {
        const { top } = collaborationSection.getBoundingClientRect()
        const inSection = top <= 175
        if (inSection) {
          setActiveItem("collaboration")
        }
      }

      if (securitySection) {
        const { top } = securitySection.getBoundingClientRect()
        const inSection = top <= 175
        if (inSection) {
          setActiveItem("security")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleScrollView(id: "productivity" | "collaboration" | "security") {
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

  function handleActiveItemColorMobileNav() {
    if (!openDropdown) {
      if (activeItem === "productivity") {
        return "text-[#7ee787]"
      }
      if (activeItem === "collaboration") {
        return "text-[#fe7b72]"
      }
      if (activeItem === "security") {
        return "text-[#939aff]"
      }
    }
    if (openDropdown && activeItem === "productivity") {
      return "text-[#7ee787]"
    }
    return "text-[#f0f0f0]"
  }

  return (
    <header
      className={`${
        showNavbar ? "block" : "hidden"
      } w-screen fixed p-[16px] z-[500] bg-[#0d1117] text-[#f0f0f0] shadow-black/70 shadow-md`}
    >
      <div className="max-w-7xl mx-auto hidden lg:block">
        <nav className="font-roboto flex items-center justify-between">
          <ul className="flex items-center gap-x-[25px]">
            <li
              onClick={() => handleScrollView("productivity")}
              className={`${
                activeItem === "productivity" && "text-[#7ee787]"
              } text-with-underline leading-[24px] py-[8px] cursor-pointer hover:text-[#7ee787] before:bg-[#7ee787] transition-all duration-300 ease-in-out`}
            >
              Productivity
            </li>
            <li
              onClick={() => handleScrollView("collaboration")}
              className={`${
                activeItem === "collaboration" && "text-[#fe7b72]"
              } text-with-underline leading-[24px] py-[8px] cursor-pointer hover:text-[#fe7b72] before:bg-[#fe7b72] transition-all duration-300 ease-in-out`}
            >
              Collaboration
            </li>
            <li
              onClick={() => handleScrollView("security")}
              className={`${
                activeItem === "security" && "text-[#939aff]"
              } text-with-underline leading-[24px] py-[8px] cursor-pointer hover:text-[#939aff] before:bg-[#939aff] transition-all duration-300 ease-in-out`}
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

      {/* mobile */}
      <div className="font-roboto flex flex-col lg:hidden">
        <div className="flex items-center justify-between">
          <h2
            onClick={() => {
              openDropdown && handleScrollView("productivity")
              setOpenDropdown(false)
            }}
            className={`${handleActiveItemColorMobileNav()} cursor-pointer capitalize`}
          >
            {openDropdown ? "productivity" : activeItem}
          </h2>
          <div onClick={() => setOpenDropdown(!openDropdown)}>
            {openDropdown ? (
              <X className="w-[20px] text-[#7d8590] cursor-pointer" />
            ) : (
              <CaretDown className="w-[20px] text-[#7d8590] cursor-pointer" />
            )}
          </div>
        </div>
        {openDropdown && (
          <div className="flex flex-col">
            <span
              onClick={() => {
                handleScrollView("collaboration")
                setOpenDropdown(false)
              }}
              className={`${
                activeItem === "collaboration" && "text-[#fe7b72]"
              } block mt-[18px] mb-[22px] cursor-pointer`}
            >
              Collaboration
            </span>
            <span
              onClick={() => {
                handleScrollView("security")
                setOpenDropdown(false)
              }}
              className={`${
                activeItem === "security" && "text-[#939aff]"
              } block cursor-pointer`}
            >
              Security
            </span>

            <div className="flex flex-col gap-y-[8px] mt-[22px]">
              <button className="trial-span active:scale-95 w-full span transition-all ease-in-out duration-300 relative flex items-center justify-center py-[12px] px-[24px] rounded-md bg-transparent border-[1px] hover:border-[#f6f8fa] border-[#ffffff2e] font-semibold">
                <span className="pr-[4px] tracking-[0.03em] font-roboto font-medium">
                  Start a free enterprise trial
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
                  <div className="chevron ml-2 mt-[1px]" />
                  <span className="line absolute -translate-y-1/2 top-1/2 mt-[1px]" />
                </div>
              </button>
              <button className="py-[12px] active:scale-95 transition-all w-full px-[24px] bg-[#f0f0f0] text-[#0d1117] rounded-md text-base font-semibold font-inter flex items-center justify-center">
                Sign up for GitHub
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
