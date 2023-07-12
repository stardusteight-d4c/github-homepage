import { productDropdownData } from "../../navbar/integrate/data"
import { productListStyles as css } from "./styles"

interface Props {
  activeItem: false | "product" | "solutions" | "open-source"
}

interface IconProps {
  className?: string
}

interface ListItemProps {
  title: string
  subtitle: string
  icon: React.FC<IconProps>
}

export const ProductList = ({ activeItem }: Props) => {
  return (
    <ul className={css.wrapper(activeItem)}>
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
        <ListItem key={index} {...item} />
      ))}
      <div className={css.secondaryListContainer}>
        <h2 className={css.title}>Explore</h2>
        <ul className={css.unorderedList}>
          {productDropdownData.list.map((item, index) => (
            <li key={index} className={css.secondaryListItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </ul>
  )
}

export const ListItem = ({ title, subtitle, icon: Icon }: ListItemProps) => {
  return (
    <li className={css.listItem.container}>
      <Icon className={css.listItem.icon} />
      <div className={css.listItem.headingsContainer}>
        <h2 className={css.listItem.title}>{title}</h2>
        <span className={css.listItem.subtitle}>{subtitle}</span>
      </div>
    </li>
  )
}
