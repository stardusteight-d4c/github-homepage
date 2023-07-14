export const headerStyles = {
  wrapper: `max-w-7xl mx-auto`,
  container: `ml-[50px] md:ml-[115px] mb-[58px] md:mb-[96px]`,
  headingContainer: `text-[20px] font-jet-brains md:text-[24px] relative mb-[24px] leading-[28px] font-semibold`,
  absoluteIconWrapper: `absolute -left-[46px] md:-left-[74px] z-20`,
  sectionIconContainer: `relative flex items-center justify-center`,
  blurEffect: `blur-effect absolute bg-[#7ee787] w-[48px] h-[48px] rounded-full animate-pulse`,
  icon: `w-[28px] h-[28px] text-[#f0f0f0] relative z-[50]`,
  productivityBranchLine: `absolute z-0 top-[100%] mt-3 w-[2.5px] md:w-[4px] h-[450px] bg-gradient-to-b from-[#48eb5b] via-[#55d163] to-[#48eb5b]`,
  paragraph: {
    container: `text-[28px] md:text-[48px] leading-[32px] md:leading-[55px] font-inter mr-2 max-w-[960px]`,
    strongSpan: `block bg-gradient-to-br from-[#7ee787] to-green-400 text-transparent bg-clip-text font-semibold mr-2 leading-[32px] md:leading-[55px] tracking-[-0,03em]`,
    span: `block tracking-[-0,03em]`,
  },
}

export const branchStyles = {
  wrapper: `max-w-7xl mx-auto flex relative`,
  bgStars: `w-[500px] pointer-events-none select-none md:w-[1000px] h-[900px] z-0 -bottom-[250px] absolute right-7`,
  branchLineContainer: `min-h-full w-[81px] relative`,
  branchLine: `absolute left-[16px] md:left-[53px] top-0 w-[2.5px] md:w-[4px] h-[1000px] bg-gradient-to-b z-20 from-[#55d163] via-[#48eb5b] to-[#55d163]`,
  contentContainer: `py-[5px] -ml-[45px] md:ml-0 md:pl-[64px] pr-[8px] md:pr-[24px] mt-[245px] lg:my-[64px]`,
  paragraph: `text-[20px] ssm:text-[24px] text-[#7d8590] font-inter leading-[28px] md:leading-[32px] max-w-[317px] smm:max-w-[500px] w-full md:max-w-[500px] font-medium mb-[24px] md:mb-[16px]`,
  strong: `text-[#f0f0f0]`,
  didYouKnowSectionWrapper: `mt-[64px] pt-[48px] pb-[100px]`,
  didYouKnowSectionContainer: `font-roboto relative`,
  branchProductivityAsset: `absolute pointer-events-none select-none hidden md:block -left-[93px] -top-[180px]`,
  didYouKnowSpan: `text-[#86e98e] font-inter block text-[12px] leading-[20px] font-semibold rounded-full border border-[#86e98e] w-fit px-[8px]`,
  data: `bg-gradient-to-br from-[#7ee787] to-green-400 text-transparent bg-clip-text font-jet-brains my-[8px] text-[32px] md:text-[64px] leading-[36px] md:leading-[68px] tracking-[-5px]`,
  source: `text-base md:text-[20px] leading-[24px] md:leading-[28px] font-medium flex`,
  note: `text-base mt-6 block`,
}

export const gitHubCopilotStyles = {
  wrapper: `z-20 relative shadow-black/50 shadow-xl border border-[#30363d] rounded-xl overflow-hidden max-w-[1278px] w-full xl:mx-auto`,
  container: `bg-[#161b22] flex flex-col px-[8px] mdd:px-[32px] lg:px-[42px] md:flex-row justify-between py-[24px] mdd:py-[42px]`,
  textContainer: `text-[#f0f0f0]/50 md:pr-[50px] p-[32px] leading-[32px] font-semibold`,
  paragraph: `md:max-w-[447px] w-full text-[20px] mdd:text-[24px]`,
  spanStrong: `text-[#f0f0f0]`,
}

export const gitHubActionsStyles = {
  wrapper: `col-span-1 relative z-[50] overflow-hidden shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]`,
  textContainer: `lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold`,
  spanStrong: `text-[#f0f0f0]`,
  imageContainer: `h-full w-fit mx-auto mt-7`,
  image: `md:h-[350px] pointer-events-none select-none mt-auto border border-[#30363d] border-b-0 w-[350px] smm:w-full lg:w-[550px] lg:h-[425px] rounded-t-2xl object-fill`,
}

export const gitHubMobileStyles = {
  wrapper: `col-span-1 overflow-hidden relative z-[50] shadow-black/50 shadow-xl border border-[#30363d] rounded-xl bg-[#161b22]`,
  textContainer: `lg:py-[64px] lg:pl-[64px] lg:pr-[128px] p-[32px] text-[#f0f0f0]/50 text-[20px] md:text-[24px] leading-[32px] font-semibold`,
  spanStrong: `text-[#f0f0f0]`,
  textSpan: `text-[#f0f0f0] mt-[60px]`,
  imageContainer: `h-[480px] md:h-[260px] w-fit mx-auto mt-7`,
  image1: `lgg:left-[35px] pointer-events-none select-none left-1/2 -translate-x-1/2 lgg:translate-x-0 border border-[#30363d] border-b-0 absolute -bottom-[150px] md:-bottom-[265px] lg:-bottom-[195px] w-[350px] rounded-t-2xl object-fill`,
  image2: `hidden lgg:block pointer-events-none select-none left-[232px] border border-[#30363d] border-b-0 absolute -bottom-[300px] w-[350px] rounded-t-2xl object-fill`,
}
