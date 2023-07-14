"use client"

import React from "react"
import { Fade } from "react-awesome-reveal"
import { CopilotIcon } from "@/app/components/atoms/icons/copilot"

interface Props {
  activeItem: "python" | "javascript" | "go"
}

export const GoExample = ({ activeItem }: Props) => {
  return (
    <code
      className={`${activeItem === "go" ? "block" : "hidden"} relative ml-2`}
    >
      <div className="absolute w-fit flex items-center flex-col">
        {[...Array(12)].map((_, index) => {
          return (
            <span
              key={index + 1}
              className={`${
                index + 1 >= 4 ? "border-r-[#1f6feb]" : "border-transparent"
              } ${
                index + 1 >= 10 ? "-ml-[36px]" : "-ml-[27px]"
              } text-[#6e7681] -ml-[27px] px-2 border-r-[2px] `}
            >
              {index + 1}
            </span>
          )
        })}
      </div>
      <div className="overflow-x-scroll hide-scrollbar">
        <span className="block whitespace-nowrap">
          <span className="text-[#fe7b72]">package </span>main
        </span>
        <br />
        <span className="block whitespace-nowrap">
          <span className="text-[#fe7b72]">func </span>
          <span className="text-[#d2a8ff]">Memoize</span>(fn{" "}
          <span className="text-[#fe7b72]">func</span>(int) int){" "}
          <span className="text-[#fe7b72]">func</span>(int) int &#123;
        </span>
        <Fade delay={800} cascade duration={500}>
          <div className="flex">
            <span className="block whitespace-nowrap pl-[45px] bg-[#388bfd1a] w-fit">
              cache<span className="text-[#a5d6ff]"> := </span>
              <span className="text-[#d2a8ff]">make</span>(
              <span className="text-[#fe7b72]">map</span>[int]int)
            </span>
          </div>
          <div className="flex">
            <span className="block whitespace-nowrap pl-[45px] bg-[#388bfd1a] w-fit">
              <span className="text-[#fe7b72]">return func</span>(n int) int
              &#123;
            </span>
          </div>
          <div className="flex">
            <span className="block whitespace-nowrap pl-[80px] bg-[#388bfd1a] w-fit">
              <span className="text-[#fe7b72]">if</span> v, ok
              <span className="text-[#a5d6ff]"> := </span>cache[n]; ok &#123;
            </span>
          </div>
          <div className="flex">
            <span className="block whitespace-nowrap pl-[115px] bg-[#388bfd1a] w-fit">
              <span className="text-[#fe7b72]">return</span> v
            </span>
          </div>
          <div className="flex">
            <span className="block whitespace-nowrap pl-[80px] bg-[#388bfd1a] w-fit">
              &#125;
            </span>
          </div>
          <div className="flex">
            <span className="block whitespace-nowrap pl-[80px] bg-[#388bfd1a] w-fit">
              cache[n] <span className="text-[#a5d6ff]"> = </span>
              <span className="text-[#d2a8ff]">fn</span>(n)
            </span>
          </div>
          <div className="flex">
            <span className="block whitespace-nowrap pl-[80px] bg-[#388bfd1a] w-fit">
              <span className="text-[#fe7b72]">return </span>cache[n]
            </span>
          </div>
          <div className="flex">
            <span className="block whitespace-nowrap pl-[45px] bg-[#388bfd1a] w-fit">
              &#125;
            </span>
          </div>
          <div className="flex">
            <span className="block whitespace-nowrap bg-[#388bfd1a] w-fit">
              &#125;
            </span>
          </div>
        </Fade>
      </div>
      <div className="bg-[#1f6feb] -ml-[2px] text-sm font-roboto gap-x-1 absolute top-[100%] p-[8px] rounded-md rounded-tl-none w-fit h-fit flex items-center">
        <CopilotIcon className="w-[16px] h-[16px]" /> Copilot
      </div>
    </code>
  )
}
