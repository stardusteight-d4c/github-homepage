"use client"

import { useState } from "react"
import { CopilotIcon } from "@/app/components/atoms/icons/copilot"
import { Python } from "@/app/components/atoms/icons/python"
import { JavaScript } from "@/app/components/atoms/icons/javascript"
import { Go } from "@/app/components/atoms/icons/go"

interface Props {}

export const GitHubCopilot = (props: Props) => {
  const [activeItem, setActiveItem] = useState<"python" | "javascript" | "go">(
    "python"
  )

  return (
    <div className="z-20 relative shadow-black/50 shadow-xl border border-[#30363d] rounded-xl overflow-hidden max-w-[1278px] w-full xl:mx-auto">
      <div className="bg-[#161b22] flex flex-col px-[8px] mdd:px-[32px] lg:px-[42px] md:flex-row justify-between py-[24px] mdd:py-[42px]">
        <div className="text-[#f0f0f0]/50 md:pr-[50px] p-[32px] leading-[32px] font-semibold">
          <p className="md:max-w-[447px] w-full text-[20px] mdd:text-[24px]">
            <span className="text-[#f0f0f0]">GitHub Copilot </span>is your AI
            pair programmer that empowers you to complete tasks 55% faster by
            turning natural language prompts into coding suggestions.
          </p>
          <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
            <span className="underline-animation text-[#f0f0f0] text-base mdd:text-[20px] font-inter mr-2">
              Meet GitHub Copilot
            </span>
            <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
              <div className="chevron" />
              <span className="line absolute -translate-y-1/2 top-1/2" />
            </div>
          </span>
        </div>
        <div className="mdd:max-w-[450px] lg:max-w-[600px] mx-auto md:ml-auto rounded-xl h-fit w-full px-[4px] md:px-0 pb-16 md:pb-0">
          <div className="mdd:max-w-[450px] lg:max-w-[600px] border border-[#30363d] rounded-xl w-full">
            <div className="hide-scrollbar h-fit bg-[#161b22] overflow-x-scroll relative z-0 rounded-t-xl pt-[8px] px-[8px]">
              <ul className="flex items-center">
                <li
                  onClick={() => setActiveItem("python")}
                  className={`${
                    activeItem === "python"
                      ? "bg-[#0d1117] text-[#f0f0f0]"
                      : "text-[#7d8590] bg-transparent"
                  } py-[8px] px-[16px] relative z-[100] cursor-pointer flex items-center gap-x-2 text-sm font-roboto rounded-t-md`}
                >
                  <Python className="-mt-[1px]" /> draw_scatterplot.py
                </li>
                <li
                  onClick={() => setActiveItem("javascript")}
                  className={`${
                    activeItem === "javascript"
                      ? "bg-[#0d1117] text-[#f0f0f0]"
                      : "text-[#7d8590] bg-transparent"
                  } py-[8px] px-[16px] relative z-[100] cursor-pointer flex items-center gap-x-2 text-sm font-roboto rounded-t-md`}
                >
                  <JavaScript className="-mt-[1px]" /> time.js
                </li>
                <li
                  onClick={() => setActiveItem("go")}
                  className={`${
                    activeItem === "go"
                      ? "bg-[#0d1117] text-[#f0f0f0]"
                      : "text-[#7d8590] bg-transparent"
                  } py-[8px] px-[16px] relative z-[100] cursor-pointer flex items-center gap-x-2 text-sm font-roboto rounded-t-md`}
                >
                  <Go className="w-[24px] h-[24px] -mt-[1px]" /> memoize.go
                </li>
              </ul>
            </div>
            <div className="h-full w-full rounded-b-xl -mt-[1px] z-0 pl-[32px] p-[16px] bg-[#0d1117] relative">
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
                          index + 1 >= 4
                            ? "border-r-[#1f6feb]"
                            : "border-transparent"
                        } text-[#6e7681] -ml-[27px] px-2 border-r-[2px] `}
                      >
                        {index + 1}
                      </span>
                    )
                  })}
                </div>
                <div className="overflow-x-scroll w-full">
                  <span className="block whitespace-nowrap">
                    <span className="text-[#fe7b72]">import </span>
                    matplotlib.pyplot{" "}
                    <span className="text-[#fe7b72]">as </span>
                    plt
                  </span>
                  <br />
                  <span className="block whitespace-nowrap">
                    <span className="text-[#fe7b72]">def</span>{" "}
                    <span className="text-[#d2a8ff]">draw_scatterplot</span>
                    (x_values, y_values):
                  </span>
                  <span className="flex">
                    <span className="block whitespace-nowrap pl-[39px] bg-[#388bfd1a] w-fit">
                      plt.<span className="text-[#d2a8ff]">scatter</span>
                      (x_values, y_values, s
                      <span className="text-[#a5d6ff]">=20</span>)
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
                </div>
                <div className="bg-[#1f6feb] -ml-[2px] text-sm font-roboto gap-x-1 absolute top-[100%] p-[8px] rounded-md rounded-tl-none w-fit h-fit flex items-center">
                  <CopilotIcon className="w-[16px] h-[16px]" /> Copilot
                </div>
              </code>
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
                          index + 1 >= 3
                            ? "border-r-[#1f6feb]"
                            : "border-transparent"
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
              <code
                className={`${
                  activeItem === "go" ? "block" : "hidden"
                } relative ml-2`}
              >
                <div className="absolute w-fit flex items-center flex-col">
                  {[...Array(12)].map((_, index) => {
                    return (
                      <span
                        key={index + 1}
                        className={`${
                          index + 1 >= 4
                            ? "border-r-[#1f6feb]"
                            : "border-transparent"
                        } ${
                          index + 1 >= 10 ? "-ml-[36px]" : "-ml-[27px]"
                        } text-[#6e7681] -ml-[27px] px-2 border-r-[2px] `}
                      >
                        {index + 1}
                      </span>
                    )
                  })}
                </div>
                <div className="overflow-x-scroll">
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
                  <div className="flex">
                    <span className="block whitespace-nowrap pl-[45px] bg-[#388bfd1a] w-fit">
                      cache<span className="text-[#a5d6ff]"> := </span>
                      <span className="text-[#d2a8ff]">make</span>(
                      <span className="text-[#fe7b72]">map</span>[int]int)
                    </span>
                  </div>
                  <div className="flex">
                    <span className="block whitespace-nowrap pl-[45px] bg-[#388bfd1a] w-fit">
                      <span className="text-[#fe7b72]">return func</span>(n int)
                      int &#123;
                    </span>
                  </div>
                  <div className="flex">
                    <span className="block whitespace-nowrap pl-[80px] bg-[#388bfd1a] w-fit">
                      <span className="text-[#fe7b72]">if</span> v, ok
                      <span className="text-[#a5d6ff]"> := </span>cache[n]; ok
                      &#123;
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
                </div>
                <div className="bg-[#1f6feb] -ml-[2px] text-sm font-roboto gap-x-1 absolute top-[100%] p-[8px] rounded-md rounded-tl-none w-fit h-fit flex items-center">
                  <CopilotIcon className="w-[16px] h-[16px]" /> Copilot
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
