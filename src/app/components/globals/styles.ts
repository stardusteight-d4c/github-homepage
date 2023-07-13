export const textSpanWithUnderlineStyles = {
  wrapper: (styles: string) => {
    return `codespace-span flex items-center cursor-pointer font-semibold ${styles}`
  },
  title: `!leading-[38px] text-base ssm:text-[20px] font-inter mr-2`,
  caretContainer: `relative flex items-center z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]`,
  caret: `caret absolute`,
  arrowLine: `line absolute`,
}
