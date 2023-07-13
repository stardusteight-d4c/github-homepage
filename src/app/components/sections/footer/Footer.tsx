import { ReactNode } from "react"
import { GitHubNewsletter, Copyright } from "./integrate"
import { footerListItemsData } from "./data"
import { footerStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

interface ListProps {
  title: string
  items: string[]
}

export const Footer = () => {
  return (
    <Wrapper>
      <div className={css.text}>
        <p className={css.listItem}>
          <span className={css.note1}>1</span>The Total Economic Impact™ Of
          GitHub Enterprise Cloud and Advanced Security, a commissioned study
          conducted by Forrester Consulting, 2022. Results are for a composite
          organization based on interviewed customers.
        </p>
        <p className={css.listItem}>
          <span className={css.note23}>2/3</span>
          GitHub, Octoverse 2022 The state of open source software.
        </p>
      </div>
      <div className={css.newsletterContainer}>
        <GitHubNewsletter />
        <div className={css.listContainer}>
          {footerListItemsData.map((item, index) => (
            <List key={index} {...item} />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section className={css.section}>
      <div className={css.container}>{children}</div>
      <Copyright />
    </section>
  )
}

const List = ({ title, items }: ListProps) => {
  return (
    <div className={css.list.container}>
      <h3 className={css.list.title}>{title}</h3>
      <ul className={css.list.listItemContainer}>
        {items.map((item, index) => (
          <li key={index} className={css.list.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
