import { Productivity as ProductivityIcon } from "../../atoms/icons/productivity"
import { Editor } from "./integrate/Editor"
import contextMenu from "../../../assets/illo-context-menu.png"
import cursor from "../../../assets/illo-cursor.png"
import ports from "../../../assets/illo-ports.png"
import branchProductivity from "../../../assets/git-branch-productivity.svg"
import bgStars from "../../../assets/bg-stars-1.webp"
import actions from "../../../assets/illu-actions.png"
import mobile from "../../../assets/illu-mobile.png"

import { CopilotExamples } from "./integrate/CopilotExamples"
import Image from "next/image"

export const Productivity = () => {
  return (
    <section className="max-w-[100vw] mt-4 relative text-[#f0f0f0]       mb-[500px]">
      <div className="max-w-7xl mx-auto">
        <div className="ml-[50px] md:ml-[115px] mb-[58px] md:mb-[96px]">
          <h2 className="text-[20px] md:text-[24px] relative mb-[24px] leading-[28px] font-semibold font-roboto">
            <div className="absolute  -left-[38px] md:-left-[74px] z-20 ">
              <div className="relative flex items-center justify-center">
                <div className="blur-effect absolute bg-[#7ee787] w-[48px] h-[48px] rounded-full animate-pulse" />
                <ProductivityIcon className="w-[28px] h-[28px] text-[#f0f0f0]" />
                <div className="absolute rounded-xl z-0 bottom-[-375px] md:bottom-[-380px] w-[2.5px] md:w-[4px] h-[360px] bg-gradient-to-b from-[#55d163] via-[#55d163] to-transparent" />
              </div>
            </div>
            Productivity
          </h2>
          <p className="text-[28px] md:text-[48px] leading-[32px] md:leading-[55px] tracking-[-0,03em] font-inter mr-2 max-w-[960px]">
            <strong className="bg-gradient-to-br mr-2 from-[#7ee787] leading-[32px] md:leading-[55px] tracking-[-0,03em] to-green-400 text-transparent bg-clip-text">
              Accelerate high-quality software development.
            </strong>
            Our AI-powered platform drives innovation with tools that boost
            developer velocity.
          </p>
        </div>
      </div>
      <div className="px-[8px] md:px-[16px] xl:px-0">
        <div className="relative max-w-[1278px] w-full xl:mx-auto">
          <Editor />
          <div className="z-40 absolute -bottom-[220px] md:-bottom-[180px] right-[30px] md:right-[50px]">
            <div className="relative">
              <img
                src={contextMenu.src}
                alt="context_menu/png"
                className="rounded-lg z-40 w-[300px] h-[262px] border border-black object-cover"
              />
              <img
                src={cursor.src}
                alt="cursor/png"
                className="absolute z-50 bottom-[60px] right-[50px] w-[30px] h-[48px]"
              />
              <img
                src={ports.src}
                alt="ports/png"
                className="rounded-lg hidden md:block absolute -left-[180px] -z-10 -bottom-[70px] min-w-[373px] min-h-[184px] border border-black object-cover"
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
            <div className="absolute left-[16px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] min-h-full bg-gradient-to-b z-20 from-[#101f1b] via-[#55d163] to-[#101f1b]" />
          </div>
          <div className="py-[5px] pl-[30px] md:pl-[64px] pr-[8px] md:pr-[24px] mt-[245px] md:my-[64px]">
            <p className="text-[20px] md:text-[24px] text-[#7d8590] font-inter leading-[28px] md:leading-[32px] w-[317px] md:w-full md:max-w-[500px] font-medium mb-[24px] md:mb-[16px]">
              <span className="text-[#f0f0f0]">GitHub Codespaces </span>offers a
              complete dev environment in seconds, so you can code, build, test,
              and open pull requests from any repo anywhere.
            </p>
            <span className="codespace-span flex items-center cursor-pointer leading-[40px] -mt-2 font-semibold">
              <span className="underline-animation text-base md:text-[20px] font-inter mr-2">
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
                <h3 className="text-[#7ee787] font-roboto my-[8px] text-[32px] md:text-[64px] leading-[36px] md:leading-[68px] tracking-[2px]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[35px] gap-x-[35px] max-w-[1278px] w-full xl:mx-auto">
          <div className="col-span-1 shadow-black/50 overflow-hidden shadow-2xl border border-[#30363d] rounded-xl bg-[#161b22]">
            <div className="py-[64px] pl-[64px] pr-[128px] text-[#f0f0f0]/50 text-[24px] leading-[32px] font-semibold">
              <span className="text-[#f0f0f0]">GitHub Actions</span> automates
              your build, test, and deployment workflow with simple and secure
              CI/CD.
              <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
                <span className="underline-animation text-[#f0f0f0] text-[20px] font-inter mr-2">
                  Discover GitHub Actions
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                  <div className="chevron" />
                  <span className="line absolute -translate-y-1/2 top-1/2" />
                </div>
              </span>
            </div>
            <Image
              src={actions}
              alt="actions/png"
              width={619}
              height={450}
              quality={100}
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="col-span-1 relative shadow-black/50 shadow-2xl border border-[#30363d] rounded-xl bg-[#161b22]">
            <div className="py-[64px] pl-[64px] pr-[128px] text-[#f0f0f0]/50 text-[24px] leading-[32px] font-semibold">
              <span className="text-[#f0f0f0]">GitHub Mobile</span> fits your
              projects in your pocket, so you never miss a beat while on the go.
              <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
                <span className="underline-animation text-[#f0f0f0] text-[20px] font-inter mr-2">
                  Get GitHub Mobile
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                  <div className="chevron" />
                  <span className="line absolute -translate-y-1/2 top-1/2" />
                </div>
              </span>
            </div>
            <div className="h-[450px] w-full">
              <Image
                src={mobile}
                alt="mobile/png"
                width={1208}
                height={764}
                quality={100}
                className="w-[600px] absolute bottom-0 mx-auto block object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
