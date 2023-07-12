import { CaretRight } from "../../atoms/icons/caretRight"
import { OpenSourceList } from "./OpenSourceList"
import { ProductList } from "./ProductList"
import { SolutionsList } from "./SolutionsList"
import { listItemStyles as css } from "./styles"

interface ListItemProps {
  item: "product" | "solutions" | "open-source" | "pricing"
  activeItem?: false | "product" | "solutions" | "open-source"
  handleActiveItem?: (item: "product" | "solutions" | "open-source") => void
}

export const ListItem = ({
  item,
  activeItem,
  handleActiveItem,
}: ListItemProps) => {
  if (item === "pricing") {
    return (
      <li className={css.listContainer}>
        <span>Pricing</span>
      </li>
    )
  }

  function HandleItem() {
    if (item === "product") {
      return {
        title: "Product",
        component: ProductList,
      }
    } else if (item === "solutions") {
      return {
        title: "Solutions",
        component: SolutionsList,
      }
    } else if (item === "open-source") {
      return {
        title: "Open Source",
        component: OpenSourceList,
      }
    }
  }

  const title = HandleItem()!.title
  const Component = HandleItem()!.component

  return (
    <li>
      <div
        onClick={() => handleActiveItem!(item)}
        className={css.listContainer}
      >
        <span>{title}</span>
        <CaretRight
          className={css.handleCaret(activeItem!, item)}
        />
      </div>
      <Component activeItem={activeItem!} />
    </li>
  )
}
