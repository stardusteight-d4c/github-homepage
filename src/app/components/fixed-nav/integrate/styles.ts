export const callToActionStyles = {
  wrapper: (mobile: boolean) => {
    return mobile
      ? `flex flex-col gap-y-[8px] mt-[22px]`
      : `flex items-center gap-x-[24px]`
  },
  enterpriseTrialButton: `trial-span group w-full md:w-[487px] lg:w-fit span active:scale-95 transition-all ease-in-out duration-300 relative flex items-center justify-center py-[12px] px-[24px] rounded-md bg-transparent border-[1px] hover:ring-[2px] hover:ring-[#f6f8fa] border-[#ffffff2e] font-semibold`,
  span: `pr-[4px] tracking-[0.03em] font-roboto font-medium`,
  caretContainer: `relative z-50 min-w-[16px] max-w-[16px] h-[16px]`,
  signUpButton: `py-[12px] active:scale-95 transition-all w-full md:w-fit px-[24px] bg-[#f0f0f0] text-[#0d1117] rounded-md text-base font-semibold font-inter flex items-center justify-center`,
}

export const fixedNavMobileStyles = {
  wrapper: `font-roboto flex flex-col lg:hidden`,
  container: `flex items-center justify-between`,
  title: (
    openDropdown: boolean,
    activeItem: false | "productivity" | "collaboration" | "security"
  ) => {
    function handleActiveItemColorMobileNav() {
      if (!openDropdown) {
        if (activeItem === "productivity") {
          return "text-[#7ee787]"
        }
        if (activeItem === "collaboration") {
          return "text-[#fe7b72]"
        }
        if (activeItem === "security") {
          return "text-[#939aff]"
        }
      }
      if (openDropdown && activeItem === "productivity") {
        return "text-[#7ee787]"
      }
      return "text-[#f0f0f0]"
    }
    return `${handleActiveItemColorMobileNav()} cursor-pointer capitalize`
  },
  icon: `w-[20px] text-[#7d8590] cursor-pointer`,
}

export const mobileDropdownStyles = {
  wrapper: `flex flex-col`,
  collaborationSpan: (
    activeItem: false | "productivity" | "collaboration" | "security"
  ) => {
    return `${
      activeItem === "collaboration" && "text-[#fe7b72]"
    } block mt-[18px] mb-[22px] cursor-pointer`
  },
  securitySpan: (
    activeItem: false | "productivity" | "collaboration" | "security"
  ) => {
    return `${
      activeItem === "security" && "text-[#939aff]"
    } block cursor-pointer`
  },
}
