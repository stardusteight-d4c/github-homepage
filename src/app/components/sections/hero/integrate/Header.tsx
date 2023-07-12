import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <div>
      <h1 className={css.heading1}>
        Let’s build <br className={css.breakLine} /> from here
      </h1>
      <h2 className={css.heading2}>
        Harnessed for productivity. Designed for collaboration. Celebrated for
        built-in security. Welcome to the platform developers love.
      </h2>
    </div>
  )
}
