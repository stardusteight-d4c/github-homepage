import { Dispatch, SetStateAction } from "react"
import { X } from "../../atoms/icons/X"
import { CaretDown } from "../../atoms/icons/caret-down"
import { MobileDropdown } from "./MobileDropdown"
import { fixedNavMobileStyles as css } from "./styles"

interface Props {
  openDropdown: boolean
  activeItem: false | "productivity" | "collaboration" | "security"
  setOpenDropdown: Dispatch<SetStateAction<boolean>>
  handleScrollView: (id: "productivity" | "collaboration" | "security") => void
}

export const FixedNavMobile = ({
  openDropdown,
  activeItem,
  setOpenDropdown,
  handleScrollView,
}: Props) => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2
          onClick={() => {
            openDropdown && handleScrollView("productivity")
            setOpenDropdown(false)
          }}
          className={css.title(openDropdown, activeItem)}
        >
          {openDropdown ? "productivity" : activeItem}
        </h2>
        <div onClick={() => setOpenDropdown(!openDropdown)}>
          {openDropdown ? (
            <X className={css.icon} />
          ) : (
            <CaretDown className={css.icon} />
          )}
        </div>
      </div>
      {openDropdown && (
        <MobileDropdown
          activeItem={activeItem}
          setOpenDropdown={setOpenDropdown}
          handleScrollView={handleScrollView}
        />
      )}
    </div>
  )
}
