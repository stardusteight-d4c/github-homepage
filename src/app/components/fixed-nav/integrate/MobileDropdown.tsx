import { Dispatch, SetStateAction } from "react"
import { mobileDropdownStyles as css } from "./styles"
import { CallToAction } from "./CallToAction"

interface Props {
  activeItem: false | "productivity" | "collaboration" | "security"
  setOpenDropdown: Dispatch<SetStateAction<boolean>>
  handleScrollView: (id: "productivity" | "collaboration" | "security") => void
}

export const MobileDropdown = ({
  activeItem,
  setOpenDropdown,
  handleScrollView,
}: Props) => {
  return (
    <div className={css.wrapper}>
      <span
        onClick={() => {
          handleScrollView("collaboration")
          setOpenDropdown(false)
        }}
        className={css.collaborationSpan(activeItem)}
      >
        Collaboration
      </span>
      <span
        onClick={() => {
          handleScrollView("security")
          setOpenDropdown(false)
        }}
        className={css.securitySpan(activeItem)}
      >
        Security
      </span>
      <CallToAction mobile={true} />
    </div>
  )
}
