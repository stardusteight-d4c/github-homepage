import { solutionsDropdownData } from "../../navbar/integrate/data"
import { solutionsListStyles as css } from "./styles"

interface Props {
  activeItem: false | "product" | "solutions" | "open-source"
}

interface ListProps {
  title: string
  content: string[]
}

export const SolutionsList = ({ activeItem }: Props) => {
  return (
    <ul className={css.wrapper(activeItem)}>
      <List title="For" content={solutionsDropdownData.for} />
      <div className={css.divider} />
      <List title="By Solution" content={solutionsDropdownData.bySolution} />
      <div className={css.divider} />
      <List title="Case Studies" content={solutionsDropdownData.caseStudies} />
    </ul>
  )
}

const List = ({ title, content }: ListProps) => {
  return (
    <li>
      <h2 className={css.list.title}>{title}</h2>
      <ul className={css.list.unorderedList}>
        {content.map((item, index) => (
          <li key={index} className={css.list.item}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  )
}
