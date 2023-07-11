interface Props {
  className?: string
}

export const Check = (props: Props) => {
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
      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
    </svg>
  )
}