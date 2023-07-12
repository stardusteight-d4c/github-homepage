import { CopilotIcon } from "@/app/components/atoms/icons/copilot"
import React from "react"

interface Props {
  activeItem: "python" | "javascript" | "go"
}

export const JavascriptExample = ({ activeItem }: Props) => {
  return (
    <code
      className={`${
        activeItem === "javascript" ? "block" : "hidden"
      } relative ml-2`}
    >
      <div className="absolute w-fit flex items-center flex-col">
        {[...Array(7)].map((_, index) => {
          return (
            <span
              key={index + 1}
              className={`${
                index + 1 >= 3 ? "border-r-[#1f6feb]" : "border-transparent"
              } text-[#6e7681] -ml-[27px] px-2 border-r-[2px] `}
            >
              {index + 1}
            </span>
          )
        })}
      </div>
      <span className="block whitespace-nowrap">
        <span className="text-[#fe7b72]">const </span>seconds
        <span className="text-[#a5d6ff]"> = </span>
        <span className="text-[#a5d6ff]">3600</span>
      </span>
      <span className="block whitespace-nowrap">
        <span className="text-[#fe7b72]">const </span> minutes
        <span className="text-[#a5d6ff]"> = </span>seconds{" "}
        <span className="text-[#a5d6ff]">/ 60</span>
      </span>
      <div className="flex">
        <span className="block whitespace-nowrap bg-[#388bfd1a] w-fit">
          <span className="text-[#fe7b72]">const </span> hours
          <span className="text-[#a5d6ff]"> = </span>minutes{" "}
          <span className="text-[#a5d6ff]">/ 60</span>
        </span>
      </div>
      <div className="flex">
        <span className="block whitespace-nowrap bg-[#388bfd1a] w-fit">
          <span className="text-[#fe7b72]">const </span> days
          <span className="text-[#a5d6ff]"> = </span>hours{" "}
          <span className="text-[#a5d6ff]">/ 24</span>
        </span>
      </div>
      <div className="flex">
        <span className="block whitespace-nowrap bg-[#388bfd1a] w-fit">
          <span className="text-[#fe7b72]">const </span> weeks
          <span className="text-[#a5d6ff]"> = </span>days{" "}
          <span className="text-[#a5d6ff]">/ 7</span>{" "}
        </span>
      </div>
      <div className="flex">
        <span className="block whitespace-nowrap bg-[#388bfd1a] w-fit">
          <span className="text-[#fe7b72]">const </span> months
          <span className="text-[#a5d6ff]"> = </span>days{" "}
          <span className="text-[#a5d6ff]">/ 30</span>
        </span>
      </div>
      <div className="flex">
        <span className="block whitespace-nowrap bg-[#388bfd1a] w-fit">
          <span className="text-[#fe7b72]">const </span>years
          <span className="text-[#a5d6ff]"> = </span>
          months <span className="text-[#a5d6ff]">/ 12</span>
        </span>
      </div>
      <div className="bg-[#1f6feb] -ml-[2px] text-sm font-roboto gap-x-1 absolute top-[100%] p-[8px] rounded-md rounded-tl-none w-fit h-fit flex items-center">
        <CopilotIcon className="w-[16px] h-[16px]" /> Copilot
      </div>
    </code>
  )
}
