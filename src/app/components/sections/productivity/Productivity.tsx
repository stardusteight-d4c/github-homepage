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
        <div className="max-w-7xl mx-auto flex">
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
            <div className="max-w-[600px] border border-[#30363d] rounded-xl overflow-hidden w-full">
              <div className="bg-[#161b22] border-b border-[#30363d] pt-[8px] px-[8px]">
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
              <div className="h-full w-full bg-[#0d1117] z-50 relative">
                <code
                  className={`${activeItem === "python" ? "block" : "hidden"}`}
                >
                  <span className="block">import matplotlib.pyplot as plt</span>
                  <br />
                  <span className="block">scatter_plot(x_values, y_values):</span>
                  <span className="block ml-[39px]">
                    plt.scatter(x_values, y_values, s=20)
                  </span>
                  <span className="block ml-[39px]">
                    plt.title("Scatter Plot")
                  </span>
                  <span className="block ml-[39px]">
                    plt.xlabel("x values")
                  </span>
                  <span className="block ml-[39px]">
                    plt.ylabel("y values")
                  </span>
                  <span className="block ml-[39px]"> plt.show()</span>
                </code>
                <code
                  className={`${
                    activeItem === "javascript" ? "block" : "hidden"
                  }`}
                >
                  <span className="block">const seconds = 3600</span>
                  <span className="block">const = seconds /</span>
                  <span className="block">const hours = minutes / 60</span>
                  <span className="block">const days = hours / 24</span>
                  <span className="block">const weeks = days / 7</span>
                  <span className="block">const months = days / 30</span>
                  <span className="block">const years = months / 12</span>
                </code>
                <code className={`${activeItem === "go" ? "block" : "hidden"}`}>
                  <span className="block">package main</span>
                  <span className="block">
                    func Memoize(fn func(intintint) func(int) int &#123;
                  </span>
                  <span className="block">cache := make(map[int]int)</span>
                  <span className="block">return func(n int) int &#123;</span>
                  <span className="block">if v, ok := cache[n]; ok &#123;</span>
                  <span className="block">return v</span>
                  <span className="block">&#125;</span>
                  <span className="block">cache[n] = fn(n)</span>
                  <span className="block">return cache[n]</span>
                  <span className="block">&#125;</span>
                  <span className="block">&#125;</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
