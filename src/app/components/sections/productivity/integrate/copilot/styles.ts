export const copilotExamplesStyles = {
  wrapper: `mdd:max-w-[450px] lg:max-w-[600px] mx-auto md:ml-auto rounded-xl h-fit w-full px-[4px] md:px-0 pb-16 md:pb-0`,
  container: `mdd:max-w-[450px] lg:max-w-[600px] border border-[#30363d] rounded-xl w-full`,
  scrollContainer: `hide-scrollbar h-fit bg-[#161b22] overflow-x-scroll relative z-0 rounded-t-xl pt-[8px] px-[8px]`,
  unorderedList: `flex items-center`,
  exampleContainer: `h-full w-full rounded-b-xl -mt-[1px] z-0 pl-[32px] p-[16px] bg-[#0d1117] relative`,
  listItem: (
    activeItem: "python" | "javascript" | "go",
    item: "python" | "javascript" | "go"
  ) => {
    return `${
      activeItem === item
        ? "bg-[#0d1117] text-[#f0f0f0]"
        : "text-[#7d8590] bg-transparent"
    } py-[8px] px-[16px] relative z-[100] cursor-pointer flex items-center gap-x-2 text-sm font-roboto rounded-t-md`
  },
}
