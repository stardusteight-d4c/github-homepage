export const headerStyles = {
  wrapper: `ml-[50px] md:ml-[115px] mb-[58px] md:mb-[96px]`,
  title: `text-[20px] md:text-[24px] relative mb-[24px] leading-[28px] font-semibold font-jet-brains`,
  titleIconContainer: `absolute -left-[45px] md:-left-[74px] z-20`,
  sectionIconContainer: `relative flex items-center justify-center`,
  titleIcon: `w-[28px] h-[28px] text-[#f0f0f0] relative z-[50]`,
  titleIconBlur: `blur-effect absolute bg-[#fe7b72] w-[48px] h-[48px] rounded-full animate-pulse`,
  collaborationBranchLine: `absolute z-0 top-[100%] mt-3 w-[2.5px] md:w-[4px] h-[460px] bg-gradient-to-b from-[#ea6045] via-[#fe7b72] to-[#ea6045]`,
  description: `text-[28px] md:text-[48px] leading-[32px] md:leading-[55px] font-inter mr-2 max-w-[960px]`,
  gradientText: `bg-gradient-to-br from-[#fe7b72] to-[#ea6045] text-transparent bg-clip-text font-semibold mr-2 leading-[32px] md:leading-[55px] tracking-[-0.03em]`,
  regularText: `tracking-[-0.03em]`,
}

export const issuesStyles = {
  container: `relative z-50`,
  issuesImage: `w-full pointer-events-none select-none border border-[#30363d] shadow-black/50 shadow-xl rounded-xl`,
  projectsImage: `absolute pointer-events-none select-none object-cover shadow-black/50 shadow-2xl bottom-[-175px] xl:bottom-[-375px] right-[16px] lg:left-auto smm:left-[45px] md:left-[142px] lg:right-[50px] xl:right-[25px] w-[267px] xl:w-[544px] h-[225px] xl:h-[459px] rounded-lg border border-[#0d1117]`,
}

export const branchStyles = {
  wrapper: `max-w-7xl mx-auto flex relative pb-9 overflow-hidden`,
  bgStars: `w-[500px] pointer-events-none select-none rotate-[180deg] md:w-[1000px] h-[900px] z-0 -bottom-[190px] absolute -right-[180px]`,
  branchLineContainer: `min-h-full w-[81px] relative`,
  branchLine: `absolute left-[18px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] h-[800px] bg-gradient-to-b z-20 from-[#fe7b72] via-[#ea6045] to-[#fe7b72]`,
  contentContainer: `py-[5px] -ml-[35px] md:ml-0 md:pl-[64px] pr-[8px] md:pr-[24px] mt-[200px] md:mt-[245px] lg:my-[64px]`,
  paragraph: `text-[20px] ssm:text-[24px] text-[#7d8590] font-inter leading-[28px] md:leading-[32px] max-w-[317px] smm:max-w-[500px] w-full md:max-w-[500px] font-medium mb-[24px] md:mb-[16px]`,
  spanStrong: `text-[#f0f0f0]`,
  didYouKnowSectionWrapper: `mt-[64px] pt-[48px] pb-[100px]`,
  didYouKnowSectionContainer: `font-roboto relative`,
  branchCollaboration: `absolute pointer-events-none select-none hidden md:block -left-[93px] -top-[180px]`,
  didYouKnowSpan: `text-[#fe7b72] font-inter block text-[12px] leading-[20px] font-semibold rounded-full border border-[#fe7b72] w-fit px-[8px]`,
  data: `bg-gradient-to-br from-[#fe7b72] to-[#ea6045] text-transparent bg-clip-text font-jet-brains my-[8px] text-[32px] md:text-[64px] leading-[36px] md:leading-[68px] tracking-[-5px]`,
  source: `text-base md:text-[20px] leading-[24px] md:leading-[28px] font-medium flex`,
  note: `text-base -mt-1 block`,
}

export const gitHubDiscussionsStyles = {
  wrapper: `col-span-1 relative overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]`,
  text: `lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold`,
  spanStrong: `text-[#f0f0f0]`,
  imageContainer: `h-full w-fit mx-auto mt-7`,
  image: `md:h-[350px] pointer-events-none select-none mt-auto border border-[#30363d] border-b-0 w-[350px] smm:w-full lg:w-[550px] lg:h-[425px] rounded-t-2xl object-fill`,
}

export const pullRequestsStyles = {
  wrapper: `col-span-1 relative overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]`,
  text: `lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold`,
  spanStrong: `text-[#f0f0f0]`,
  imageContainer: `h-full w-fit mx-auto mt-7`,
  image: `md:h-[350px] pointer-events-none select-none mt-auto border border-[#30363d] border-b-0 w-[350px] smm:w-full lg:w-[550px] lg:h-[425px] rounded-t-2xl object-fill`,
}
