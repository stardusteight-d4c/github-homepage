import { openSourceDropdownStyles as css } from "./styles"

export const OpenSourceDropdown = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.groupLi}>
        <h2 className={css.mainTitle}>GitHub Sponsors</h2>
        <span className={css.subtitleSpan}>Fund open source developers</span>
      </div>
      <div className={css.divider} />
      <div className={css.groupLi}>
        <h2 className={css.mainTitle}>The ReadME Project</h2>
        <span className={css.subtitleSpan}>GitHub community articles</span>
      </div>
      <div className={css.divider} />
      <h2 className={css.secondaryTitle}>Repositories</h2>
      <ul className={css.unorderedList}>
        <li className={css.listItem}>Topics</li>
        <li className={css.listItem}>Trending</li>
        <li className={css.listItem}>Collections</li>
      </ul>
    </div>
  )
}
