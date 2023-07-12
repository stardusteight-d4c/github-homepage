import branchProductivity from "@/app/assets/git-branch-productivity.svg"
import bgStars from "@/app/assets/bg-stars-1.webp"

export const Branch = () => {
  return (
    <div className="max-w-7xl mx-auto flex relative">
      <img
        src={bgStars.src}
        alt="bg_stars/webp"
        className="w-[500px] pointer-events-none select-none md:w-[1000px] h-[900px] z-0 -bottom-[250px] absolute right-7"
      />
      <div className="min-h-full w-[81px] relative">
        <div className="absolute left-[16px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] min-h-full bg-gradient-to-b z-20 from-[#55d163] via-[#48eb5b] to-[#55d163]" />
      </div>
      <div className="py-[5px] -ml-[45px] md:ml-0 md:pl-[64px] pr-[8px] md:pr-[24px] mt-[245px] lg:my-[64px]">
        <p className="text-[20px] ssm:text-[24px] text-[#7d8590] font-inter leading-[28px] md:leading-[32px] max-w-[317px] smm:max-w-[500px] w-full md:max-w-[500px] font-medium mb-[24px] md:mb-[16px]">
          <span className="text-[#f0f0f0]">GitHub Codespaces </span>offers a
          complete dev environment in seconds, so you can code, build, test, and
          open pull requests from any repo anywhere.
        </p>
        <span className="codespace-span flex items-center cursor-pointer leading-[40px] mt-4 md:mt-0 font-semibold">
          <span className="underline-animation text-base ssm:text-[20px] font-inter mr-2">
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
              className="absolute pointer-events-none select-none hidden md:block -left-[93px] -top-[180px]"
            />
            <span className="text-[#86e98e] font-inter block text-[12px] leading-[20px] font-semibold rounded-full border border-[#86e98e] w-fit px-[8px]">
              Did you know?
            </span>
            <h3 className="bg-gradient-to-br from-[#7ee787] to-green-400 text-transparent bg-clip-text font-jet-brains my-[8px] text-[32px] md:text-[64px] leading-[36px] md:leading-[68px] tracking-[-5px]">
              22% increase
            </h3>
            <span className="text-base md:text-[20px] leading-[24px] md:leading-[28px] font-medium flex">
              in developer productivity <br /> after three years with GitHub
              <span className="text-base mt-6 block">1</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
