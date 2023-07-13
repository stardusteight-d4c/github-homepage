export const backgroundImageStyles = {
  image: `lg:min-w-[4377px] z-0 max-w-[3077px] lg:max-w-[4377px] lg:min-h-[2043px] max-h-[2043px] absolute top-0 -right-[1250px] md:-right-[1550px] lg:-right-[1350px] lgg:-right-[1150px] lx:-right-[1050px]`,
}

export const absoluteItemsStyles = {
  wrapper: `absolute w-full pointer-events-none left-6 md:left-[38px] -top-[45px] md:top-[80px] lg:top-[129px]`,
  container: `relative h-full w-[300px] -ml-1 md:-ml-0 md:w-[440px]`,
  heroLine: `-ml-1 md:ml-[10px] xl:ml-[3px] w-[440px] h-[630px]`,
  sectionIconContainer: `absolute bottom-[38px] md:bottom-[-58px] w-fit flex items-center justify-center my-[10px] -left-[19px] md:left-[5px] xl:left-[-8px]`,
  blurEffect: `blur-effect bg-[#773fc6] w-[48px] h-[48px] rounded-full animate-pulse`,
  icon: `absolute w-[28px] h-[28px] text-[#f6f8fa] z-[50]`,
  branchLine: `absolute top-[100%] md:left-[23px] w-[2.5px] md:w-[4px] h-[180vh] bg-gradient-to-b from-[#733fc8] via-[#48eb5b] to-[#55d163]`,
  drone: `drone w-[35vw] xl:w-[320px] xl:h-[208px] absolute top-[240px] md:top-[15px] right-9 md:right-16 lx:right-12`,
}

export const copilotSpanStyles = {
  wrapper: `copilot-span span w-fit hover:border-[#f6f8fa] mb-[18px] md:mb-[30px] rounded-full transition-all ease-in-out duration-300 flex items-center py-[7px] md:py-[14px] px-[10px] md:px-[20px]`,
  copilotIconContainer: `bg-[#f6f8fa] rounded-full w-fit h-fit mr-[16px]`,
  icon: `w-[38px] md:w-[40px] my-2 mx-[1px] text-[#0c1015]`,
  textContent: `flex flex-col font-roboto mr-[16px] pr-[4px]`,
  main: `text-sm md:text-base font-medium tracking-[0.03em] leading-5`,
  secondary: `text-sm md:text-base text-[#6e7681] font-light md:whitespace-nowrap`,
  caretContainer: `relative z-50 min-w-[16px] max-w-[16px] h-[16px]`,
  caret: `caret`,
  lineArrow: `line absolute -translate-y-1/2 top-1/2`,
}

export const headerStyles = {
  heading1: `font-semibold w-fit hypersm:w-screen smsm:w-fit font-jet-brains mb-[8px] md:mb-[24px] text-[48px] md:text-[80px] md:tracking-[-6px] leading-[50px] md:leading-[80px]`,
  breakLine: `lg:hidden`,
  heading2: `text-[24px] md:text-[32px] font-normal font-inter max-w-[500px] md:max-w-[960px] mb-[18px] md:mb-[38px] text-[#7d8590] tracking-[-0,01em] leading-[30px] md:leading-[44px]`,
}

export const formStyles = {
  wrapper: `flex flex-col lg:flex-row items-start lg:items-center`,
  form: `w-full lg:w-fit`,
  container: `flex flex-col gap-y-5 md:flex-row items-center justify-center w-full md:w-fit`,
  inputContainer: `rounded-l-md overflow-hidden w-full md:w-fit`,
  input: `placeholder:text-[#535a61] outline-none w-full md:w-[296px] border-[2px] border-[#f6f8fa] transition-all duration-100 focus:border-blue-600 text-[#0d1117]/90 bg-[#f6f8fa] rounded-md md:rounded-r-none rounded-l-md py-[10px] px-[12px] md:px-[24px]`,
  signUpButton: `custom-button py-[12px] w-full md:w-fit px-[24px] bg-[#773fc6] rounded-md md:rounded-l-none rounded-r-md text-base font-semibold font-inter flex items-center justify-center`,
  divider: `h-[1px] lg:h-[48px] w-full md:w-[487px] lg:w-[1px] border-t lg:border-l border-[#ffffff2e] my-4 lg:my-0 lg:mx-4`,
  enterpriseTrial: {
    container: `trial-span w-full md:w-[487px] lg:w-fit span transition-all ease-in-out duration-300 relative flex items-center justify-center py-[12px] px-[24px] rounded-md bg-transparent border-[1px] hover:border-[#f6f8fa] border-[#ffffff2e] font-semibold`,
    span: `pr-[4px] tracking-[0.03em] font-roboto font-medium`,
    caretContainer: `relative z-50 min-w-[16px] max-w-[16px] h-[16px]`,
    caret: `caret ml-2 mt-[1px]`,
    arrowLine: `line absolute -translate-y-1/2 top-1/2 mt-[1px]`,
  },
}

export const organizationsStyles = {
  wrapper: `mt-[80px] text-[#7d8590] font-medium w-full`,
  container: `transition-all ease-in-out duration-300 mt-[28px] grid gap-8 grid-cols-2 smm:grid-cols-3 lg:flex items-center md:justify-between w-full`,
  image: (index: number) => {
    return `${
      index >= 4 ? "h-[32px]" : "h-[44px]"
    } hover:brightness-200 col-span-1 cursor-pointer select-none`
  },
}
