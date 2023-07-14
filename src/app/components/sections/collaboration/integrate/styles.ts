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
  wrapper: `max-w-7xl mx-auto flex relative pb-9`,
  bgStars: `w-[500px] pointer-events-none select-none rotate-[180deg] md:w-[1000px] h-[900px] z-0 -bottom-[190px] absolute -right-[180px]`,
  branchLineContainer: `min-h-full w-[81px] relative`,
  branchLine: `absolute left-[18px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] h-[1000px] bg-gradient-to-b z-20 from-[#fe7b72] via-[#ea6045] to-[#fe7b72]`,
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
  wrapper: `col-span-1 relative z-[50] overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]`,
  text: `lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold`,
  spanStrong: `text-[#f0f0f0]`,
  imageContainer: `h-full w-fit mx-auto mt-7`,
  image: `md:h-[350px] pointer-events-none select-none mt-auto border border-[#30363d] border-b-0 w-[350px] smm:w-full lg:w-[550px] lg:h-[425px] rounded-t-2xl object-fill`,
}

export const pullRequestsStyles = {
  wrapper: `col-span-1 relative z-[50] overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]`,
  text: `lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold`,
  spanStrong: `text-[#f0f0f0]`,
  imageContainer: `h-full w-fit mx-auto mt-7`,
  image: `md:h-[350px] pointer-events-none select-none mt-auto border border-[#30363d] border-b-0 w-[350px] smm:w-full lg:w-[550px] lg:h-[425px] rounded-t-2xl object-fill`,
}

export const githubSponsorsStyles = {
  container: `relative z-[50] pb-[158px]`,
  innerContainer: `z-20 relative md:h-[550px] lg:h-[457px] mt-[35px] max-w-[1278px] w-full xl:mx-auto`,
  cardContainer: `bg-[#161b22] z-[50] relative h-full flex flex-col lg:flex-row justify-between shadow-black/50 shadow-xl border border-[#30363d] rounded-xl overflow-hidden`,
  textContainer: `text-[#f0f0f0]/50 relative md:mr-[50px] mx-[40px] pb-[65px] md:pb-0 mdd:mx-[32px] lg:mx-[58px] my-[28px] mdd:my-[62px] m-[32px] leading-[32px] font-semibold`,
  text: `md:max-w-[447px] w-full text-[20px] mdd:text-[24px]`,
  spanStrong: `text-[#f0f0f0]`,
  gridContainer: `grid grid-cols-3 w-[500px] md:min-w-[525px] h-fit lg:w-fit gap-2 md:gap-4 mt-[0px] lg:-mt-[90px] md:ml-[400px] lg:ml-0 lg:mr-8 -rotate-[10deg] lg:-rotate-[15deg]`,
  securityLineContainer: `overflow-hidden h-[195px] lg:h-[185px] w-full absolute top-[95%]`,
  branchSecurityLine: `absolute left-[16px] md:left-[52px] top-0 z-0 w-[2.5px] md:w-[4px] h-[50vh] bg-gradient-to-b from-[#2b2c68] via-[#5c61bc] to-[#f6f8fa]`,
  sponsorCard: {
    container: `col-span-1 select-none h-fit px-[24px] w-fit lg:px-[32px] py-[26px] flex cursor-pointer flex-col border border-[#30363d] rounded-md`,
    image: `w-[48px] md:w-[98px] pointer-events-none select-none mx-auto`,
    userImage: `rounded-full`,
    name: `block text-sm font-roboto text-[#686e77] mx-auto my-[8px]`,
    buttonContainer: `flex hover:brightness-150 cursor-pointer items-center bg-[#21262d] border border-[#373b42] rounded-md gap-x-[4px] py-[5px] px-[16px]`,
    heartIcon: `text-[#db61a2] w-[17px] h-[17px]`,
    buttonText: `text-[#bec6ce] font-roboto text-sm`,
  },
}
