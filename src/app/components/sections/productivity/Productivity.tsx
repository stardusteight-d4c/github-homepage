"use client"

import { Productivity as ProductivityIcon } from "../../atoms/icons/productivity"
import { Editor } from "./integrate/Editor"
import contextMenu from "../../../assets/illo-context-menu.png"
import cursor from "../../../assets/illo-cursor.png"
import ports from "../../../assets/illo-ports.png"
import branchProductivity from "../../../assets/git-branch-productivity.svg"
import { Python } from "../../atoms/icons/python"
import { JavaScript } from "../../atoms/icons/javascript"
import { Go } from "../../atoms/icons/go"
import { useState } from "react"
import { CopilotIcon } from "../../atoms/icons/copilot"
import bgStars from "../../../assets/bg-stars-1.webp"

export const Productivity = () => {
  const [activeItem, setActiveItem] = useState<"python" | "javascript" | "go">(
    "python"
  )

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
          <div className="z-40 absolute -bottom-[180px] right-[50px]">
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
                className="rounded-lg absolute -left-[180px] -z-10 -bottom-[70px] min-w-[373px] min-h-[184px] border border-black object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex relative">
          <img
            src={bgStars.src}
            alt="bg_stars/webp"
            className="w-[1000px] h-[900px] z-0 -bottom-[250px] absolute right-7"
          />
          <div className="min-h-full w-[81px] relative">
            <div className="absolute left-[53px] top-0 w-[2.5px] md:w-[4px] min-h-full bg-gradient-to-b z-20 from-[#101f1b] via-[#55d163] to-[#101f1b]" />
          </div>
          <div className="py-[5px] pl-[64px] pr-[24px] my-[64px]">
            <p className="text-[24px] text-[#7d8590] font-inter leading-[32px] w-[500px] font-medium mb-[16px]">
              <span className="text-[#f0f0f0]">GitHub Codespaces </span>offers a
              complete dev environment in seconds, so you can code, build, test,
              and open pull requests from any repo anywhere.
            </p>
            <span className="codespace-span flex items-center cursor-pointer leading-[40px] -mt-2 font-semibold">
              <span className="underline-animation text-[20px] font-inter mr-2">
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
                  className="absolute -left-[93px] -top-[180px]"
                />
                <span className="text-[#86e98e] font-inter block text-[12px] leading-[20px] font-semibold rounded-full border border-[#86e98e] w-fit px-[8px]">
                  Did you know?
                </span>
                <h3 className="text-[#7ee787] font-roboto my-[8px] text-[64px] leading-[68px] tracking-[2px]">
                  22% increase
                </h3>
                <span className="text-[20px] leading-[28px] font-medium flex">
                  in developer productivity <br /> after three years with GitHub
                  <span className="text-base mt-6 block">1</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border z-20 relative shadow-black/50 shadow-2xl border-[#30363d] rounded-xl overflow-hidden max-w-[1278px] w-full xl:mx-auto">
          <div className="bg-[#161b22] flex py-[64px]">
            <div className="pl-[64px] text-[#f0f0f0]/50 pr-[128px] text-[24px] leading-[32px] font-semibold">
              <p className="w-[447px]">
                <span className="text-[#f0f0f0]">GitHub Copilot </span>is your
                AI pair programmer that empowers you to complete tasks 55%
                faster by turning natural language prompts into coding
                suggestions.
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
                    matplotlib.pyplot{" "}
                    <span className="text-[#fe7b72]">as </span>plt
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
                      <span className="text-[#fe7b72]">return func</span>(n int)
                      int &#123;
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
      </div>
    </section>
  )
}
