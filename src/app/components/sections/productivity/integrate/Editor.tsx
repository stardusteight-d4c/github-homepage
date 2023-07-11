import { CaretHorizontal } from "@/app/components/atoms/icons/caret-horizontal"
import { GithubLogo } from "@/app/components/atoms/icons/github-logo"
import { Lock } from "@/app/components/atoms/icons/lock"
import { Menu } from "@/app/components/atoms/icons/menu"
import { Notify } from "@/app/components/atoms/icons/notify"
import { Plus } from "@/app/components/atoms/icons/plus"
import { Refresh } from "@/app/components/atoms/icons/refresh"
import Image from "next/image"
import globe from "../../../../assets/globe.jpg"

interface Props {}

export const Editor = (props: Props) => {
  return (
    <div className="border z-20 relative shadow-black/50 shadow-xl border-[#30363d] rounded-xl overflow-hidden max-w-[1278px] w-full xl:mx-auto">
      <div className="bg-[#161b22] flex items-center justify-between w-full border-b border-[#30363d] mx-auto p-[16px]">
        <div className="flex items-center">
          <CaretHorizontal className="text-[#6e7681] w-[24px] h-[24px]" />
          <CaretHorizontal className="text-[#6e7681] w-[24px] h-[24px] rotate-180" />
        </div>
        <div className="w-fit flex items-center py-[4px] px-[8px] bg-[#0d1117] text-[#f6f8fa] border border-[#30363d] rounded-[6px]">
          <Lock className="w-[16px] h-[16px] text-[#6e7681]" />
          <code className="mx-[8px] text-sm md:text-base md:mx-[64px] block">
            <span className="hidden md:block">
              mona-github-github-g59jpq2w5w7.github.dev
            </span>
            <span className="md:hidden">mona-github-github...</span>
          </code>
          <Refresh className="w-[16px] h-[16px] text-[#6e7681]" />
        </div>
        <Plus className="text-[#6e7681] w-[24px] h-[24px]" />
      </div>
      <div className="h-[624px] flex">
        <div className="hidden md:block p-[24px] h-full bg-[#161b22] border-r border-[#30363d] border-t-0 w-fit">
          <Menu className="text-[#6e7681] w-[24px] h-[24px]" />
        </div>
        <div className="flex w-full">
          <div className="bg-[#161b22] md:border-r border-[#30363d] w-full md:max-w-[402px] lg:max-w-[602px]">
            <ul className="flex items-center pt-3 px-3 font-roboto text-sm">
              <li className="py-[8px] px-[16px] rounded-t-lg bg-[#0d1117]">
                index.html
              </li>
              <li className="py-[8px] px-[16px] rounded-t-lg">script.js</li>
              <li className="py-[8px] px-[16px] rounded-t-lg">package.json</li>
            </ul>

            <div className="bg-[#0d1117] relative pl-[28px] p-[24px] md:max-w-[602px] w-full h-[336px]">
              <div className="absolute w-fit flex items-center flex-col">
                {[...Array(12)].map((_, index) => {
                  return <span key={index + 1} className="text-[#6e7681] -ml-5">{index + 1}</span>
                })}
              </div>
              <div className="max-w-[602px] overflow-x-scroll">
                <code>
                  <span className="whitespace-nowrap block">
                    <span className="mr-2" />
                    &lt;
                    <span className="text-[#7ee787]">div </span>
                    <span className="text-[#d2a8ff]">class</span>=
                    <span className="text-[#a5d6ff]">
                      "position-absolute width-full color-bg-default"
                    </span>
                    <span className="text-[#d2a8ff]">style</span>=
                    <span className="text-[#a5d6ff]">"bottom: -4rem;"</span>
                    &gt;
                  </span>
                  <span className="whitespace-nowrap">
                    <span className="mr-[20px]" />
                    &lt;<span className="text-[#7ee787]">div </span>
                    <span className="text-[#d2a8ff]">class</span>=
                    <span className="text-[#a5d6ff]">
                      "container-xl p-responsive"
                    </span>
                    &gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-[35px]" />
                    &lt;<span className="text-[#7ee787]">div </span>
                    <span className="text-[#d2a8ff]">class</span>=
                    <span className="text-[#a5d6ff]">
                      "d-flex flex-justify-center flex-lg-justify-end
                      color-bg-default"
                    </span>
                    &gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-[50px]" />
                    &lt;<span className="text-[#7ee787]">div </span>{" "}
                    <span className="text-[#d2a8ff]">class</span>=
                    <span className="text-[#a5d6ff]">
                      "col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2
                      right-lg-n12 events-none"
                    </span>
                    &gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-[65px]" />
                    &lt;<span className="text-[#7ee787]">picture</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-[80px]" />
                    &lt;<span className="text-[#7ee787]">source </span>
                    <span className="text-[#d2a8ff]">srcset</span>=
                    <span className="text-[#a5d6ff]">"astro-mona.webp" </span>
                    <span className="text-[#d2a8ff]">type</span>=
                    <span className="text-[#a5d6ff]">"image/webp"</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-[80px]" />
                    &lt;<span className="text-[#7ee787]">img </span>
                    <span className="text-[#d2a8ff]">src</span>=
                    <span className="text-[#a5d6ff]">"astro-mona.svg" </span>
                    <span className="text-[#d2a8ff]">width</span>=
                    <span className="text-[#a5d6ff]">"960" </span>
                    <span className="text-[#d2a8ff]">height</span>=
                    <span className="text-[#a5d6ff]">"967" </span>
                    <span className="text-[#d2a8ff]">class</span>=
                    <span className="text-[#a5d6ff]">
                      "home-astro-mona width-full position-absolute bottom-0
                      height-auto"{" "}
                    </span>{" "}
                    <span className="text-[#d2a8ff]">alt</span>=
                    <span className="text-[#a5d6ff]">
                      "Mona looking at GitHub activity across the globe"
                    </span>
                    &gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-[65px]" />
                    &lt;/<span className="text-[#7ee787]">picture</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-[55px]" />
                    &lt;/<span className="text-[#7ee787]">div</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-[35px]" />
                    &lt;/<span className="text-[#7ee787]">div</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-[20px]" />
                    &lt;/<span className="text-[#7ee787]">div</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    <span className="mr-2" />
                    &lt;/
                    <span className="text-[#7ee787]">div</span>
                    &gt;
                  </span>
                </code>
              </div>
            </div>

            <div className="text-[#7d8590] border-y border-[#30363d] h-full px-[24px] py-[12px]">
              <ul className="flex items-center gap-x-4 pb-[12px] text-sm font-semibold">
                <li className="text-[#f6f8fa]">Terminal</li>
                <li>Output</li>
                <li>Problems</li>
                <li>Debug</li>
                <li>Console</li>
              </ul>
              <code>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Starting '
                  <span className="text-[#2f81f7]">
                    watch-extension:vscode-api-tests
                  </span>
                  ' ...
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Finished '
                  <span className="text-[#2f81f7]">
                    clean-extension:typescript-language-features
                  </span>
                  '
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Starting '
                  <span className="text-[#2f81f7]">
                    watch-extension:typescript-language-features
                  </span>
                  ' ...{" "}
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Finished '
                  <span className="text-[#2f81f7]">
                    clean-extension:php-language-features
                  </span>
                  '
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Starting '
                  <span className="text-[#2f81f7]">
                    watch-extension:php-language-features
                  </span>
                  ' ...
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:40] Finished '
                  <span className="text-[#2f81f7]">
                    clean-extension:html-language-features-server
                  </span>
                  '
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:40] Starting '
                  <span className="text-[#2f81f7]">
                    watch-extension:html-language-features-server
                  </span>
                  ' ...
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:43] Finished '
                  <span className="text-[#2f81f7]">clean-client</span>' after{" "}
                  <span className="text-[#a371f7]">7.33 s</span>
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:43] Starting '
                  <span className="text-[#2f81f7]">watch-client</span>' ...
                </span>
              </code>
            </div>
          </div>

          <div className="hidden md:block w-full h-fit">
            <ul className="bg-[#161b22] w-full flex items-center justify-between pt-[16px] pb-[8px] px-[16px] ">
              <Menu className="text-[#f6f8fa] w-[16px] h-[16px]" />
              <GithubLogo className="text-[#f6f8fa] w-[24px] h-[24px]" />
              <Notify className="text-[#f6f8fa] w-[16px] h-[16px]" />
            </ul>
            <div className="bg-[#040D21]">
              <Image
                src={globe}
                alt="planet_globe/jpg"
                width={500}
                height={591}
                quality={100}
                className="max-w-[500px] w-full h-[591px] mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
