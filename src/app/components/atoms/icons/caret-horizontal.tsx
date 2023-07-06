interface Props {
  className?: string
}

export const CaretHorizontal = (props: Props) => {
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
      <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
    </svg>
  )
}
