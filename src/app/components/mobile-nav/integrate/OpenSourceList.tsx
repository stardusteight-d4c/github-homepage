import { openSourceListStyles as css } from "./styles"

interface Props {
  activeItem: false | "product" | "solutions" | "open-source"
}

export const OpenSourceList = ({ activeItem }: Props) => {
  return (
    <ul className={css.wrapper(activeItem)}>
      <li className={css.liGroup("group/li1")}>
        <h2 className={css.mainListTitle("li1")}>GitHub Sponsors</h2>
        <span className={css.mainListSubtitle("li1")}>
          Fund open source developers
        </span>
      </li>
      <div className={css.divider} />
      <li className={css.liGroup("group/li2")}>
        <h2 className={css.mainListTitle("li2")}>The ReadME Project</h2>
        <span className={css.mainListSubtitle("li2")}>
          GitHub community articles
        </span>
      </li>
      <div className={css.divider} />
      <li>
        <h2 className={css.secondaryTitle}>Repositories</h2>
        <ul className={css.unorderedList}>
          {["Topics", "Trending", "Collections"].map((item, index) => (
            <li key={index} className={css.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}
