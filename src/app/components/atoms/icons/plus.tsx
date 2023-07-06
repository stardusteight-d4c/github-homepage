interface Props {
  className?: string
}

export const Plus = (props: Props) => {
  return (
    <svg
      aria-hidden="true"
      height="24"
      viewBox="0 0 24 24"
      version="1.1"
      width="24"
      fill="currentColor"
      className={props.className}
    >
      <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
    </svg>
  )
}
