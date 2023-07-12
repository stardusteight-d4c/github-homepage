import contextMenu from "@/app/assets/illo-context-menu.png"
import cursor from "@/app/assets/illo-cursor.png"
import ports from "@/app/assets/illo-ports.png"
import { floatingItemsStyles as css } from "./styles"

export const FloatingItems = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <img
          src={contextMenu.src}
          alt="context_menu/png"
          className={css.contextMenu}
        />
        <img src={cursor.src} alt="cursor/png" className={css.cursor} />
        <img src={ports.src} alt="ports/png" className={css.ports} />
      </div>
    </div>
  )
}
