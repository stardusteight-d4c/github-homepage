export const wrapperStyles = {
  wrapper: `top-0 absolute w-screen z-50 hidden lg:block`,
  container: `max-w-7xl mx-auto px-4 py-1 flex items-center justify-between`,
}

export const searchStyles = {
  input: `span-variant focus:border-[#2563eb] text-[#f6f8fa] rounded-md w-[240px] py-[8px] px-[14px] outline-none`,
}

export const listItemStyles = {
  dropdownType: {
    wrapper: `group`,
    container: `flex items-center cursor-pointer py-5`,
    title: `group-hover:opacity-80 transition-all ease-in-out duration-75 capitalize`,
    caretDown: `group-hover:translate-y-[2px] transition-all ease-in duration-100 w-[16px] h-[16px] ml-1 mr-4`,
  },
  childrenType: {
    wrapper: `cursor-pointer capitalize`,
  },
}

export const signInStyles = {
  wrapper: `py-[8px] active:scale-95 transition-all ease-in-out duration-300 px-[12px] font-inter rounded-md hover:opacity-80 transition-all ease-in-out duration-75`,
}

export const signUpStyles = {
  wrapper: `custom-button active:scale-95 transition-all ease-in-out duration-300 py-[8px] px-[12px] bg-[#773fc6] rounded-md text-base font-inter flex items-center justify-center`,
}

export const productDropdownStyles = {
  wrapper: `absolute -mt-2 -ml-5 w-[500px] hidden group-hover:flex bg-[#f6f8fa] border border-[#636a74]/30 my-6 rounded-lg`,
  unorderedList: `pl-[24px] pr-[48px] font-roboto py-[24px] flex flex-col`,
  divider: `bg-[#636a74]/30 w-[1px] h-[512px] my-auto`,
  secondListWrapper: `px-[24px] flex flex-col py-[24px]`,
  secondListTitle: `font-semibold font-roboto leading-[20px] text-[#1f2328]`,
  secondUnorderedList: `font-roboto text-[#636a74] mt-[4px]`,
  listItemDropdownIconType: {
    wrapper: `flex items-center py-[8px] pb-[16px] group/li text-[#636a74] hover:text-[#2563eb] cursor-pointer transition-all ease-in duration-100`,
    icon: `w-[24px] h-[24px] mr-[16px]`,
    container: `flex flex-col items-start`,
    title: `font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all ease-in duration-100`,
    subtitle: `text-sm leading-[20px]`,
  },
  listItemDropdownChildrenType: {
    wrapper: `text-sm cursor-pointer leading-[20px] py-[4px] hover:text-[#2563eb] transition-all duration-200 ease-in-out`,
  },
}

export const solutionsDropdownStyles = {
  wrapper: `absolute flex-col -ml-5 p-[24px] w-[300px] hidden group-hover:flex border border-[#636a74]/30 bg-[#f6f8fa] text-[#1f2328] -mt-2 rounded-lg`,
  divider: `bg-[#636a74]/30 w-full h-[1px] my-[16px]`,
  list: {
    title: `font-semibold font-roboto leading-[20px] text-[#1f2328]`,
    unorderedList: `font-roboto text-[#636a74] mt-[4px]`,
    item: `text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out`,
  },
}

export const openSourceDropdownStyles = {
  wrapper: `absolute font-roboto flex-col -ml-5 p-[24px] w-[300px] hidden group-hover:flex border border-[#636a74]/30 bg-[#f6f8fa] text-[#1f2328] -mt-2 rounded-lg`,
  groupLi: `cursor-pointer group/li`,
  mainTitle: `font-semibold leading-[20px] text-[#1f2328] group-hover/li:text-[#2563eb] transition-all duration-200 ease-in-out`,
  subtitleSpan: `text-sm -mt-1 text-[#636a74] block leading-[20px] pt-[6px] group-hover/li:text-[#2563eb] transition-all duration-200 ease-in-out`,
  divider: `bg-[#636a74]/30 w-full h-[1px] my-[16px]`,
  secondaryTitle: `font-semibold leading-[20px] text-[#1f2328] mb-2`,
  unorderedList: `text-[#636a74]`,
  listItem: `text-sm cursor-pointer leading-[20px] py-[6px] hover:text-[#2563eb] transition-all duration-200 ease-in-out`,
}
