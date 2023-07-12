"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { PythonExample } from "./PythonExample"
import { JavascriptExample } from "./JavascriptExample"
import { GoExample } from "./GoExample"
import { handleTab } from "./functions"
import { copilotExamplesStyles as css } from "./styles"

interface ListItemProps {
  item: "python" | "javascript" | "go"
  setActiveItem: Dispatch<SetStateAction<"python" | "javascript" | "go">>
  activeItem: "python" | "javascript" | "go"
}

export const CopilotExamples = () => {
  const [activeItem, setActiveItem] = useState<"python" | "javascript" | "go">(
    "python"
  )

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.scrollContainer}>
          <ul className={css.unorderedList}>
            {["python", "javascript", "go"].map((item: any, index) => (
              <ListItem
                key={index}
                item={item}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            ))}
          </ul>
        </div>
        <div className={css.exampleContainer}>
          <PythonExample activeItem={activeItem} />
          <JavascriptExample activeItem={activeItem} />
          <GoExample activeItem={activeItem} />
        </div>
      </div>
    </div>
  )
}

export const ListItem = ({
  item,
  activeItem,
  setActiveItem,
}: ListItemProps) => {
  return (
    <li
      onClick={() => setActiveItem(item)}
      className={css.listItem(activeItem, item)}
    >
      {handleTab(item)}
    </li>
  )
}
