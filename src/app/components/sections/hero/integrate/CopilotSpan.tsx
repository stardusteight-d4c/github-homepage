import React from "react"
import copilot from "@/app/assets/logos/copilot.svg"

interface Props {}

export const CopilotSpan = (props: Props) => {
  return (
    <div className="copilot-span span w-fit hover:border-white mb-[18px] md:mb-[30px] rounded-full transition-all ease-in-out duration-300 flex items-center py-[7px] md:py-[14px] px-[10px] md:px-[20px]">
      <img
        src={copilot.src}
        alt="copilot_logo/svg"
        className="mr-[16px] w-[38px] md:w-[40px]"
      />
      <div className="flex flex-col font-roboto mr-[16px] pr-[4px]">
        <strong className="text-sm md:text-base font-medium tracking-[0.03em] leading-5">
          Introducing GitHub Copilot X
        </strong>
        <span className="text-sm md:text-base text-[#6e7681] font-light md:whitespace-nowrap">
          Your AI pair programmer is leveling up
        </span>
      </div>
      <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
        <div className="chevron" />
        <span className="line absolute -translate-y-1/2 top-1/2" />
      </div>
    </div>
  )
}
