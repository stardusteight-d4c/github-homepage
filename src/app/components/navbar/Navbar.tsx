import Image from "next/image"
import { ActionsIcon } from "@/app/components/atoms/icons/actions"
import { PackagesIcon } from "@/app/components/atoms/icons/packages"
import { SecurityIcon } from "@/app/components/atoms/icons/security"
import { CodeSpacesIcon } from "@/app/components/atoms/icons/codespaces"
import { CopilotIcon } from "@/app/components/atoms/icons/copilot"
import { CodeReviewIcon } from "@/app/components/atoms/icons/code-review"
import { IssuesIcon } from "@/app/components/atoms/icons/issues"
import { DiscussionsIcon } from "@/app/components/atoms/icons/discussions"
import caretDown from "@/app/assets/caret-down.svg"
import * as logo from "@/app/assets/logos/index"

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <header className="top-0 absolute w-screen z-50 hidden lg:block">
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
  )
}
