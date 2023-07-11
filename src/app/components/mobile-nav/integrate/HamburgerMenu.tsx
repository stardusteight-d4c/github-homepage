import { Dispatch, SetStateAction } from "react"

interface Props {
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const HamburgerMenu = ({ openMenu, setOpenMenu }: Props) => {
  return (
    <div onClick={() => setOpenMenu(!openMenu)} className="menu-toggle">
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  )
}
