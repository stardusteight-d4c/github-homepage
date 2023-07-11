"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface Props {
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const Overlay = ({ openMenu, setOpenMenu }: Props) => {
  return (
    <>
      {createPortal(
        <div
          onClick={() => {
            const menuToggle = document.querySelector(".menu-toggle")
            const menu = document.querySelector(".menu")
            menuToggle?.classList.toggle("active")
            menu?.classList.toggle("active")
            setOpenMenu(false)
          }}
          className={`${
            openMenu ? "block" : "hidden"
          } overlay-glassmorphism w-screen min-h-screen inset-0 z-[100] overflow-hidden fixed`}
        />,
        document.body
      )}
    </>
  )
}
