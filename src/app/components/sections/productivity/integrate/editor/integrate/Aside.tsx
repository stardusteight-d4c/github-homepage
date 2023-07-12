import { Menu } from "@/app/components/atoms/icons/menu"
import { asideStyles as css } from "./styles"

export const Aside = () => {
  return (
    <div className={css.wrapper}>
      <Menu className={css.icon} />
    </div>
  )
}
