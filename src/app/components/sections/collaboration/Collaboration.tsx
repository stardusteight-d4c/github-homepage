import { Collaboration as CollaborationIcon } from "@/app/components/atoms/icons/collaboration"
import issuesPlan from "@/app/assets/issues-plan.png"
import bgStars from "@/app/assets/bg-stars-1.webp"
import branchCollaboration from "@/app/assets/git-branch-collaboration.svg"
import discussions from "@/app/assets/illu-discussions.png"
import pullRequests from "@/app/assets/illu-pull-requests.png"
import projects from "@/app/assets/illu-projects.png"
import Image from "next/image"

interface Props {}

export const Collaboration = (props: Props) => {
  return (
    <section
      id="collaboration"
      className="max-w-[100vw] relative mt-4 text-[#f0f0f0]          mb-[100px]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="ml-[50px] md:ml-[115px] mb-[58px] md:mb-[96px]">
          <h2 className="text-[20px] md:text-[24px] relative mb-[24px] leading-[28px] font-semibold font-jet-brains">
            <div className="absolute  -left-[38px] md:-left-[74px] z-20 ">
              <div className="relative flex items-center justify-center">
                <div className="blur-effect absolute bg-[#fe7b72] w-[48px] h-[48px] rounded-full animate-pulse" />
                <CollaborationIcon className="w-[28px] h-[28px] text-[#f0f0f0]" />
                <div className="absolute z-0 top-[100%] mt-3 w-[2.5px] md:w-[4px] h-[460px] bg-gradient-to-b from-[#fe7b72] via-[#ea6045] to-[#68332b]" />
              </div>
            </div>
            Collaboration
          </h2>
          <p className="text-[28px] md:text-[48px] leading-[32px] md:leading-[55px] font-inter mr-2 max-w-[960px]">
            <p className="bg-gradient-to-br from-[#fe7b72] to-[#ea6045] text-transparent bg-clip-text font-semibold mr-2 leading-[32px] md:leading-[55px] tracking-[-0,03em]">
              Supercharge collaboration.
            </p>
            <p className=" tracking-[-0,03em]">
              We provide unlimited repositories, best-in-class version control,
              and the world’s most powerful open source community! So your team
              can work more efficiently together.
            </p>
          </p>
        </div>
        <div className="relative z-50">
          <img
            src={issuesPlan.src}
            alt="issues_plan/png"
            className="w-full shadow-black/50 shadow-2xl rounded-xl border border-black"
          />
          <img
            src={projects.src}
            alt="projects/png"
            className="absolute bottom-[-375px] right-[-25px] w-[544px] h-[459px] rounded-lg border border-black"
          />
        </div>
        <div className="max-w-7xl mx-auto flex relative">
          <img
            src={bgStars.src}
            alt="bg_stars/webp"
            className="w-[500px] md:w-[1000px] h-[900px] z-0 -bottom-[250px] absolute right-7"
          />
          <div className="min-h-full w-[81px] relative">
            <div className="absolute left-[16px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] min-h-full bg-gradient-to-b z-20 from-[#101f1b] via-[#ea6045] to-[#101f1b]" />
          </div>
          <div className="py-[5px] -ml-[45px] md:ml-0 md:pl-[64px] pr-[8px] md:pr-[24px] mt-[245px] lg:my-[64px]">
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
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-[35px] md:gap-x-[35px] max-w-[1278px] w-full xl:mx-auto">
          <div className="col-span-1 relative overflow-hidden shadow-black/50 shadow-2xl border border-[#30363d] rounded-xl bg-[#161b22]">
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
                width={619}
                height={450}
                quality={100}
                className="w-full md:h-[350px] absolute bottom-0 lg:h-[450px] object-cover"
              />
            </div>
          </div>

          <div className="col-span-1 relative overflow-hidden shadow-black/50 shadow-2xl border border-[#30363d] rounded-xl bg-[#161b22]">
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
                width={619}
                height={450}
                quality={100}
                className="w-full md:h-[350px] absolute bottom-0 lg:h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
