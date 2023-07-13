export const headerStyles = {
  wrapper: `bg-[#161b22] flex items-center justify-between w-full border-b border-[#30363d] mx-auto p-[16px]`,
  tagIconContainer: `flex items-center`,
  caret: (direction: "left" | "right") => {
    let rotate = "rotate-0"
    if (direction === "right") {
      rotate = "rotate-180"
    }
    return `text-[#6e7681] w-[24px] h-[24px] ${rotate}`
  },
  searchContainer: `w-fit flex items-center py-[4px] px-[8px] bg-[#0d1117] text-[#f6f8fa] border border-[#30363d] rounded-[6px]`,
  defaultIcon: `w-[16px] h-[16px] text-[#6e7681]`,
  code: `mx-[8px] text-sm md:text-base md:mx-[64px] block`,
  desktopText: `hidden md:block`,
  mobileText: `md:hidden`,
  plusIcon: `text-[#6e7681] w-[24px] h-[24px]`,
}

export const asideStyles = {
  wrapper: `hidden md:block p-[24px] h-full bg-[#161b22] border-r border-[#30363d] border-t-0 w-fit`,
  icon: `text-[#6e7681] w-[24px] h-[24px]`,
}

export const tabsStyles = {
  wrapper: `flex items-center pt-3 px-3 font-roboto text-sm`,
  activeTab: `py-[8px] px-[16px] rounded-t-lg bg-[#0d1117]`,
  inativeTab: `py-[8px] px-[16px] rounded-t-lg`,
}

export const codeStyles = {
  wrapper: `bg-[#0d1117] relative pl-[28px] p-[24px] md:max-w-[602px] w-full h-[336px]`,
  enumerationContainer: `absolute w-fit flex items-center flex-col`,
  number: `text-[#6e7681] -ml-5`,
  codeBlockContainer: `max-w-[602px] overflow-x-scroll`,
}

export const terminalStyles = {
  wrapper: `text-[#7d8590] border-y border-[#30363d] h-full px-[24px] py-[12px]`,
  tabs: `flex items-center gap-x-4 pb-[12px] text-sm font-semibold`,
  activeTab: `text-[#f6f8fa]`,
  whitespaceNoWrap: `whitespace-nowrap block text-sm`,
  operation: `text-[#2f81f7]`,
  time: `text-[#a371f7]`,
}

export const codeOutputStyles = {
  wrapper: `hidden md:block w-full h-fit`,
  header: `bg-[#161b22] w-full flex items-center justify-between pt-[16px] pb-[8px] px-[16px]`,
  icon: `text-[#f6f8fa] w-[16px] h-[16px]`,
  githubLogo: `text-[#f6f8fa] w-[24px] h-[24px]`,
  imgContainer: `bg-[#040D21]`,
  image: `max-w-[500px] pointer-events-none select-none w-full h-[591px] mx-auto object-contain`,
}

export const floatingItemsStyles = {
  wrapper: `z-40 absolute -bottom-[220px] lg:-bottom-[180px] left-[35px] md:left-[140px] lg:left-auto lg:right-[50px]`,
  container: `relative`,
  contextMenu: `rounded-lg pointer-events-none select-none shadow-black/50 shadow-2xl z-40 w-[300px] h-[262px] border border-black object-cover`,
  cursor: `absolute pointer-events-none select-none z-50 bottom-[60px] left-[110px] lg:right-[50px] w-[30px] h-[48px]`,
  ports: `rounded-lg pointer-events-none select-none shadow-black/50 shadow-xl hidden xl:block absolute -left-[180px] -z-10 -bottom-[70px] min-w-[373px] min-h-[184px] border border-black object-cover`,
}
