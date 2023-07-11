import { ReactNode } from "react"
import { productDropdownData } from "./data"
import { productDropdownStyles as css } from "./styles"

interface IconProps {
  className?: string
}

interface ListItemDropdownProps {
  type: "icon" | "children"
  icon?: React.FC<IconProps>
  title?: string
  subtitle?: string
  children?: ReactNode
}

export const ProductDropdown = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.unorderedList}>
        {[
          productDropdownData.actions,
          productDropdownData.packages,
          productDropdownData.security,
          productDropdownData.codespaces,
          productDropdownData.copilot,
          productDropdownData.codeReview,
          productDropdownData.issues,
          productDropdownData.discussions,
        ].map((item, index) => (
          <ListItemDropdown type="icon" key={index} {...item} />
        ))}
      </ul>
      <div className={css.divider} />
      <div className={css.secondListWrapper}>
        <h2 className={css.secondListTitle}>Explore</h2>
        <ul className={css.secondUnorderedList}>
          {productDropdownData.list.map((item, index) => (
            <ListItemDropdown type="children" key={index} children={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

const ListItemDropdown = ({
  type,
  icon,
  title,
  subtitle,
  children,
}: ListItemDropdownProps) => {
  if (type === "icon") {
    const Icon = icon!
    return (
      <li className={css.listItemDropdownIconType.wrapper}>
        <Icon className={css.listItemDropdownIconType.icon} />
        <div className={css.listItemDropdownIconType.container}>
          <h2 className={css.listItemDropdownIconType.title}>{title}</h2>
          <span className={css.listItemDropdownIconType.subtitle}>
            {subtitle}
          </span>
        </div>
      </li>
    )
  }

  if (type === "children") {
    return (
      <li className={css.listItemDropdownChildrenType.wrapper}>{children}</li>
    )
  }
}
