export const gitHubnewsletterStyles = {
  container: `w-full lg:max-w-[416px]`,
  text: `flex flex-col mt-[25px] md:mt-[45px]`,
  title: `text-[#ffffff] text-[14px] leading-[21px] tracking-wide font-roboto font-medium`,
  description: `text-[#7d8590] text-[14px] leading-[21px] font-roboto`,
  button: `trial-span active:scale-95 transition-all ease-in-out duration-300 span mt-[16px] w-fit relative flex items-center justify-center py-[12px] px-[22px] rounded-md bg-transparent border-[1px] hover:ring-[2px] hover:ring-[#f6f8fa] border-[#ffffff2e] font-semibold`,
  buttonText: `text-base tracking-[0.03em] font-roboto font-medium`,
}

export const copyrightStyles = {
  wrapper: `mt-[180px] py-[24px] px-[16px] text-[#7d8590] bg-[#161b22] w-screen`,
  gridContainer: `max-w-7xl mx-auto grid grid-rows-2 md:flex justify-between`,
  copyrightContainer: `row-span-1 row-start-2 -mt-[28px] md:-mt-0`,
  copyrightUnorderedList: `md:flex items-center text-[12px] leading-[18px] md:gap-x-[16px]`,
  copyrightListItem: `w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]`,
  socialContainer: `row-span-1 row-start-1`,
  socialUnorderedList: `flex items-center gap-x-[16px]`,
  socialIconsList: {
    listItem: `cursor-pointer`,
    icon: `w-[18px] h-[18px]`,
  },
}
