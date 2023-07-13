import bgStars from "@/app/assets/bg-stars-1.webp"
import branchCollaboration from "@/app/assets/git-branch-collaboration.svg"

export const Branch = () => {
  return (
    <div className="max-w-7xl mx-auto flex relative pb-9 overflow-hidden">
      <img
        src={bgStars.src}
        alt="bg_stars/webp"
        className="w-[500px] pointer-events-none select-none rotate-[180deg] md:w-[1000px] h-[900px] z-0 -bottom-[190px] absolute -right-[180px]"
      />
      <div className="min-h-full w-[81px] relative">
        <div className="absolute left-[18px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] h-[800px] bg-gradient-to-b z-20 from-[#fe7b72] via-[#ea6045] to-[#fe7b72]" />
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
              className="absolute pointer-events-none select-none hidden md:block -left-[93px] -top-[180px]"
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
  )
}
