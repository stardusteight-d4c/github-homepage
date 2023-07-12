export const fixedNavStyles = {
  wrapper: (showNavbar: boolean) => {
    return `${
      showNavbar ? "block" : "hidden"
    } w-screen fixed p-[16px] z-[500] bg-[#0d1117] text-[#f0f0f0] shadow-black/70 shadow-md`
  },
  container: `max-w-7xl mx-auto hidden lg:block`,
  navigation: `font-roboto flex items-center justify-between`,
  unorderedList: `flex items-center gap-x-[25px]`,
  listItem: (
    item: "productivity" | "collaboration" | "security",
    activeItem: false | "productivity" | "collaboration" | "security"
  ) => {
    const handleColor = () => {
      if (item === "productivity") {
        return "#7ee787"
      } else if (item === "collaboration") {
        return "#fe7b72"
      } else if (item === "security") {
        return "#939aff"
      }
    }
    const color = handleColor()
    return `${
      activeItem === item && `text-[${color}]`
    } text-with-underline capitalize leading-[24px] py-[8px] cursor-pointer hover:text-[${color}] before:bg-[${color}] transition-all duration-300 ease-in-out`
  },
}
