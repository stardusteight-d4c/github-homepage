import * as sponsors from "@/app/assets/sponsors"
import { Heart } from "@/app/components/atoms/icons/heart"

export const GitHubSponsors = () => {
  return (
    <div className="relative pb-[158px]">
      <div className="z-20 relative md:h-[550px] lg:h-[457px] mt-[35px] max-w-[1278px] w-full xl:mx-auto">
        <div className="bg-[#161b22] h-full flex flex-col lg:flex-row justify-between shadow-black/50 shadow-xl border border-[#30363d] rounded-xl overflow-hidden">
          <div className="text-[#f0f0f0]/50 relative md:mr-[50px] mx-[40px] pb-[65px] md:pb-0 mdd:mx-[32px] lg:mx-[58px] my-[28px] mdd:my-[62px] m-[32px] leading-[32px] font-semibold">
            <p className="md:max-w-[447px] w-full text-[20px] mdd:text-[24px]">
              <span className="text-[#f0f0f0]">GitHub Sponsors </span> lets you
              support your favorite open source maintainers and projects.
            </p>
            <span className="codespace-span flex items-center cursor-pointer leading-[40px] absolute left-0 bottom-0 md:-bottom-[65px] lg:bottom-0 font-semibold">
              <span className="underline-animation text-[#f0f0f0] text-base mdd:text-[20px] font-inter mr-2">
                Invest with GitHub Sponsors
              </span>
              <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                <div className="caret" />
                <span className="line absolute -translate-y-1/2 top-1/2" />
              </div>
            </span>
          </div>
          <div className="grid grid-cols-3 w-[500px] md:min-w-[525px] h-fit lg:w-fit gap-2 md:gap-4 mt-[0px] lg:-mt-[90px] md:ml-[400px] lg:ml-0 lg:mr-8 -rotate-[10deg] lg:-rotate-[15deg]">
            <a
              href="https://github.com/directus"
              target="_blank"
              className="col-span-1 h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
            >
              <img
                src={sponsors.directus.src}
                alt="directus"
                className="w-[48px] md:w-[98px] pointer-events-none select-none mx-auto rounded-md"
              />
              <span className="block text-sm font-roboto text-[#686e77] mx-auto my-[8px]">
                Directus
              </span>
              <button className="flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]">
                <Heart className="text-[#db61a2] w-[17px] h-[17px]" />
                <span className="text-[#bec6ce] font-roboto text-sm">
                  Sponsor
                </span>
              </button>
            </a>
            <a
              href="https://github.com/eslint"
              target="_blank"
              className="col-span-1 h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
            >
              <img
                src={sponsors.eslint.src}
                alt="eslint"
                className="w-[48px] md:w-[98px] pointer-events-none select-none mx-auto rounded-md"
              />
              <span className="block text-sm font-roboto text-[#686e77] mx-auto my-[8px]">
                Eslint
              </span>
              <button className="flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]">
                <Heart className="text-[#db61a2] w-[17px] h-[17px]" />
                <span className="text-[#bec6ce] font-roboto text-sm">
                  Sponsor
                </span>
              </button>
            </a>
            <a
              href="https://github.com/chaynhq"
              target="_blank"
              className="col-span-1 h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
            >
              <img
                src={sponsors.chaynhq.src}
                alt="chaynhq"
                className="w-[48px] md:w-[98px] pointer-events-none select-none mx-auto rounded-md"
              />
              <span className="block text-sm font-roboto text-[#686e77] mx-auto my-[8px]">
                CHAYN
              </span>
              <button className="flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]">
                <Heart className="text-[#db61a2] w-[17px] h-[17px]" />
                <span className="text-[#bec6ce] font-roboto text-sm">
                  Sponsor
                </span>
              </button>
            </a>
            <a
              href="https://github.com/kazupon"
              target="_blank"
              className="col-span-1 h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
            >
              <img
                src={sponsors.kazupon.src}
                alt="kazupon"
                className="w-[48px] md:w-[98px] pointer-events-none select-none mx-auto rounded-full"
              />
              <span className="block text-sm font-roboto text-[#686e77] mx-auto my-[8px]">
                kazupon
              </span>
              <button className="flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]">
                <Heart className="text-[#db61a2] w-[17px] h-[17px]" />
                <span className="text-[#bec6ce] font-roboto text-sm">
                  Sponsor
                </span>
              </button>
            </a>
            <a
              href="https://github.com/commandpost"
              target="_blank"
              className="col-span-1 h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
            >
              <img
                src={sponsors.commandpost.src}
                alt="commandpost"
                className="w-[48px] md:w-[98px] pointer-events-none select-none mx-auto rounded-md"
              />
              <span className="block text-sm font-roboto text-[#686e77] mx-auto my-[8px]">
                CommandPost
              </span>
              <button className="flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]">
                <Heart className="text-[#db61a2] w-[17px] h-[17px]" />
                <span className="text-[#bec6ce] font-roboto text-sm">
                  Sponsor
                </span>
              </button>
            </a>
            <a
              href="https://github.com/sindresorhus"
              target="_blank"
              className="col-span-1 h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
            >
              <img
                src={sponsors.sindresorhus.src}
                alt="sindresorhus"
                className="w-[48px] md:w-[98px] pointer-events-none select-none mx-auto rounded-full"
              />
              <span className="block text-sm font-roboto text-[#686e77] mx-auto my-[8px]">
                sindresorhus
              </span>
              <button className="flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]">
                <Heart className="text-[#db61a2] w-[17px] h-[17px]" />
                <span className="text-[#bec6ce] font-roboto text-sm">
                  Sponsor
                </span>
              </button>
            </a>
            <a
              href="https://github.com/homebrew"
              target="_blank"
              className="col-span-1 h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
            >
              <img
                src={sponsors.homebrew.src}
                alt="homebrew"
                className="w-[48px] md:w-[98px] pointer-events-none select-none mx-auto rounded-md"
              />
              <span className="block text-sm font-roboto text-[#686e77] mx-auto my-[8px]">
                Homebrew
              </span>
              <button className="flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]">
                <Heart className="text-[#db61a2] w-[17px] h-[17px]" />
                <span className="text-[#bec6ce] font-roboto text-sm">
                  Sponsor
                </span>
              </button>
            </a>
            <a
              href="https://github.com/yyx990803"
              target="_blank"
              className="col-span-1 h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
            >
              <img
                src={sponsors.yyx990803.src}
                alt="homebrew"
                className="w-[48px] md:w-[98px] pointer-events-none select-none mx-auto rounded-full"
              />
              <span className="block text-sm font-roboto text-[#686e77] mx-auto my-[8px]">
                yyx990803
              </span>
              <button className="flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]">
                <Heart className="text-[#db61a2] w-[17px] h-[17px]" />
                <span className="text-[#bec6ce] font-roboto text-sm">
                  Sponsor
                </span>
              </button>
            </a>

            <a
              href="https://github.com/dayhaysoos"
              target="_blank"
              className="col-span-1 h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
            >
              <img
                src={sponsors.dayhaysoos.src}
                alt="dayhaysoos"
                className="w-[48px] md:w-[98px] pointer-events-none select-none mx-auto rounded-full"
              />
              <span className="block text-sm font-roboto text-[#686e77] mx-auto my-[8px]">
                dayhaysoos
              </span>
              <button className="flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]">
                <Heart className="text-[#db61a2] w-[17px] h-[17px]" />
                <span className="text-[#bec6ce] font-roboto text-sm">
                  Sponsor
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="overflow-hidden h-[158px] w-full absolute top-[100%]">
          <div className="absolute left-[16px] md:left-[52px] top-0 z-0 w-[2.5px] md:w-[4px] h-[50vh] bg-gradient-to-b from-[#2b2c68] via-[#5c61bc] to-[#f6f8fa]" />
        </div>
      </div>
    </div>
  )
}
