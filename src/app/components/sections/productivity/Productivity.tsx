import { Productivity as ProductivityIcon } from "../../atoms/icons/productivity"
import { Editor } from "./integrate/Editor"
import contextMenu from "../../../assets/illo-context-menu.png"
import cursor from "../../../assets/illo-cursor.png"
import ports from "../../../assets/illo-ports.png"
import branchProductivity from "../../../assets/git-branch-productivity.svg"
import bgStars from "../../../assets/bg-stars-1.webp"
import actions from "../../../assets/github-actions.png"
import mobile1 from "@/app/assets/github-mobile-1.png"
import mobile2 from "@/app/assets/github-mobile-2.png"

import { CopilotExamples } from "./integrate/CopilotExamples"
import Image from "next/image"

export const Productivity = () => {
  return (
    <section
      id="productivity"
      className="max-w-[100vw] relative mt-4 text-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="ml-[50px] md:ml-[115px] mb-[58px] md:mb-[96px]">
          <h2 className="text-[20px] font-jet-brains md:text-[24px] relative mb-[24px] leading-[28px] font-semibold">
            <div className="absolute  -left-[38px] md:-left-[74px] z-20 ">
              <div className="relative flex items-center justify-center">
                <div className="blur-effect absolute bg-[#7ee787] w-[48px] h-[48px] rounded-full animate-pulse" />
                <ProductivityIcon className="w-[28px] h-[28px] text-[#f0f0f0] relative z-[50]" />
                <div className="absolute z-0 top-[100%] mt-3 w-[2.5px] md:w-[4px] h-[400px] bg-gradient-to-b from-[#48eb5b] via-[#55d163] to-[#48eb5b]" />
              </div>
            </div>
            Productivity
          </h2>
          <p className="text-[28px] md:text-[48px] leading-[32px] md:leading-[55px] font-inter mr-2 max-w-[960px]">
            <p className="bg-gradient-to-br from-[#7ee787] to-green-400 text-transparent bg-clip-text font-semibold mr-2 leading-[32px] md:leading-[55px] tracking-[-0,03em]">
              Accelerate high-quality <br /> software development.
            </p>
            <p className="tracking-[-0,03em]">
              Our AI-powered platform drives innovation with tools that boost
              developer velocity.
            </p>
          </p>
        </div>
      </div>
      <div className="px-[8px] md:px-[16px] xl:px-0">
        <div className="relative max-w-[1278px] w-full xl:mx-auto">
          <Editor />
          <div className="z-40 absolute -bottom-[220px] lg:-bottom-[180px] left-[35px] md:left-[140px] lg:left-auto lg:right-[50px]">
            <div className="relative">
              <img
                src={contextMenu.src}
                alt="context_menu/png"
                className="rounded-lg shadow-black/50 shadow-2xl z-40 w-[300px] h-[262px] border border-black object-cover"
              />
              <img
                src={cursor.src}
                alt="cursor/png"
                className="absolute z-50 bottom-[60px] left-[110px] lg:right-[50px] w-[30px] h-[48px]"
              />
              <img
                src={ports.src}
                alt="ports/png"
                className="rounded-lg shadow-black/50 shadow-xl hidden xl:block absolute -left-[180px] -z-10 -bottom-[70px] min-w-[373px] min-h-[184px] border border-black object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex relative">
          <img
            src={bgStars.src}
            alt="bg_stars/webp"
            className="w-[500px] md:w-[1000px] h-[900px] z-0 -bottom-[250px] absolute right-7"
          />
          <div className="min-h-full w-[81px] relative">
            <div className="absolute left-[16px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] min-h-full bg-gradient-to-b z-20 from-[#55d163] via-[#48eb5b] to-[#55d163]" />
          </div>
          <div className="py-[5px] -ml-[45px] md:ml-0 md:pl-[64px] pr-[8px] md:pr-[24px] mt-[245px] lg:my-[64px]">
            <p className="text-[20px] ssm:text-[24px] text-[#7d8590] font-inter leading-[28px] md:leading-[32px] max-w-[317px] smm:max-w-[500px] w-full md:max-w-[500px] font-medium mb-[24px] md:mb-[16px]">
              <span className="text-[#f0f0f0]">GitHub Codespaces </span>offers a
              complete dev environment in seconds, so you can code, build, test,
              and open pull requests from any repo anywhere.
            </p>
            <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-4 md:mt-0 font-semibold">
              <span className="underline-animation text-base ssm:text-[20px] font-inter mr-2">
                Check out GitHub Codespaces
              </span>
              <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                <div className="chevron" />
                <span className="line absolute -translate-y-1/2 top-1/2" />
              </div>
            </span>
            <div className="mt-[64px] pt-[48px] pb-[100px]">
              <div className="font-roboto relative">
                <img
                  src={branchProductivity.src}
                  alt="git_branch_productivity/svg"
                  className="absolute hidden md:block -left-[93px] -top-[180px]"
                />
                <span className="text-[#86e98e] font-inter block text-[12px] leading-[20px] font-semibold rounded-full border border-[#86e98e] w-fit px-[8px]">
                  Did you know?
                </span>
                <h3 className="bg-gradient-to-br from-[#7ee787] to-green-400 text-transparent bg-clip-text font-jet-brains my-[8px] text-[32px] md:text-[64px] leading-[36px] md:leading-[68px] tracking-[-5px]">
                  22% increase
                </h3>
                <span className="text-base md:text-[20px] leading-[24px] md:leading-[28px] font-medium flex">
                  in developer productivity <br /> after three years with GitHub
                  <span className="text-base mt-6 block">1</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <CopilotExamples />
        <div className="relative pb-[158px] overflow-hidden">
          <div className="relative grid grid-cols-1 md:grid-cols-2 mt-[35px] gap-y-[35px] md:gap-x-[35px] max-w-[1278px] w-full xl:mx-auto">
            <div className="col-span-1 relative overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]">
              <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
                <span className="text-[#f0f0f0]">GitHub Actions</span> automates
                your build, test, and deployment workflow with simple and secure
                CI/CD.
                <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
                  <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
                    Discover GitHub Actions
                  </span>
                  <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                    <div className="chevron" />
                    <span className="line absolute -translate-y-1/2 top-1/2" />
                  </div>
                </span>
              </div>
              <div className="h-full w-fit mx-auto mt-7">
                <Image
                  src={actions}
                  alt="actions/png"
                  width={550}
                  height={425}
                  quality={100}
                  className="md:h-[350px] mt-auto border border-[#30363d] border-b-0 w-[350px] smm:w-full lg:w-[550px] lg:h-[425px] rounded-t-2xl object-fill"
                />
              </div>
            </div>

            <div className="col-span-1  overflow-hidden relative shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]">
              <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
                <span className="text-[#f0f0f0]">GitHub Mobile</span> fits your
                projects in your pocket, so you never miss a beat while on the
                go.
                <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
                  <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
                    Get GitHub Mobile
                  </span>
                  <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                    <div className="chevron" />
                    <span className="line absolute -translate-y-1/2 top-1/2" />
                  </div>
                </span>
              </div>
              <div className="h-[480px] md:h-[260px] w-fit mx-auto mt-7">
                <Image
                  src={mobile1}
                  alt="mobile1/png"
                  width={350}
                  height={425}
                  quality={100}
                  className="lgg:left-[35px] left-1/2 -translate-x-1/2 lgg:translate-x-0 border border-[#30363d] border-b-0 absolute -bottom-[150px] md:-bottom-[265px] lg:-bottom-[195px] w-[350px] rounded-t-2xl object-fill"
                />
                <Image
                  src={mobile2}
                  alt="mobile2/png"
                  width={350}
                  height={425}
                  quality={100}
                  className="hidden lgg:block left-[232px] border border-[#30363d] border-b-0 absolute -bottom-[300px] w-[350px] rounded-t-2xl object-fill"
                />
              </div>
            </div>
            <div className="absolute left-[16px] md:left-[53px] top-[100%] z-0 w-[2.5px] md:w-[4px] h-[50vh] bg-gradient-to-b from-[#ea6045] via-[#fe7b72] to-[#ea6045]" />
          </div>
        </div>
      </div>
    </section>
  )
}
