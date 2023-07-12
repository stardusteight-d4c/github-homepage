"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { HamburgerMenu } from "./HamburgerMenu"
import { handleActive } from "./functions"
import { ListItem } from "./ListItem"
import { menuStyles as css } from "./styles"
import { Search } from "./Search"
import { SignIn } from "./SignIn"

interface Props {
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const Menu = ({ openMenu, setOpenMenu }: Props) => {
  const [activeItem, setActiveItem] = useState<
    "product" | "solutions" | "open-source" | false
  >(false)
  const listItemProps = {
    activeItem: activeItem,
    handleActiveItem: handleActiveItem,
  }

  function handleActiveItem(
    item: "product" | "solutions" | "open-source"
  ): void {
    if (item === "product") {
      handleActive(activeItem, setActiveItem).execute.handleProduct()
    }
    if (item === "solutions") {
      handleActive(activeItem, setActiveItem).execute.handleSolutions()
    }
    if (item === "open-source") {
      handleActive(activeItem, setActiveItem).execute.handleOpenSource()
    }
  }

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className={css.menuDropdown(openMenu)}>
          <nav className={css.navigation}>
            <ul>
              <ListItem item="product" {...listItemProps} />
              <ListItem item="solutions" {...listItemProps} />
              <ListItem item="open-source" {...listItemProps} />
              <ListItem item="pricing" />
            </ul>
            <div className={css.actionsContainer}>
              <Search />
              <SignIn />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
