"use client"

import { Dispatch, SetStateAction } from "react"
import { createPortal } from "react-dom"
import { overlayStyles as css } from "./styles"

interface Props {
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const Overlay = ({ openMenu, setOpenMenu }: Props) => {
  function handleCloseMenu(): void {
    const menuToggle = document.querySelector(".menu-toggle")
    const menu = document.querySelector(".menu")
    menuToggle?.classList.toggle("active")
    menu?.classList.toggle("active")
    setOpenMenu(false)
  }

  return (
    <>
      {createPortal(
        <div onClick={handleCloseMenu} className={css.overlay(openMenu)} />,
        document.body
      )}
    </>
  )
}
