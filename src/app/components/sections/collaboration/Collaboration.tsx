import { Collaboration as CollaborationIcon } from "@/app/components/atoms/icons/collaboration"
import issuesPlan from "@/app/assets/issues-plan.png"
import bgStars from "@/app/assets/bg-stars-1.webp"
import branchCollaboration from "@/app/assets/git-branch-collaboration.svg"
import discussions from "@/app/assets/discussions.png"
import pullRequests from "@/app/assets/pull-requests.png"
import projects from "@/app/assets/illu-projects.png"
import * as sponsors from "@/app/assets/sponsors"
import Image from "next/image"
import { Heart } from "../../atoms/icons/heart"

interface Props {}

export const Collaboration = (props: Props) => {
  return (
    <section
      id="collaboration"
      className="max-w-[100vw] relative mt-4 text-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="ml-[50px] md:ml-[115px] mb-[58px] md:mb-[96px]">
          <h2 className="text-[20px] md:text-[24px] relative mb-[24px] leading-[28px] font-semibold font-jet-brains">
            <div className="absolute  -left-[38px] md:-left-[74px] z-20 ">
              <div className="relative flex items-center justify-center">
                <div className="blur-effect absolute bg-[#fe7b72] w-[48px] h-[48px] rounded-full animate-pulse" />
                <CollaborationIcon className="w-[28px] h-[28px] text-[#f0f0f0] relative z-[50]" />
                <div className="absolute z-0 top-[100%] mt-3 w-[2.5px] md:w-[4px] h-[460px] bg-gradient-to-b from-[#ea6045] via-[#fe7b72] to-[#ea6045]" />
              </div>
            </div>
            Collaboration
          </h2>
          <p className="text-[28px] md:text-[48px] leading-[32px] md:leading-[55px] font-inter mr-2 max-w-[960px]">
            <p className="bg-gradient-to-br from-[#fe7b72] to-[#ea6045] text-transparent bg-clip-text font-semibold mr-2 leading-[32px] md:leading-[55px] tracking-[-0,03em]">
              Supercharge collaboration.
            </p>
            <p className="tracking-[-0,03em]">
              We provide unlimited repositories, best-in-class version control,
              and the world’s most powerful open source community! So your team
              can work more efficiently together.
            </p>
          </p>
        </div>
        <div className="relative z-50 px-[8px] md:px-[16px] xl:px-0">
          <img
            src={issuesPlan.src}
            alt="issues_plan/png"
            className="w-full border border-[#30363d] shadow-black/50 shadow-xl rounded-xl"
          />
          <img
            src={projects.src}
            alt="projects/png"
            className="absolute object-cover shadow-black/50 shadow-2xl bottom-[-175px] xl:bottom-[-375px] right-[16px] lg:left-auto smm:left-[45px] md:left-[142px] lg:right-[50px] xl:right-[25px] w-[267px] xl:w-[544px] h-[225px] xl:h-[459px] rounded-lg border border-[#0d1117]"
          />
        </div>
        <div className="max-w-7xl mx-auto flex relative pb-9 overflow-hidden">
          <img
            src={bgStars.src}
            alt="bg_stars/webp"
            className="w-[500px] rotate-[180deg] md:w-[1000px] h-[900px] z-0 -bottom-[190px] absolute -right-[180px]"
          />
          <div className="min-h-full w-[81px] relative">
            <div className="absolute left-[24px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] h-[800px] bg-gradient-to-b z-20 from-[#fe7b72] via-[#ea6045] to-[#fe7b72]" />
          </div>
          <div className="py-[5px] -ml-[35px] md:ml-0 md:pl-[64px] pr-[8px] md:pr-[24px] mt-[200px] md:mt-[245px] lg:my-[64px]">
            <p className="text-[20px] ssm:text-[24px] text-[#7d8590] font-inter leading-[28px] md:leading-[32px] max-w-[317px] smm:max-w-[500px] w-full md:max-w-[500px] font-medium mb-[24px] md:mb-[16px]">
              <span className="text-[#f0f0f0]">
                GitHub Issues and GitHub Projects{" "}
              </span>
              supply flexible project management tools that adapt to your team
              alongside your code.
            </p>
            <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-4 md:mt-0 font-semibold">
              <span className="underline-animation text-base ssm:text-[20px] font-inter mr-2">
                Explore GitHub Issues
              </span>
              <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                <div className="chevron" />
                <span className="line absolute -translate-y-1/2 top-1/2" />
              </div>
            </span>
            <div className="mt-[64px] pt-[48px] pb-[100px]">
              <div className="font-roboto relative">
                <img
                  src={branchCollaboration.src}
                  alt="git_branch_collaboration/svg"
                  className="absolute hidden md:block -left-[93px] -top-[180px]"
                />
                <span className="text-[#fe7b72] font-inter block text-[12px] leading-[20px] font-semibold rounded-full border border-[#fe7b72] w-fit px-[8px]">
                  Did you know?
                </span>
                <h3 className="bg-gradient-to-br from-[#fe7b72] to-[#ea6045] text-transparent bg-clip-text font-jet-brains my-[8px] text-[32px] md:text-[64px] leading-[36px] md:leading-[68px] tracking-[-5px]">
                  80% reduction
                </h3>
                <span className="text-base md:text-[20px] leading-[24px] md:leading-[28px] font-medium flex">
                  in onboarding time with GitHub
                  <span className="text-base -mt-1 block">2</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-[35px] px-[8px] md:px-0 md:gap-x-[35px] max-w-[1278px] w-full xl:mx-auto">
          <div className="col-span-1 relative overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]">
            <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
              <span className="text-[#f0f0f0]">GitHub Discussions</span> create
              space to ask questions and have open-ended conversations.
              <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
                <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
                  Enable GitHub Discussions
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                  <div className="chevron" />
                  <span className="line absolute -translate-y-1/2 top-1/2" />
                </div>
              </span>
            </div>
            <div className="h-[260px] ssm:h-[350px] smm:h-[450px] w-full">
              <Image
                src={discussions}
                alt="discussions/png"
                width={550}
                height={425}
                quality={100}
                className="md:h-[350px] left-1/2 -translate-x-1/2 border border-[#30363d] border-b-0 absolute bottom-0 w-[550px] lg:h-[425px] rounded-t-2xl object-fill"
              />
            </div>
          </div>

          <div className="col-span-1 relative overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]">
            <div className="lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold">
              <span className="text-[#f0f0f0]">Pull requests</span> allow
              real-time communication and collaboration about code changes.
              <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-[60px] font-semibold">
                <span className="underline-animation text-[#f0f0f0] text-base md:text-[20px] font-inter mr-2">
                  Check out pull requests
                </span>
                <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                  <div className="chevron" />
                  <span className="line absolute -translate-y-1/2 top-1/2" />
                </div>
              </span>
            </div>
            <div className="h-[260px] ssm:h-[350px] smm:h-[450px] w-full">
              <Image
                src={pullRequests}
                alt="pull_requests/png"
                width={550}
                height={425}
                quality={100}
                className="md:h-[350px] left-1/2 -translate-x-1/2 border border-[#30363d] border-b-0 absolute bottom-0 w-[550px] lg:h-[425px] rounded-t-2xl object-fill"
              />
            </div>
          </div>
        </div>

        <div className="relative pb-[158px]">
          <div className="z-20 relative px-[8px] md:px-[16px] xl:px-0 md:h-[457px] mt-[35px] max-w-[1278px] w-full xl:mx-auto">
            <div className="bg-[#161b22] h-full flex flex-col md:flex-row justify-between shadow-black/50 shadow-xl border border-[#30363d] rounded-xl overflow-hidden">
              <div className="text-[#f0f0f0]/50 relative md:mr-[50px] mx-[40px] pb-[65px] md:pb-0 mdd:mx-[32px] lg:mx-[58px] my-[28px] mdd:my-[62px] m-[32px] leading-[32px] font-semibold">
                <p className="md:max-w-[447px] w-full text-[20px] mdd:text-[24px]">
                  <span className="text-[#f0f0f0]">GitHub Sponsors </span> lets
                  you support your favorite open source maintainers and
                  projects.
                </p>
                <span className="codespace-span flex items-center cursor-pointer leading-[40px] absolute left-0 bottom-0 font-semibold">
                  <span className="underline-animation text-[#f0f0f0] text-base mdd:text-[20px] font-inter mr-2">
                    Invest with GitHub Sponsors
                  </span>
                  <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
                    <div className="chevron" />
                    <span className="line absolute -translate-y-1/2 top-1/2" />
                  </div>
                </span>
              </div>
              <div className="grid grid-cols-3 w-[500px] h-fit md:w-fit gap-2 md:gap-4 mt-[25px] md:-mt-[90px] mr-8 -rotate-[10deg] md:-rotate-[15deg]">
                <a
                  href="https://github.com/directus"
                  target="_blank"
                  className="col-span-1 h-fit px-[24px] w-fit md:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
                >
                  <img
                    src={sponsors.directus.src}
                    alt="directus"
                    className="w-[48px] md:w-[98px] mx-auto rounded-md"
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
                  className="col-span-1 h-fit px-[24px] w-fit md:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
                >
                  <img
                    src={sponsors.eslint.src}
                    alt="eslint"
                    className="w-[48px] md:w-[98px] mx-auto rounded-md"
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
                  className="col-span-1 h-fit px-[24px] w-fit md:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
                >
                  <img
                    src={sponsors.chaynhq.src}
                    alt="chaynhq"
                    className="w-[48px] md:w-[98px] mx-auto rounded-md"
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
                  className="col-span-1 h-fit px-[24px] w-fit md:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
                >
                  <img
                    src={sponsors.kazupon.src}
                    alt="kazupon"
                    className="w-[48px] md:w-[98px] mx-auto rounded-full"
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
                  className="col-span-1 h-fit px-[24px] w-fit md:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
                >
                  <img
                    src={sponsors.commandpost.src}
                    alt="commandpost"
                    className="w-[48px] md:w-[98px] mx-auto rounded-md"
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
                  className="col-span-1 h-fit px-[24px] w-fit md:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
                >
                  <img
                    src={sponsors.sindresorhus.src}
                    alt="sindresorhus"
                    className="w-[48px] md:w-[98px] mx-auto rounded-full"
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
                  className="col-span-1 h-fit px-[24px] w-fit md:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
                >
                  <img
                    src={sponsors.homebrew.src}
                    alt="homebrew"
                    className="w-[48px] md:w-[98px] mx-auto rounded-md"
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
                  className="col-span-1 h-fit px-[24px] w-fit md:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
                >
                  <img
                    src={sponsors.yyx990803.src}
                    alt="homebrew"
                    className="w-[48px] md:w-[98px] mx-auto rounded-full"
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
                  className="col-span-1 h-fit px-[24px] w-fit md:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md"
                >
                  <img
                    src={sponsors.dayhaysoos.src}
                    alt="dayhaysoos"
                    className="w-[48px] md:w-[98px] mx-auto rounded-full"
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
      </div>
    </section>
  )
}
