"use client"

import { Dispatch, SetStateAction, useEffect } from "react"

interface Props {
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const HamburgerMenu = ({ openMenu, setOpenMenu }: Props) => {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle")
    const menu = document.querySelector(".menu")
    menuToggle?.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      menu?.classList.toggle("active")
    })
  }, [])

  return (
    <div onClick={() => setOpenMenu(!openMenu)} className="menu-toggle">
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  )
}
