export const textSpanWithUnderlineStyles = {
  wrapper: (styles: string) => {
    return `codespace-span flex items-center cursor-pointer font-semibold ${styles}`
  },
  title: `underline-animation !leading-[38px] text-base ssm:text-[20px] font-inter mr-2`,
  chevronContainer: `relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]`,
  chevron: `chevron`,
  arrowLine: `line absolute -translate-y-1/2 top-1/2`,
}
