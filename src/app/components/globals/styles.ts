export const textSpanWithUnderlineStyles = {
  wrapper: (styles: string) => {
    return `codespace-span active:scale-95 transition-all ease-in-out duration-300 group flex items-center cursor-pointer font-semibold ${styles}`
  },
  title: `!leading-[38px] select-none text-base ssm:text-[20px] font-inter mr-2`,
  caretContainer: `relative flex items-center z-50`,
  caret: `caret absolute top-[1px]`,
  arrowLine: `line absolute`,
}
