"use client"

import Image from "next/image"
import { ActionsIcon } from "@/app/components/atoms/icons/actions"
import { PackagesIcon } from "@/app/components/atoms/icons/packages"
import { SecurityIcon } from "@/app/components/atoms/icons/security"
import { CodeSpacesIcon } from "@/app/components/atoms/icons/codespaces"
import { CopilotIcon } from "@/app/components/atoms/icons/copilot"
import { CodeReviewIcon } from "@/app/components/atoms/icons/code-review"
import { IssuesIcon } from "@/app/components/atoms/icons/issues"
import { DiscussionsIcon } from "@/app/components/atoms/icons/discussions"
import * as logo from "@/app/assets/logos/index"
import { useEffect, useState } from "react"
import { CaretRight } from "../atoms/icons/caretRight"
import { Overlay } from "./integrate/Overlay"
import { SignUp } from "./integrate/SignUp"
import { HamburgerMenu } from "./integrate/HamburgerMenu"

interface Props {}

export const MobileNav = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<
    "product" | "solutions" | "open-source" | false
  >(false)

  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle")
    const menu = document.querySelector(".menu")
    menuToggle?.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      menu?.classList.toggle("active")
    })
  }, [])

  function handleActiveItem(item: string) {
    if (item === "product") {
      if (activeItem === "product") {
        setActiveItem(false)
      } else {
        setActiveItem("product")
      }
    } else if (item === "solutions") {
      if (activeItem === "solutions") {
        setActiveItem(false)
      } else {
        setActiveItem("solutions")
      }
    } else if (item === "open-source") {
      if (activeItem === "open-source") {
        setActiveItem(false)
      } else {
        setActiveItem("open-source")
      }
    }
  }

  return (
    <header className="top-0 absolute w-screen z-[200] lg:hidden">
      <Overlay openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="flex items-center justify-between w-full py-4 px-4 md:px-[40px]">
        <SignUp />
        <Image
          src={logo.github}
          alt="github_logo/svg"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <div className="w-[74px]">
          <div className="w-full relative flex items-end justify-end">
            <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <div
              className={`${
                openMenu ? "block" : "hidden"
              } menu top-[65px] max-h-[516px] -right-[16px] md:-right-[48px] p-[16px] w-[95vw] ssm:w-[320px] ml-4 bg-[#f6f8fa] overflow-y-scroll rounded-l-lg border border-[#636a74]/30 fixed`}
            >
              <nav className="px-[16px] mb-auto text-[#1f2328]">
                <ul>
                  <li>
                    <div
                      onClick={() => handleActiveItem("product")}
                      className="py-[16px] flex items-center justify-between text-[20px] font-semibold font-roboto whitespace-nowrap"
                    >
                      <span>Product</span>
                      <CaretRight
                        className={`${
                          activeItem === "product" && "rotate-90"
                        } w-[19px] h-[19px] text-[#96979a]`}
                      />
                    </div>
                    <ul
                      className={`${
                        activeItem === "product" ? "flex" : "hidden"
                      } font-roboto pb-[8px] flex-col`}
                    >
                      <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100">
                        <ActionsIcon className="w-[24px] h-[24px] mr-[16px]" />
                        <div className="flex flex-col items-start">
                          <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100">
                            Actions
                          </h2>
                          <span className="text-sm leading-[20px]">
                            Automate any workflow
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100">
                        <PackagesIcon className="w-[24px] h-[24px] mr-[16px]" />
                        <div className="flex flex-col items-start">
                          <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100">
                            Packages
                          </h2>
                          <span className="text-sm leading-[20px]">
                            Host and manage packages
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100">
                        <SecurityIcon className="w-[24px] h-[24px] mr-[16px]" />
                        <div className="flex flex-col items-start">
                          <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100">
                            Security
                          </h2>
                          <span className="text-sm leading-[20px]">
                            Find and fix vulnerabilities
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100">
                        <CodeSpacesIcon className="w-[24px] h-[24px] mr-[16px]" />
                        <div className="flex flex-col items-start">
                          <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100">
                            Codespaces
                          </h2>
                          <span className="text-sm leading-[20px]">
                            Instant dev environments
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100">
                        <CopilotIcon className="w-[24px] h-[24px] mr-[16px]" />
                        <div className="flex flex-col items-start">
                          <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100">
                            Copilot
                          </h2>
                          <span className="text-sm leading-[20px]">
                            Write better code with AI
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100">
                        <CodeReviewIcon className="w-[24px] h-[24px] mr-[16px]" />
                        <div className="flex flex-col items-start">
                          <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100">
                            Code Review
                          </h2>
                          <span className="text-sm leading-[20px]">
                            Manage code changes
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100">
                        <IssuesIcon className="w-[24px] h-[24px] mr-[16px]" />
                        <div className="flex flex-col items-start">
                          <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100">
                            Issues
                          </h2>
                          <span className="text-sm leading-[20px]">
                            Plan and track work
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100">
                        <DiscussionsIcon className="w-[24px] h-[24px] mr-[16px]" />
                        <div className="flex flex-col items-start">
                          <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100">
                            Discussions
                          </h2>
                          <span className="text-sm leading-[20px]">
                            Collaborate outside of code
                          </span>
                        </div>
                      </li>
                      <div className="flex flex-col pb-[8px] pt-[16px]">
                        <h2 className="font-semibold font-roboto leading-[20px] text-[#1f2328]">
                          Explore
                        </h2>
                        <ul className="font-roboto text-[#636a74] mt-[4px]">
                          <li className="text-sm cursor-pointer leading-[20px] py-[4px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            All features
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[4px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Documentation
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[4px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            GitHub Skills
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[4px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Blog
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </li>

                  <li>
                    <div
                      onClick={() => handleActiveItem("solutions")}
                      className="py-[16px] flex items-center justify-between text-[20px] font-semibold font-roboto whitespace-nowrap"
                    >
                      <span>Solutions</span>
                      <CaretRight
                        className={`${
                          activeItem === "solutions" && "rotate-90"
                        } w-[19px] h-[19px] text-[#96979a]`}
                      />
                    </div>
                    <div
                      className={`${
                        activeItem === "solutions" ? "block" : "hidden"
                      } pr-4 mt-[8px]`}
                    >
                      <div>
                        <h2 className="font-semibold font-roboto leading-[20px] text-[#1f2328]">
                          For
                        </h2>
                        <ul className="font-roboto text-[#636a74] mt-[4px]">
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Enterprise
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Teams
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Startups
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Startups Education
                          </li>
                        </ul>
                      </div>
                      <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
                      <div>
                        <h2 className="font-semibold font-roboto leading-[20px] text-[#1f2328]">
                          By Solution
                        </h2>
                        <ul className="font-roboto text-[#636a74] mt-[4px]">
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            CI/CD & Automation
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            DevOps
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            DevSecOps
                          </li>
                        </ul>
                      </div>
                      <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
                      <div>
                        <h2 className="font-semibold font-roboto leading-[20px] text-[#1f2328]">
                          Case Studies
                        </h2>
                        <ul className="font-roboto text-[#636a74] mt-[4px]">
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Customer
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Stories
                          </li>
                          <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Resources
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div
                      onClick={() => handleActiveItem("open-source")}
                      className="py-[16px] flex items-center justify-between text-[20px] font-semibold font-roboto whitespace-nowrap"
                    >
                      <span>Open Source</span>
                      <CaretRight
                        className={`${
                          activeItem === "open-source" && "rotate-90"
                        } w-[19px] h-[19px] text-[#96979a]`}
                      />
                    </div>
                    <div
                      className={`${
                        activeItem === "open-source" ? "block" : "hidden"
                      } cursor-pointer group/li py-2`}
                    >
                      <div className="cursor-pointer group/li">
                        <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all duration-200 ease-in-out">
                          GitHub Sponsors
                        </h2>
                        <span>
                          <span className="text-sm -mt-1 text-[#636a74] block leading-[20px] pt-[6px] group-hover/li:text-[#2563eb] transition-all duration-200 ease-in-out">
                            Fund open source developers
                          </span>
                        </span>
                      </div>
                      <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
                      <div className="cursor-pointer group/li">
                        <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all duration-200 ease-in-out">
                          The ReadME Project
                        </h2>
                        <span className="text-sm -mt-1 text-[#636a74] block leading-[20px] pt-[6px] group-hover/li:text-[#2563eb] transition-all duration-200 ease-in-out">
                          GitHub community articles
                        </span>
                      </div>
                      <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
                      <h2 className="font-semibold leading-[20px] text-[#1f2328] mb-2">
                        Repositories
                      </h2>
                      <ul className="text-[#636a74]">
                        <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                          Topics
                        </li>
                        <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                          Trending
                        </li>
                        <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out">
                          Collections
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="py-[16px] flex items-center justify-between text-[20px] font-semibold font-roboto whitespace-nowrap">
                    <span>Pricing</span>
                  </li>
                </ul>
                <div className="mt-[128px] pb-[16px]">
                  <input
                    type="text"
                    placeholder="Search GitHub"
                    className="border border-[#1f2328]/10 mb-2 w-full bg-[#1f2328]/5 focus:border-[#2563eb] placeholder:text-[#1f2328]/50 text-[#1f2328] rounded-md py-[8px] px-[14px] outline-none"
                  />
                  <button className="py-[8px] px-[12px] w-full text-[#f6f8fa] bg-[#1f2328] font-inter rounded-md hover:opacity-80 transition-all ease-in-out duration-75">
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
