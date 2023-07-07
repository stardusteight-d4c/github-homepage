"use client"

import { useState } from "react"
import { CopilotIcon } from "@/app/components/atoms/icons/copilot"
import { Python } from "@/app/components/atoms/icons/python"
import { JavaScript } from "@/app/components/atoms/icons/javascript"
import { Go } from "@/app/components/atoms/icons/go"

interface Props {}

export const CopilotExamples = (props: Props) => {
  const [activeItem, setActiveItem] = useState<"python" | "javascript" | "go">(
    "python"
  )

  return (
    <div className="z-20 relative shadow-black/50 shadow-2xl border border-[#30363d] rounded-xl overflow-hidden max-w-[1278px] w-full xl:mx-auto">
      <div className="bg-[#161b22] flex flex-col md:flex-row py-[64px]">
        <div className="pl-[64px] text-[#f0f0f0]/50 pr-[128px] text-[24px] leading-[32px] font-semibold">
          <p className="w-[447px]">
            <span className="text-[#f0f0f0]">GitHub Copilot </span>is your AI
            pair programmer that empowers you to complete tasks 55% faster by
            turning natural language prompts into coding suggestions.
          </p>
          <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
            <span className="underline-animation text-[#f0f0f0] text-[20px] font-inter mr-2">
              Meet GitHub Copilot
            </span>
            <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
              <div className="chevron" />
              <span className="line absolute -translate-y-1/2 top-1/2" />
            </div>
          </span>
        </div>
        <div className="max-w-[600px] border border-[#30363d] rounded-xl h-fit w-full">
          <div className="bg-[#161b22] border-b border-[#30363d] rounded-t-xl pt-[8px] px-[8px]">
            <ul className="flex items-center -mb-[2px]">
              <li
                onClick={() => setActiveItem("python")}
                className={`${
                  activeItem === "python"
                    ? "border-[#30363d] bg-[#0d1117] text-[#f0f0f0]"
                    : "text-[#7d8590] border-transparent bg-transparent"
                } py-[8px] px-[16px] cursor-pointer flex items-center gap-x-2 text-sm font-roboto border border-b-0 rounded-t-md`}
              >
                <Python className="-mt-[1px]" /> draw_scatterplot.py
              </li>
              <li
                onClick={() => setActiveItem("javascript")}
                className={`${
                  activeItem === "javascript"
                    ? "border-[#30363d] bg-[#0d1117] text-[#f0f0f0]"
                    : "text-[#7d8590] border-transparent bg-transparent"
                } py-[8px] px-[16px] cursor-pointer flex items-center gap-x-2 text-sm font-roboto border border-b-0 rounded-t-md`}
              >
                <JavaScript className="-mt-[1px]" /> time.js
              </li>
              <li
                onClick={() => setActiveItem("go")}
                className={`${
                  activeItem === "go"
                    ? "border-[#30363d] bg-[#0d1117] text-[#f0f0f0]"
                    : "text-[#7d8590] border-transparent bg-transparent"
                } py-[8px] px-[16px] cursor-pointer flex items-center gap-x-2 text-sm font-roboto border border-b-0 rounded-t-md`}
              >
                <Go className="w-[24px] h-[24px] -mt-[1px]" /> memoize.go
              </li>
            </ul>
          </div>
          <div className="h-full w-full rounded-b-xl p-[16px] bg-[#0d1117] z-50 relative">
            <code
              className={`${
                activeItem === "python" ? "block" : "hidden"
              } relative`}
            >
              <span className="block">
                <span className="text-[#6e7681] mr-2">1</span>
                <span className="text-[#fe7b72]">import </span>
                matplotlib.pyplot <span className="text-[#fe7b72]">as </span>plt
              </span>
              <span className="text-[#6e7681]">2</span>
              <span className="block">
                <span className="text-[#6e7681] mr-2">3</span>
                <span className="text-[#fe7b72]">def</span>{" "}
                <span className="text-[#d2a8ff]">draw_scatterplot</span>
                (x_values, y_values):
              </span>
              <span className="flex">
                <span className="text-[#6e7681] mr-2">4</span>
                <span className="block pl-[39px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  plt.<span className="text-[#d2a8ff]">scatter</span>
                  (x_values, y_values, s
                  <span className="text-[#a5d6ff]">=20</span>)
                </span>
              </span>
              <span className="flex">
                <span className="text-[#6e7681] mr-2">5</span>
                <span className="block pl-[39px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  plt.<span className="text-[#d2a8ff]">title</span>(
                  <span className="text-[#a5d6ff]">"Scatter Plot"</span>)
                </span>
              </span>
              <span className="flex">
                <span className="text-[#6e7681] mr-2">6</span>
                <span className="block pl-[39px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  plt.<span className="text-[#d2a8ff]">xlabel</span>(
                  <span className="text-[#a5d6ff]">"x values"</span>)
                </span>
              </span>
              <span className="flex">
                <span className="text-[#6e7681] mr-2">7</span>
                <span className="block pl-[39px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  plt.<span className="text-[#d2a8ff]">ylabel</span>(
                  <span className="text-[#a5d6ff]">"y values"</span>)
                </span>
              </span>
              <span className="flex">
                <span className="text-[#6e7681] mr-2">8</span>
                <span className="block pl-[39px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  plt.<span className="text-[#d2a8ff]">show</span>()
                </span>
              </span>

              <div className="bg-[#1f6feb] ml-[17px] text-sm font-roboto gap-x-1 absolute top-[100%] p-[8px] rounded-md rounded-tl-none w-fit h-fit flex items-center">
                <CopilotIcon className="w-[16px] h-[16px]" /> Copilot
              </div>
            </code>
            <code
              className={`${
                activeItem === "javascript" ? "block" : "hidden"
              } relative`}
            >
              <span className="block">
                <span className="text-[#6e7681] mr-2">1</span>
                <span className="text-[#fe7b72]">const </span>seconds
                <span className="text-[#a5d6ff]"> = </span>
                <span className="text-[#a5d6ff]">3600</span>
              </span>
              <span className="block">
                <span className="text-[#6e7681] mr-2">2</span>
                <span className="text-[#fe7b72]">const </span> minutes
                <span className="text-[#a5d6ff]"> = </span>seconds{" "}
                <span className="text-[#a5d6ff]">/ 60</span>
              </span>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">3</span>
                <span className="block bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  <span className="text-[#fe7b72]">const </span> hours
                  <span className="text-[#a5d6ff]"> = </span>minutes{" "}
                  <span className="text-[#a5d6ff]">/ 60</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">4</span>
                <span className="block bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  <span className="text-[#fe7b72]">const </span> days
                  <span className="text-[#a5d6ff]"> = </span>hours{" "}
                  <span className="text-[#a5d6ff]">/ 24</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">5</span>
                <span className="block bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  <span className="text-[#fe7b72]">const </span> weeks
                  <span className="text-[#a5d6ff]"> = </span>days{" "}
                  <span className="text-[#a5d6ff]">/ 7</span>{" "}
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">6</span>
                <span className="block bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  <span className="text-[#fe7b72]">const </span> months
                  <span className="text-[#a5d6ff]"> = </span>days{" "}
                  <span className="text-[#a5d6ff]">/ 30</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">7</span>
                <span className="block bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  <span className="text-[#fe7b72]">const </span>years
                  <span className="text-[#a5d6ff]"> = </span>
                  months <span className="text-[#a5d6ff]">/ 12</span>
                </span>
              </div>
              <div className="bg-[#1f6feb] ml-[17px] text-sm font-roboto gap-x-1 absolute top-[100%] p-[8px] rounded-md rounded-tl-none w-fit h-fit flex items-center">
                <CopilotIcon className="w-[16px] h-[16px]" /> Copilot
              </div>
            </code>
            <code
              className={`${
                activeItem === "go" ? "block" : "hidden"
              } relative pl-1`}
            >
              <span className="block">
                <span className="text-[#6e7681] mr-2">1</span>
                <span className="text-[#fe7b72]">package </span>main
              </span>
              <span className="text-[#6e7681] mr-2">2</span>
              <span className="block">
                <span className="text-[#6e7681] mr-2">3</span>
                <span className="text-[#fe7b72]">func </span>
                <span className="text-[#d2a8ff]">Memoize</span>(fn{" "}
                <span className="text-[#fe7b72]">func</span>(int) int){" "}
                <span className="text-[#fe7b72]">func</span>(int) int &#123;
              </span>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">4</span>
                <span className="block pl-[45px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  cache<span className="text-[#a5d6ff]"> := </span>
                  <span className="text-[#d2a8ff]">make</span>(
                  <span className="text-[#fe7b72]">map</span>[int]int)
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">5</span>
                <span className="block pl-[45px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  <span className="text-[#fe7b72]">return func</span>(n int) int
                  &#123;
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">6</span>
                <span className="block pl-[80px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  <span className="text-[#fe7b72]">if</span> v, ok
                  <span className="text-[#a5d6ff]"> := </span>cache[n]; ok
                  &#123;
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">7</span>
                <span className="block pl-[115px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  <span className="text-[#fe7b72]">return</span> v
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">8</span>
                <span className="block pl-[80px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  &#125;
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2">9</span>
                <span className="block pl-[80px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  cache[n] <span className="text-[#a5d6ff]"> = </span>
                  <span className="text-[#d2a8ff]">fn</span>(n)
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2 ml-[-9px]">10</span>
                <span className="block pl-[80px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  <span className="text-[#fe7b72]">return </span>cache[n]
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2 ml-[-9px]">11</span>

                <span className="block pl-[45px] bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  &#125;
                </span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-2 ml-[-9px]">12</span>
                <span className="block bg-[#388bfd1a] w-fit border-l-[2px] border-l-[#1f6feb]">
                  &#125;
                </span>
              </div>
              <div className="bg-[#1f6feb] ml-[17px] text-sm font-roboto gap-x-1 absolute top-[100%] p-[8px] rounded-md rounded-tl-none w-fit h-fit flex items-center">
                <CopilotIcon className="w-[16px] h-[16px]" /> Copilot
              </div>
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}
