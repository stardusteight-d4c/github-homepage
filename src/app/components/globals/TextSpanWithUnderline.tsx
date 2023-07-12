interface Props {
  title: string
  styles?: string
}

export const TextSpanWithUnderline = ({ title, styles }: Props) => {
  return (
    <span
      className={`codespace-span flex items-center cursor-pointer leading-[40px] font-semibold ${styles}`}
    >
      <span className="underline-animation text-base ssm:text-[20px] font-inter mr-2">
        {title}
      </span>
      <div className="relative z-50 min-w-[16px] max-w-[16px] h-[16px] mt-[2px]">
        <div className="chevron" />
        <span className="line absolute -translate-y-1/2 top-1/2" />
      </div>
    </span>
  )
}
