import { CaretHorizontal } from "../../atoms/icons/caret-horizontal"
import { Lock } from "../../atoms/icons/lock"
import { Menu } from "../../atoms/icons/menu"
import { Plus } from "../../atoms/icons/plus"
import { Productivity as ProductivityIcon } from "../../atoms/icons/productivity"
import { Refresh } from "../../atoms/icons/refresh"

export const Productivity = () => {
  return (
    <section className="max-w-[100vw] relative text-white mt-[150px]">
      <div className="max-w-7xl mx-auto">
        <div className="ml-[115px]">
          <h2 className="text-[24px] relative mb-[24px] leading-[28px] font-semibold font-roboto">
            <div className="absolute flex items-center justify-center -left-[74px] z-20 ">
              <div className="blur-effect absolute bg-[#7ee787] w-[48px] h-[48px] rounded-full animate-pulse" />
              <ProductivityIcon className="w-[28px] h-[28px] text-white" />
            </div>
            Productivity
          </h2>
          <p className="text-[48px] leading-[55px] tracking-[-0,03em] font-inter w-[960px]">
            <strong className="bg-gradient-to-br mr-2 from-[#7ee787] leading-[55px] tracking-[-0,03em] to-green-400 text-transparent bg-clip-text">
              Accelerate high-quality software development.
            </strong>
            Our AI-powered platform drives innovation with tools that boost
            developer velocity.
          </p>
        </div>
      </div>
      <div className="max-w-[1278px] w-full mx-auto">
        <div className="bg-[#161b22] flex items-center justify-between w-full border border-[#30363d] rounded-t-xl mx-auto p-[16px]">
          <div className="flex items-center">
            <CaretHorizontal className="text-[#6e7681] w-[24px] h-[24px]" />
            <CaretHorizontal className="text-[#6e7681] w-[24px] h-[24px] rotate-180" />
          </div>
          <div className="w-fit flex items-center py-[4px] px-[8px] bg-[#0d1117] text-white border border-[#30363d] rounded-[6px]">
            <Lock className="w-[16px] h-[16px] text-[#6e7681]" />
            <code className="mx-[64px] block">
              mona-github-github-g59jpq2w5w7.github.dev
            </code>
            <Refresh className="w-[16px] h-[16px] text-[#6e7681]" />
          </div>
          <Plus className="text-[#6e7681] w-[24px] h-[24px]" />
        </div>
        <div className="h-[624px] flex">
          <div className="p-[24px] h-full bg-[#161b22] border border-[#30363d] rounded-bl-xl border-t-0 w-fit">
            <Menu className="text-[#6e7681] w-[24px] h-[24px]" />
          </div>
          <div className="bg-[#161b22] border-r border-[#30363d] w-[602px]">
            <ul className="flex items-center pt-3 px-3">
              <li className="py-[8px] px-[16px] rounded-t-lg bg-[#0d1117]">
                index.html
              </li>
              <li className="py-[8px] px-[16px] rounded-t-lg">script.js</li>
              <li className="py-[8px] px-[16px] rounded-t-lg">package.json</li>
            </ul>

            <div className="bg-[#0d1117] p-[24px] max-w-[602px] h-[336px]">
              <div className="max-w-[602px] overflow-x-scroll">
                <code>
                  <span className="whitespace-nowrap block">
                    &lt;
                    <span className="text-[#7ee787]">div </span>
                    <span className="text-[#d2a8ff]">class</span>=
                    <span className="text-[#a5d6ff]">
                      "position-absolute width-full color-bg-default"
                    </span>
                    <span className="text-[#d2a8ff]">style</span>=
                    <span className="text-[#a5d6ff]">"bottom: -4rem;"</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block ml-[10px]">
                    &lt;<span className="text-[#7ee787]">div </span>
                    <span className="text-[#d2a8ff]">class</span>=
                    <span className="text-[#a5d6ff]">
                      "container-xl p-responsive"
                    </span>
                    &gt;
                  </span>
                  <span className="whitespace-nowrap block ml-[25px]">
                    &lt;<span className="text-[#7ee787]">div </span>
                    <span className="text-[#d2a8ff]">class</span>=
                    <span className="text-[#a5d6ff]">
                      "d-flex flex-justify-center flex-lg-justify-end
                      color-bg-default"
                    </span>
                    &gt;
                  </span>
                  <span className="whitespace-nowrap block ml-[40px]">
                    &lt;<span className="text-[#7ee787]">div </span>{" "}
                    <span className="text-[#d2a8ff]">class</span>=
                    <span className="text-[#a5d6ff]">
                      "col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2
                      right-lg-n12 events-none"
                    </span>
                    &gt;
                  </span>
                  <span className="whitespace-nowrap block ml-[55px]">
                    &lt;<span className="text-[#7ee787]">picture</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block ml-[70px]">
                    &lt;<span className="text-[#7ee787]">source </span>
                    <span className="text-[#d2a8ff]">srcset</span>=
                    <span className="text-[#a5d6ff]">"astro-mona.webp" </span>
                    <span className="text-[#d2a8ff]">type</span>=
                    <span className="text-[#a5d6ff]">"image/webp"</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block ml-[70px]">
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
                  <span className="whitespace-nowrap block ml-[55px]">
                    &lt;/<span className="text-[#7ee787]">picture</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block ml-[40px]">
                    &lt;/<span className="text-[#7ee787]">div</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block ml-[25px]">
                    &lt;/<span className="text-[#7ee787]">div</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block ml-[10px]">
                    &lt;/<span className="text-[#7ee787]">div</span>&gt;
                  </span>
                  <span className="whitespace-nowrap block">
                    &lt;/
                    <span className="text-[#7ee787]">div</span>
                    &gt;
                  </span>
                </code>
              </div>
            </div>

            <div className="text-[#7d8590] px-[24px] py-[12px]">
              <ul className="flex items-center">
                <li>Terminal</li>
                <li>Output</li>
                <li>Problems</li>
                <li>Debug</li>
                <li>Console</li>
              </ul>
              <code>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Starting 'watch-extension:vscode-api-tests' ...
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Finished
                  'clean-extension:typescript-language-features'
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Starting
                  'watch-extension:typescript-language-features' ...{" "}
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Finished 'clean-extension:php-language-features'
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:36] Starting 'watch-extension:php-language-features'
                  ...
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:40] Finished
                  'clean-extension:html-language-features-server' 
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:40] Starting
                  'watch-extension:html-language-features-server' ...
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:43] Finished 'clean-client' after 7.33 s
                </span>
                <span className="whitespace-nowrap block text-sm">
                  [09:43:43] Starting 'watch-client' ...
                </span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
