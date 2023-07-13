import bgStars from "@/app/assets/bg-stars-1.webp"
import branchSecurity from "@/app/assets/git-branch-security.svg"
import { TextSpanWithUnderline } from "@/app/components/globals/TextSpanWithUnderline"

export const Branch = () => {
  return (
    <div className="flex relative pb-9">
      <img
        src={bgStars.src}
        alt="bg_stars/webp"
        className="w-[500px] rotate-[380deg] md:w-[1000px] h-[900px] z-0 -bottom-[280px] absolute right-0"
      />
      <div className="min-h-full -mt-[38px] w-[81px] relative">
        <div className="absolute left-[17px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] h-[800px] bg-gradient-to-b z-20 from-[#2b2c68] via-[#5c61bc] to-[#2b2c68]" />
      </div>
      <div className="py-[5px] -ml-[35px] md:ml-0 md:pl-[64px] pr-[8px] md:pr-[24px] mt-[180px] md:mt-[245px] lg:my-[64px]">
        <p className="text-[20px] ssm:text-[24px] text-[#7d8590] font-inter leading-[28px] md:leading-[32px] max-w-[317px] smm:max-w-[500px] w-full md:max-w-[500px] font-medium mb-[24px] md:mb-[16px]">
          <span className="text-[#f0f0f0]">GitHub Advanced Security </span>
          lets you gain visibility into your security posture, respond to
          threats proactively, and ship secure applications quickly.
        </p>
        <TextSpanWithUnderline
          title="Get GitHub Advanced Security"
          styles="text-[#f0f0f0] mt-4"
        />
        <div className="mt-[64px] pt-[48px] pb-[100px]">
          <div className="font-roboto relative">
            <img
              src={branchSecurity.src}
              alt="git_branch_security/svg"
              className="absolute hidden md:block -left-[93px] -top-[180px]"
            />
            <span className="text-[#939aff] font-inter block text-[12px] leading-[20px] font-semibold rounded-full border border-[#939aff] w-fit px-[8px]">
              Did you know?
            </span>
            <h3 className="bg-gradient-to-br from-[#939aff] to-[#5c61bc] text-transparent bg-clip-text font-jet-brains my-[8px] text-[32px] md:text-[64px] leading-[36px] md:leading-[68px] tracking-[-5px]">
              56 million projects
            </h3>
            <span className="text-base md:text-[20px] leading-[24px] md:leading-[28px] font-medium flex">
              fixed vulnerabilities with GitHub
              <span className="text-base -mt-1 block">3</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
