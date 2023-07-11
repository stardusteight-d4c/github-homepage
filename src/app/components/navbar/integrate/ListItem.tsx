import { ReactNode } from "react"
import caretDown from "@/app/assets/caret-down.svg"
import { listItemStyles as css } from "./styles"

interface Props {
  type: "dropdown" | "children"
  title?: string
  dropdown?: React.ComponentType
  children?: ReactNode
  styles?: string
}

export const ListItem = ({
  title,
  type,
  dropdown,
  children,
  styles,
}: Props) => {
  if (type === "dropdown") {
    const Dropdown = dropdown!
    return (
      <li className={css.dropdownType.wrapper}>
        <div className={css.dropdownType.container}>
          <span className={css.dropdownType.title}>{title}</span>
          <img
            src={caretDown.src}
            alt="caret_down/svg"
            className={css.dropdownType.caretDown}
          />
        </div>
        <Dropdown />
      </li>
    )
  }

  if (type === "children") {
    return (
      <li className={`${styles} ${css.childrenType.wrapper}`}>{children}</li>
    )
  }
}
