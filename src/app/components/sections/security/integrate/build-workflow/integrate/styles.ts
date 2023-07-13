export const workflowStyles = {
  wrapper: `flex flex-col lg:flex-row items-start justify-center gap-[42px]`,
}

export const buildStyles = {
  wrapper: `relative bg-[#41474e] shadow-black/50 shadow-xl mt-[34px] rounded-md w-full lg:max-w-[400px] flex items-center justify-between py-[16px] px-[24px]`,
  buildSpan: `flex items-center gap-x-2`,
  check: `w-[22px] h-[22px] text-[#3fb950]`,
  timing: `text-sm text-[#969ea7]`,
}

export const buildRunningStyles = {
  wrapper: `w-full lg:w-fit`,
  stepsSpan: `bg-[#41474e] w-fit rounded-t-md px-[24px] pt-[8px] pb-[4px]`,
  stepsContainer: `shadow-black/50 shadow-xl w-full lg:w-fit`,
  buildStep: {
    container: (styles: string) => {
      return `${styles} bg-[#41474e] lg:w-[400px] w-full flex items-center justify-between py-[16px] px-[24px]`
    },
    checkContainer: `flex items-center gap-x-2`,
    check: `w-[22px] h-[22px] text-[#3fb950]`,
    timing: `text-sm text-[#969ea7] hidden md:block`,
  },
}
