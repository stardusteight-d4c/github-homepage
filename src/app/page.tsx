import Image from "next/image"
import heroLine from "./assets/hero-line.svg"
import heroLine2 from "./assets/hero-line-2.svg"
import heroDrone from "./assets/hero-drone.webp"
import code from "./assets/code.svg"
import caretDown from "./assets/caret-down.svg"
import * as logo from "./assets/logos/index"
import { useEffect } from "react"
import { ActionsIcon } from "./components/atoms/icons/actions"
import { PackagesIcon } from "./components/atoms/icons/packages"
import { SecurityIcon } from "./components/atoms/icons/security"
import { CodeSpacesIcon } from "./components/atoms/icons/codespaces"
import { CopilotIcon } from "./components/atoms/icons/copilot"
import { CodeReviewIcon } from "./components/atoms/icons/code-review"
import { IssuesIcon } from "./components/atoms/icons/issues"
import { DiscussionsIcon } from "./components/atoms/icons/discussions"

export default function Home() {
  return (
    <main className="w-screen relative h-fit bg-[#0c1015] overflow-x-hidden">
      <header className="top-0 absolute w-screen z-50">
        <nav className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
          <ul className="flex items-center text-white">
            <li className="cursor-pointer">
              <Image
                src={logo.github}
                alt="github_logo/svg"
                width={32}
                height={32}
                className="w-8 h-8 mr-6"
              />
            </li>
            <li className="group">
              <div className="flex items-center cursor-pointer py-5">
                <span className="group-hover:opacity-80 transition-all ease-in-out duration-75">
                  Product
                </span>
                <img
                  src={caretDown.src}
                  alt="caret_down/svg"
                  className="group-hover:translate-y-[2px] transition-all ease-in duration-100 w-[16px] h-[16px] ml-1 mr-4"
                />
              </div>
              <div className="absolute -mt-2 -ml-5 w-[500px] hidden group-hover:flex bg-white border border-[#636a74]/30 my-6 rounded-lg">
                <ul className="pl-[24px] pr-[48px] font-roboto py-[24px] flex flex-col">
                  <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-blue-600 cursor-pointer transition-all ease-in duration-100">
                    <ActionsIcon className="w-[24px] h-[24px] mr-[16px]" />
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all ease-in duration-100">
                        Actions
                      </h2>
                      <span className="text-sm leading-[20px]">
                        Automate any workflow
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-blue-600 cursor-pointer transition-all ease-in duration-100">
                    <PackagesIcon className="w-[24px] h-[24px] mr-[16px]" />
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all ease-in duration-100">
                        Packages
                      </h2>
                      <span className="text-sm leading-[20px]">
                        Host and manage packages
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-blue-600 cursor-pointer transition-all ease-in duration-100">
                    <SecurityIcon className="w-[24px] h-[24px] mr-[16px]" />
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all ease-in duration-100">
                        Security
                      </h2>
                      <span className="text-sm leading-[20px]">
                        Find and fix vulnerabilities
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-blue-600 cursor-pointer transition-all ease-in duration-100">
                    <CodeSpacesIcon className="w-[24px] h-[24px] mr-[16px]" />
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all ease-in duration-100">
                        Codespaces
                      </h2>
                      <span className="text-sm leading-[20px]">
                        Instant dev environments
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-blue-600 cursor-pointer transition-all ease-in duration-100">
                    <CopilotIcon className="w-[24px] h-[24px] mr-[16px]" />
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all ease-in duration-100">
                        Copilot
                      </h2>
                      <span className="text-sm leading-[20px]">
                        Write better code with AI
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-blue-600 cursor-pointer transition-all ease-in duration-100">
                    <CodeReviewIcon className="w-[24px] h-[24px] mr-[16px]" />
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all ease-in duration-100">
                        Code Review
                      </h2>
                      <span className="text-sm leading-[20px]">
                        Manage code changes
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-blue-600 cursor-pointer transition-all ease-in duration-100">
                    <IssuesIcon className="w-[24px] h-[24px] mr-[16px]" />
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all ease-in duration-100">
                        Issues
                      </h2>
                      <span className="text-sm leading-[20px]">
                        Plan and track work
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-blue-600 cursor-pointer transition-all ease-in duration-100">
                    <DiscussionsIcon className="w-[24px] h-[24px] mr-[16px]" />
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all ease-in duration-100">
                        Discussions
                      </h2>
                      <span className="text-sm leading-[20px]">
                        Collaborate outside of code
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="bg-[#636a74]/30 w-[1px] h-[512px] my-auto" />
                <div className="px-[24px] flex flex-col py-[24px]">
                  <h2 className="font-semibold font-roboto leading-[20px] text-[#1f2328]">
                    Explore
                  </h2>
                  <ul className="font-roboto text-[#636a74] mt-[4px]">
                    <li className="text-sm cursor-pointer leading-[20px] py-[4px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      All features
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[4px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      Documentation
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[4px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      GitHub Skills
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[4px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      Blog
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="group">
              <div className="flex items-center cursor-pointer py-5">
                <span className="group-hover:opacity-80 transition-all ease-in-out duration-75">
                  Solutions
                </span>
                <img
                  src={caretDown.src}
                  alt="caret_down/svg"
                  className="group-hover:translate-y-[2px] transition-all ease-in duration-100 w-[16px] h-[16px] ml-1 mr-4"
                />
              </div>
              <div className="absolute flex-col -ml-5 p-[24px] w-[300px] hidden group-hover:flex border border-[#636a74]/30 bg-white text-[#1f2328] -mt-2 rounded-lg">
                <div>
                  <h2 className="font-semibold font-roboto leading-[20px] text-[#1f2328]">
                    For
                  </h2>
                  <ul className="font-roboto text-[#636a74] mt-[4px]">
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      Enterprise
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      Teams
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      Startups
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
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
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      CI/CD & Automation
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      DevOps
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
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
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      Customer
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      Stories
                    </li>
                    <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                      Resources
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="group">
              <div className="flex items-center cursor-pointer py-5">
                <span className="group-hover:opacity-80 transition-all ease-in-out duration-75">
                  Open Source
                </span>
                <img
                  src={caretDown.src}
                  alt="caret_down/svg"
                  className="group-hover:translate-y-[2px] transition-all ease-in duration-100 w-[16px] h-[16px] ml-1 mr-4"
                />
              </div>
              <div className="absolute font-roboto flex-col -ml-5 p-[24px] w-[300px] hidden group-hover:flex border border-[#636a74]/30 bg-white text-[#1f2328] -mt-2 rounded-lg">
                <div className="cursor-pointer group/li">
                  <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all duration-200 ease-in-out">
                    GitHub Sponsors
                  </h2>
                  <span>
                    <span className="text-sm -mt-1 text-[#636a74] block leading-[20px] pt-[6px] group-hover/li:text-blue-600 transition-all duration-200 ease-in-out">
                      Fund open source developers
                    </span>
                  </span>
                </div>
                <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
                <div className="cursor-pointer group/li">
                  <h2 className="font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-blue-600 transition-all duration-200 ease-in-out">
                    The ReadME Project
                  </h2>
                  <span className="text-sm -mt-1 text-[#636a74] block leading-[20px] pt-[6px] group-hover/li:text-blue-600 transition-all duration-200 ease-in-out">
                    GitHub community articles
                  </span>
                </div>
                <div className="bg-[#636a74]/30 w-full h-[1px] my-[16px]" />
                <h2 className="font-semibold leading-[20px] text-[#1f2328] mb-2">
                  Repositories
                </h2>
                <ul className="text-[#636a74]">
                  <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                    Topics
                  </li>
                  <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                    Trending
                  </li>
                  <li className="text-sm cursor-pointer leading-[20px] py-[6px] hover:text-blue-600 transition-all duration-200 ease-in-out">
                    Collections
                  </li>
                </ul>
              </div>
            </li>

            <li className="cursor-pointer hover:opacity-80 transition-all ease-in-out duration-75 py-5">
              Pricing
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search GitHub"
              className="span-variant focus:border-blue-600 text-white rounded-md w-[240px] py-[8px] px-[14px] outline-none"
            />
            <div className="text-white flex items-center justify-center">
              <button className="py-[8px] px-[12px] font-inter rounded-md hover:opacity-80 transition-all ease-in-out duration-75">
                Sign in
              </button>
              <button className="custom-button py-[8px] px-[12px] bg-[#773fc6] rounded-md text-base font-inter flex items-center justify-center">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </header>
      <section className="max-w-7xl min-h-screen mx-auto relative">
        <picture>
          <source
            media="(max-width: 768px)"
            type="image/webp"
            srcSet="/hero-bg.webp 1x, /hero-bg.webp 2x"
          />
          <source
            media="(min-width: 1280px)"
            type="image/webp"
            srcSet="/hero-bg.webp 1x, /hero-bg.webp 2x"
          />
          <Image
            src="/hero-bg.webp"
            alt="background/webp"
            width={4377}
            height={2043}
            quality={100}
            className="min-w-[4377px] z-0 max-w-[4377px] min-h-[2043px] max-h-[2043px] absolute top-0 -right-[1050px]"
          />
        </picture>
        <div className="relative z-10">
          <div className="absolute pointer-events-none top-[129px] left-[38px]">
            <img
              src={heroLine.src}
              alt="roadmap_hero_line/svg"
              className="w-[440px] h-[630px]"
            />
            <div className="w-fit flex items-center justify-center relative my-[10px] -ml-[5.8px]">
              <div className="blur-effect w-[48px] h-[48px] rounded-full animate-pulse" />
              <img
                src={code.src}
                alt="code_icon/svg"
                className="absolute z-20 w-[28px] h-[28px]"
              />
            </div>
            <img
              src={heroLine2.src}
              alt="roadmap_hero_line/svg"
              className="w-[4px] h-[437px] ml-[17px]"
            />
          </div>
          <Image
            src={heroDrone.src}
            alt="hero_drone/svg"
            width={500}
            height={326}
            className="drone w-[320px] h-[208px] absolute top-[129px] right-0"
          />
          <div className="pt-[425px] pl-[115px] text-[#ffffff] z-20">
            <div className="copilot-span span hover:border-white mb-[30px] w-fit rounded-full transition-all ease-in-out duration-300 flex items-center py-[14px] px-[20px]">
              <img
                src={logo.copilot.src}
                alt="copilot_logo/svg"
                className="mr-[16px]"
              />
              <div className="flex flex-col font-roboto mr-[16px] pr-[4px]">
                <strong className="font-medium tracking-[0.03em] leading-5">
                  Introducing GitHub Copilot X
                </strong>
                <span className="text-[#6e7681] font-light whitespace-nowrap">
                  Your AI pair programmer is leveling up
                </span>
              </div>
              <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
                <div className="chevron" />
                <span className="line absolute -translate-y-1/2 top-1/2" />
              </div>
            </div>
            <div>
              <h1 className="font-bold font-roboto mb-[24px] text-[80px] tracking-wide leading-[80px]">
                Let’s build from here
              </h1>
              <h2 className="font-normal font-inter max-w-[960px] mb-[38px] text-[#7d8590] text-[32px] tracking-[-0,01em] leading-[44px]">
                Harnessed for productivity. Designed for collaboration.
                Celebrated for built-in security. Welcome to the platform
                developers love.
              </h2>
            </div>
            <div className="flex items-center">
              <form>
                <div className="flex items-center justify-center w-fit">
                  <div className="rounded-l-md overflow-hidden">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="placeholder:text-[#535a61] outline-none w-[296px] border-[2px] border-white transition-all duration-100 focus:border-blue-600 text-black/90 bg-white rounded-l-md py-[10px] px-[24px]"
                    />
                  </div>
                  <button className="custom-button py-[12px] px-[24px] bg-[#773fc6] rounded-r-md text-base font-semibold font-inter flex items-center justify-center">
                    Sign up for GitHub
                  </button>
                </div>
              </form>
              <div className="h-[48px] w-[1px] border-l border-[#ffffff2e] mx-4" />
              <button className="trial-span span transition-all ease-in-out duration-300 relative flex items-center justify-center py-[12px] px-[24px] rounded-md bg-transparent border-[1px] hover:border-white border-[#ffffff2e] font-semibold">
                <span className="pr-[4px] tracking-[0.03em] font-roboto font-medium">
                  Start a free enterprise trial
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
                  <div className="chevron ml-2 mt-[1px]" />
                  <span className="line absolute -translate-y-1/2 top-1/2 mt-[1px]" />
                </div>
              </button>
            </div>
            <div className="mt-[80px] text-[#7d8590] font-medium w-full">
              <span>Trusted by the world’s leading organizations ↘︎</span>
              <div className="transition-all ease-in-out duration-300 mt-[28px] flex items-center gap-x-[58px] w-full">
                <img
                  src={logo.stripe.src}
                  alt="stripe/svg"
                  className="h-[44px] hover:brightness-200 cursor-pointer"
                />
                <img
                  src={logo.pinterest.src}
                  alt="pinterest/svg"
                  className="h-[44px] hover:brightness-200 cursor-pointer"
                />
                <img
                  src={logo.kpmg.src}
                  alt="kpmg/svg"
                  className="h-[44px] hover:brightness-200 cursor-pointer"
                />
                <img
                  src={logo.mercedesBenz.src}
                  alt="mercedesBenz/svg"
                  className="h-[44px] hover:brightness-200 cursor-pointer"
                />
                <img
                  src={logo.pg.src}
                  alt="pg/svg"
                  className="h-[32px] hover:brightness-200 cursor-pointer"
                />
                <img
                  src={logo.telus.src}
                  alt="telus/svg"
                  className="h-[32px] hover:brightness-200 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
