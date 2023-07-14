"use client"

import { Fade } from "react-awesome-reveal"
import { CopilotIcon } from "@/app/components/atoms/icons/copilot"

interface Props {
  activeItem: "python" | "javascript" | "go"
}

export const PythonExample = ({ activeItem }: Props) => {
  return (
    <code
      className={`${
        activeItem === "python" ? "block" : "hidden"
      } relative ml-2`}
    >
      <div className="absolute w-fit flex items-center flex-col">
        {[...Array(8)].map((_, index) => {
          return (
            <span
              key={index + 1}
              className={`${
                index + 1 >= 4 ? "border-r-[#1f6feb]" : "border-transparent"
              } text-[#6e7681] -ml-[27px] px-2 border-r-[2px] `}
            >
              {index + 1}
            </span>
          )
        })}
      </div>
      <div className="hide-scrollbar overflow-x-scroll w-full">
        <span className="block whitespace-nowrap">
          <span className="text-[#fe7b72]">import </span>
          matplotlib.pyplot <span className="text-[#fe7b72]">as </span>
          plt
        </span>
        <br />
        <span className="block whitespace-nowrap">
          <span className="text-[#fe7b72]">def</span>{" "}
          <span className="text-[#d2a8ff]">draw_scatterplot</span>
          (x_values, y_values):
        </span>
        <Fade delay={800} cascade duration={500}>
          <span className="flex">
            <span className="block whitespace-nowrap pl-[39px] bg-[#388bfd1a] w-fit">
              plt.<span className="text-[#d2a8ff]">scatter</span>
              (x_values, y_values, s<span className="text-[#a5d6ff]">=20</span>)
            </span>
          </span>
          <span className="flex">
            <span className="block whitespace-nowrap pl-[39px] bg-[#388bfd1a] w-fit">
              plt.<span className="text-[#d2a8ff]">title</span>(
              <span className="text-[#a5d6ff]">"Scatter Plot"</span>)
            </span>
          </span>
          <span className="flex">
            <span className="block whitespace-nowrap pl-[39px] bg-[#388bfd1a] w-fit">
              plt.<span className="text-[#d2a8ff]">xlabel</span>(
              <span className="text-[#a5d6ff]">"x values"</span>)
            </span>
          </span>
          <span className="flex">
            <span className="block whitespace-nowrap pl-[39px] bg-[#388bfd1a] w-fit">
              plt.<span className="text-[#d2a8ff]">ylabel</span>(
              <span className="text-[#a5d6ff]">"y values"</span>)
            </span>
          </span>
          <span className="flex">
            <span className="block whitespace-nowrap pl-[39px] bg-[#388bfd1a] w-fit">
              plt.<span className="text-[#d2a8ff]">show</span>()
            </span>
          </span>
        </Fade>
      </div>
      <div className="bg-[#1f6feb] -ml-[2px] text-sm font-roboto gap-x-1 absolute top-[100%] p-[8px] rounded-md rounded-tl-none w-fit h-fit flex items-center">
        <CopilotIcon className="w-[16px] h-[16px]" /> Copilot
      </div>
    </code>
  )
}
