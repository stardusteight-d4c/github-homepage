export const overlayStyles = {
  overlay: (openMenu: boolean) => {
    return `${
      openMenu ? "block lg:hidden" : "hidden"
    } overlay-glassmorphism w-screen min-h-screen inset-0 z-[100] overflow-hidden fixed`
  },
}
export const loginStyles = {
  signUp: `py-[4px] px-[8px] w-[74px] whitespace-nowrap text-[#f6f8fa] bg-transparent border border-[#f6f8fa] rounded-md text-light font-inter flex items-center justify-center`,
  signIn: `py-[8px] px-[12px] w-full text-[#f6f8fa] bg-[#1f2328] font-inter rounded-md hover:opacity-80 transition-all ease-in-out duration-75`,
}

export const menuStyles = {
  wrapper: `w-[74px]`,
  container: `w-full relative flex items-end justify-end`,
  menuDropdown: (openMenu: boolean) => {
    return `${
      openMenu ? "block" : "hidden"
    } menu top-[65px] max-h-[516px] -right-[16px] md:-right-[48px] p-[16px] w-[95vw] ssm:w-[320px] ml-4 bg-[#f6f8fa] overflow-y-scroll rounded-l-lg border border-[#636a74]/30 fixed`
  },
  navigation: `px-[16px] mb-auto text-[#1f2328]`,
  actionsContainer: `mt-[128px] pb-[16px]`,
}

export const listItemStyles = {
  listContainer: `py-[16px] flex items-center justify-between text-[20px] font-semibold font-roboto whitespace-nowrap`,
  handleCaret: (
    activeItem: false | "product" | "solutions" | "open-source",
    item: "product" | "solutions" | "open-source" | "pricing"
  ) => {
    return `${
      activeItem === item && "rotate-90"
    } w-[19px] h-[19px] text-[#96979a]`
  },
}

export const searchStyles = {
  search: `border border-[#1f2328]/10 mb-2 w-full bg-[#1f2328]/5 focus:border-[#2563eb] placeholder:text-[#1f2328]/50 text-[#1f2328] rounded-md py-[8px] px-[14px] outline-none`,
}

export const productListStyles = {
  wrapper: (activeItem: false | "product" | "solutions" | "open-source") => {
    return `${
      activeItem === "product" ? "flex" : "hidden"
    } font-roboto pb-[8px] flex-col`
  },
  secondaryListContainer: `flex flex-col pb-[8px] pt-[16px]`,
  title: `font-semibold font-roboto leading-[20px] text-[#1f2328]`,
  unorderedList: `font-roboto text-[#636a74] mt-[4px]`,
  secondaryListItem: `text-sm cursor-pointer leading-[20px] py-[4px] hover:text-[#2563eb] transition-all duration-200 ease-in-out`,
  listItem: {
    container: `flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100`,
    icon: `w-[24px] h-[24px] mr-[16px]`,
    headingsContainer: `flex flex-col items-start`,
    title: `font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100`,
    subtitle: `text-sm leading-[20px]`,
  },
}

export const solutionsListStyles = {
  wrapper: (activeItem: false | "product" | "solutions" | "open-source") => {
    return `${activeItem === "solutions" ? "block" : "hidden"} pr-4 mt-[8px]`
  },
  divider: `bg-[#636a74]/30 w-full h-[1px] my-[16px]`,
  list: {
    title: `font-semibold font-roboto leading-[20px] text-[#1f2328]`,
    unorderedList: `font-roboto text-[#636a74] mt-[4px]`,
    item: `text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out`,
  },
}

export const openSourceListStyles = {
  wrapper: (activeItem: false | "product" | "solutions" | "open-source") => {
    return `${
      activeItem === "open-source" ? "block" : "hidden"
    } cursor-pointer group/li py-2`
  },
  liGroup: (group: "group/li1" | "group/li2") => {
    return `cursor-pointer ${group}`
  },
  mainListTitle: (group: "li1" | "li2") => {
    return `font-semibold leading-[20px] text-[#1f2328] group-hover/${group}:text-[#2563eb] transition-all duration-200 ease-in-out`
  },
  mainListSubtitle: (group: "li1" | "li2") => {
    return `text-sm -mt-1 text-[#636a74] block leading-[20px] pt-[6px] group-hover/${group}:text-[#2563eb] transition-all duration-200 ease-in-out`
  },
  divider: `bg-[#636a74]/30 w-full h-[1px] my-[16px]`,
  secondaryTitle: `font-semibold leading-[20px] text-[#1f2328] mb-2`,
  unorderedList: `text-[#636a74]`,
  listItem: `text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out`,
}
