"use client"

import { Security2 as SecurityIcon } from "../../atoms/icons/security-2"
import bgStars from "@/app/assets/bg-stars-1.webp"
import branchSecurity from "@/app/assets/git-branch-security.svg"
import codeScanning from "@/app/assets/illu-code-scanning.png"
import dependabot from "@/app/assets/illu-dependabot.png"
import ghasList from "@/app/assets/illu-ghas-list.png"
import secretScanning from "@/app/assets/illu-secret-scanning.png"
import Image from "next/image"
import { Check } from "../../atoms/icons/check"

interface Props {}

export const Security = (props: Props) => {
  return (
    <section
      id="security"
      className="max-w-[100vw] relative mt-4 text-[#f0f0f0]          mb-[100px]"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="ml-[50px] md:ml-[115px] mb-[58px] md:mb-[96px]">
          <h2 className="text-[20px] md:text-[24px] relative mb-[24px] leading-[28px] font-semibold font-jet-brains">
            <div className="absolute  -left-[38px] md:-left-[74px] z-20 ">
              <div className="relative flex items-center justify-center">
                <div className="blur-effect absolute bg-[#939aff] w-[48px] h-[48px] rounded-full animate-pulse" />
                <SecurityIcon className="w-[28px] h-[28px] text-[#f0f0f0] relative z-[50]" />
                <div className="absolute z-0 top-[100%] mt-3 w-[2.5px] md:w-[4px] h-[460px] bg-gradient-to-b from-[#939aff] via-[#5c61bc] to-[#2b2c68]" />
              </div>
            </div>
            Security
          </h2>
          <p className="text-[28px] md:text-[48px] leading-[32px] md:leading-[55px] font-inter mr-2 max-w-[960px]">
            <p className="bg-gradient-to-br from-[#939aff] to-[#5c61bc] text-transparent bg-clip-text font-semibold mr-2 leading-[32px] md:leading-[55px] tracking-[-0,03em]">
              Embed security into <br /> the developer workflow.
            </p>
            <p className="tracking-[-0,03em]">
              With GitHub, developers can secure their code in minutes and
              organizations can automatically comply with regulations.
            </p>
          </p>
        </div>
        <div className="relative z-50 px-[8px] md:px-[16px] xl:px-0">
          <div className="z-20 relative px-[8px] md:px-[16px] xl:px-0 mb-[35px] max-w-[1278px] w-full xl:mx-auto">
            <div className="bg-[#161b22] font-roboto p-[82px] h-full shadow-[#0d1117]/50 shadow-2xl border border-[#30363d] rounded-xl overflow-hidden">
              <div className="text-[#5c636d]">
                <span className="block text-sm font-medium">cmake.yml</span>
                <span className="block text-xs">on: push </span>
              </div>
              <div className="flex items-start justify-center gap-x-[42px]">
                <div className="relative bg-[#41474e] mt-[34px] rounded-md w-[400px] flex items-center justify-between py-[16px] px-[24px]">
                  <span className="flex items-center gap-x-2">
                    <Check className="w-[22px] h-[22px] text-[#3fb950]" />
                    <span>Build</span>
                  </span>
                  <span className="text-sm text-[#969ea7]">1m 21s</span>
                  <div className="absolute left-[100%]">
                    <div className="h-[2px] w-[42px] bg-[#d1d5da] relative">
                      <div className="w-[10px] h-[10px] bg-[#6e7681] rounded-full absolute top-1/2 -translate-y-1/2 -left-[5px] border-[2px] border-[#444d56]" />
                      <div className="w-[10px] h-[10px] bg-[#6e7681] rounded-full absolute top-1/2 -translate-y-1/2 -right-[5px] border-[2px] border-[#444d56]" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-[#41474e] w-fit rounded-t-md px-[24px] pt-[8px] pb-[4px]">
                    Steps
                  </div>
                  <div className="bg-[#41474e] rounded-tr-md w-[400px] flex items-center justify-between py-[16px] px-[24px]">
                    <span className="flex items-center gap-x-2">
                      <Check className="w-[22px] h-[22px] text-[#3fb950]" />
                      <span>Initialize CodeQL</span>
                    </span>
                    <span className="text-sm text-[#969ea7]">1m 42s</span>
                  </div>
                  <div className="bg-[#41474e] w-[400px] flex items-center justify-between py-[16px] px-[24px]">
                    <span className="flex items-center gap-x-2">
                      <Check className="w-[22px] h-[22px] text-[#3fb950]" />
                      <span>Autobuild</span>
                    </span>
                    <span className="text-sm text-[#969ea7]">1m 24s</span>
                  </div>
                  <div className="bg-[#41474e] rounded-b-md w-[400px] flex items-center justify-between py-[16px] px-[24px]">
                    <span className="flex items-center gap-x-2">
                      <Check className="w-[22px] h-[22px] text-[#3fb950]" />
                      <span>Perform CodeQL Analyses</span>
                    </span>
                    <span className="text-sm text-[#969ea7]">1m 36s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={ghasList.src}
            alt="ghas_list/png"
            className="absolute shadow-[#0d1117]/30 z-[80] shadow-xl bottom-[-265px] right-[16px] w-[541px] h-[300px] rounded-lg border border-[#0d1117]"
          />
        </div>
        <div className="flex relative pb-9">
          <img
            src={bgStars.src}
            alt="bg_stars/webp"
            className="w-[500px] rotate-[380deg] md:w-[1000px] h-[900px] z-0 -bottom-[280px] absolute right-0"
          />
          <div className="min-h-full -mt-[38px] w-[81px] relative">
            <div className="absolute left-[24px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] h-[800px] bg-gradient-to-b z-20 from-[#2b2c68] via-[#5c61bc] to-[#2b2c68]" />
          </div>
          <div className="py-[5px] -ml-[35px] md:ml-0 md:pl-[64px] pr-[8px] md:pr-[24px] mt-[200px] md:mt-[245px] lg:my-[64px]">
            <p className="text-[20px] ssm:text-[24px] text-[#7d8590] font-inter leading-[28px] md:leading-[32px] max-w-[317px] smm:max-w-[500px] w-full md:max-w-[500px] font-medium mb-[24px] md:mb-[16px]">
              <span className="text-[#f0f0f0]">GitHub Advanced Security </span>
              lets you gain visibility into your security posture, respond to
              threats proactively, and ship secure applications quickly.
            </p>
            <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-4 md:mt-0 font-semibold">
              <span className="underline-animation text-base ssm:text-[20px] font-inter mr-2">
                Get GitHub Advanced Security
              </span>
              <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                <div className="chevron" />
                <span className="line absolute -translate-y-1/2 top-1/2" />
              </div>
            </span>
            <div className="mt-[64px] pt-[48px] pb-[100px]">
              <div className="font-roboto relative">
                <img
                  src={branchSecurity.src}
                  alt="git_branch_security/svg"
                  className="absolute hidden md:block -left-[93px] -top-[180px]"
                />
                <span className="text-[#939aff] font-inter block text-[12px] leading-[20px] font-semibold rounded-full border border-[#939aff] w-fit px-[8px]">
                  Did you know?
                </span>
                <h3 className="bg-gradient-to-br from-[#939aff] to-[#5c61bc] text-transparent bg-clip-text font-jet-brains my-[8px] text-[32px] md:text-[64px] leading-[36px] md:leading-[68px] tracking-[-5px]">
                  56 million projects
                </h3>
                <span className="text-base md:text-[20px] leading-[24px] md:leading-[28px] font-medium flex">
                  fixed vulnerabilities with GitHub
                  <span className="text-base -mt-1 block">3</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto z-20 relative px-[8px] md:px-[16px] xl:px-0 md:h-[457px] mb-[35px] w-full xl:mx-auto">
          <div className="bg-[#161b22] h-full flex flex-col md:flex-row justify-between shadow-[#0d1117]/50 shadow-2xl border border-[#30363d] rounded-xl overflow-hidden">
            <div className="text-[#f0f0f0]/50 relative md:mr-[50px] mx-[40px] pb-[65px] md:pb-0 mdd:mx-[32px] lg:mx-[58px] my-[28px] mdd:my-[62px] m-[32px] leading-[32px] font-semibold">
              <p className="md:max-w-[447px] w-full text-[20px] mdd:text-[24px]">
                <span className="text-[#f0f0f0]">Secret scanning </span>
                automatically looks for partner patterns and prevents fraudulent
                use of accidentally committed secrets.
              </p>
              <span className="codespace-span flex items-center cursor-pointer leading-[40px] absolute left-0 bottom-0 font-semibold">
                <span className="underline-animation text-[#f0f0f0] text-base mdd:text-[20px] font-inter mr-2">
                  Read about secret scanning
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                  <div className="chevron" />
                  <span className="line absolute -translate-y-1/2 top-1/2" />
                </div>
              </span>
            </div>
            <img src={secretScanning.src} alt="secret_scanning/png" />
          </div>
        </div>

        <div className="relative grid grid-cols-1 h-fit md:grid-cols-2 gap-y-[35px] px-[8px] md:px-0 md:gap-x-[35px] w-full xl:mx-auto">
          <div className="col-span-1 relative overflow-hidden shadow-[#0d1117]/50 shadow-2xl border border-[#30363d] rounded-xl bg-[#161b22]">
            <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
              <span className="text-[#f0f0f0]">Dependabot</span> makes it easy
              to find and fix vulnerable dependencies in your supply chain.
              <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
                <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
                  Explore Dependabot
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                  <div className="chevron" />
                  <span className="line absolute -translate-y-1/2 top-1/2" />
                </div>
              </span>
            </div>
            <div className="h-[260px] ssm:h-[350px] smm:h-[450px] w-full">
              <Image
                src={dependabot}
                alt="dependabot/png"
                width={619}
                height={450}
                quality={100}
                className="w-full md:h-[350px] absolute bottom-0 lg:h-[450px] object-cover"
              />
            </div>
          </div>

          <div className="col-span-1 relative overflow-hidden shadow-[#0d1117]/50 shadow-2xl border border-[#30363d] rounded-xl bg-[#161b22]">
            <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
              <span className="text-[#f0f0f0]">Code scanning</span> is GitHub’s
              static code analysis tool that helps you remediate issues in your
              code.
              <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
                <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
                  Download the latest SAST ebook
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                  <div className="chevron" />
                  <span className="line absolute -translate-y-1/2 top-1/2" />
                </div>
              </span>
            </div>
            <div className="h-[260px] ssm:h-[350px] smm:h-[450px] w-full">
              <Image
                src={codeScanning}
                alt="code_scanning/png"
                width={619}
                height={450}
                quality={100}
                className="w-full md:h-[350px] absolute bottom-0 lg:h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
