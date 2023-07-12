import { CaretHorizontal } from "@/app/components/atoms/icons/caret-horizontal"
import { Lock } from "@/app/components/atoms/icons/lock"
import { Plus } from "@/app/components/atoms/icons/plus"
import { Refresh } from "@/app/components/atoms/icons/refresh"
import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.tagIconContainer}>
        <CaretHorizontal className={css.caret("left")} />
        <CaretHorizontal className={css.caret("right")} />
      </div>
      <div className={css.searchContainer}>
        <Lock className={css.defaultIcon} />
        <code className={css.code}>
          <span className={css.desktopText}>
            mona-github-github-g59jpq2w5w7.github.dev
          </span>
          <span className={css.mobileText}>mona-github-github...</span>
        </code>
        <Refresh className={css.defaultIcon} />
      </div>
      <Plus className={css.plusIcon} />
    </div>
  )
}
