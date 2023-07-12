import { tabsStyles as css } from "./styles"

export const Tabs = () => {
  return (
    <ul className={css.wrapper}>
      <li className={css.activeTab}>index.html</li>
      <li className={css.inativeTab}>script.js</li>
      <li className={css.inativeTab}>package.json</li>
    </ul>
  )
}
