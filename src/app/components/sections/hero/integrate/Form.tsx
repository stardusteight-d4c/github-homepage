import React from "react"

interface Props {}

export const Form = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center">
      <form className="w-full lg:w-fit">
        <div className="flex flex-col gap-y-5 md:flex-row items-center justify-center w-full md:w-fit">
          <div className="rounded-l-md overflow-hidden w-full md:w-fit">
            <input
              type="text"
              placeholder="Email address"
              className="placeholder:text-[#535a61] outline-none w-full md:w-[296px] border-[2px] border-[#f6f8fa] transition-all duration-100 focus:border-blue-600 text-[#0d1117]/90 bg-[#f6f8fa] rounded-md md:rounded-r-none rounded-l-md py-[10px] px-[12px] md:px-[24px]"
            />
          </div>
          <button className="custom-button py-[12px] w-full md:w-fit px-[24px] bg-[#773fc6] rounded-md md:rounded-l-none rounded-r-md text-base font-semibold font-inter flex items-center justify-center">
            Sign up for GitHub
          </button>
        </div>
      </form>
      <div className="h-[1px] lg:h-[48px] w-full md:w-[487px] lg:w-[1px] border-t lg:border-l border-[#ffffff2e] my-4 lg:my-0 lg:mx-4" />
      <button className="trial-span w-full md:w-[487px] lg:w-fit span transition-all ease-in-out duration-300 relative flex items-center justify-center py-[12px] px-[24px] rounded-md bg-transparent border-[1px] hover:border-[#f6f8fa] border-[#ffffff2e] font-semibold">
        <span className="pr-[4px] tracking-[0.03em] font-roboto font-medium">
          Start a free enterprise trial
        </span>
        <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px]">
          <div className="chevron ml-2 mt-[1px]" />
          <span className="line absolute -translate-y-1/2 top-1/2 mt-[1px]" />
        </div>
      </button>
    </div>
  )
}
