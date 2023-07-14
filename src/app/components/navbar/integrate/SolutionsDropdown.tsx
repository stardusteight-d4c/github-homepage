"use client"

import { Zoom } from "react-awesome-reveal"
import { solutionsDropdownData } from "./data"
import { solutionsDropdownStyles as css } from "./styles"

interface ListProps {
  title: string
  content: string[]
}

export const SolutionsDropdown = () => {
  return (
    <div className={css.wrapper}>
      <Zoom duration={300}>
        <List title="For" content={solutionsDropdownData.for} />
        <div className={css.divider} />
        <List title="By Solution" content={solutionsDropdownData.bySolution} />
        <div className={css.divider} />
        <List
          title="Case Studies"
          content={solutionsDropdownData.caseStudies}
        />
      </Zoom>
    </div>
  )
}

const List = ({ title, content }: ListProps) => {
  return (
    <div>
      <h2 className={css.list.title}>{title}</h2>
      <ul className={css.list.unorderedList}>
        {content.map((item, index) => (
          <li key={index} className={css.list.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
