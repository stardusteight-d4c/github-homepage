import React from "react"

interface Props {}

export const Form = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <form>
        <div className="flex flex-col gap-y-5 md:flex-row items-center justify-center w-fit">
          <div className="rounded-l-md overflow-hidden">
            <input
              type="text"
              placeholder="Email address"
              className="placeholder:text-[#535a61] outline-none w-[296px] border-[2px] border-white transition-all duration-100 focus:border-blue-600 text-black/90 bg-white rounded-md md:rounded-r-none rounded-l-md py-[10px] px-[24px]"
            />
          </div>
          <button className="custom-button py-[12px] w-full md:w-fit px-[24px] bg-[#773fc6] rounded-md md:rounded-l-none rounded-r-md text-base font-semibold font-inter flex items-center justify-center">
            Sign up for GitHub
          </button>
        </div>
      </form>
      <div className="h-[1px] md:h-[48px] w-full md:w-[1px] border-l border-[#ffffff2e] my-4 md:my-0 md:mx-4" />
      <button className="trial-span w-full md:w-fit span transition-all ease-in-out duration-300 relative flex items-center justify-center py-[12px] px-[24px] rounded-md bg-transparent border-[1px] hover:border-white border-[#ffffff2e] font-semibold">
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
