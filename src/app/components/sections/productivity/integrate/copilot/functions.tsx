import { Go } from "@/app/components/atoms/icons/go"
import { JavaScript } from "@/app/components/atoms/icons/javascript"
import { Python } from "@/app/components/atoms/icons/python"

export function handleTab(item: "python" | "javascript" | "go") {
  if (item === "python") {
    return (
      <>
        <Python className="-mt-[1px]" /> draw_scatterplot.py
      </>
    )
  } else if (item === "javascript") {
    return (
      <>
        <JavaScript className="-mt-[1px]" /> time.js
      </>
    )
  } else if (item === "go") {
    return (
      <>
        <Go className="w-[24px] h-[24px] -mt-[1px]" /> memoize.go
      </>
    )
  }
}
