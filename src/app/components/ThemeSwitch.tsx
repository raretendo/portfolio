"use client"

import { useEffect, useState } from "react"
import { IoMoon, IoSunny } from "react-icons/io5"

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(isDarkPreferred())

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  return (
    <button
      className="w-14 h-[28px] box-border p-1 absolute bg-foreground right-10 top-10 rounded-full"
      onClick={() => { setIsDark(!isDark) }}
    >
      <div className="relative w-full h-full">
        <IoSunny className={`${isDark ? "hidden" : "inline-block"} absolute left-0 top-0 h-[22px] w-[22px] text-background`} />
        <IoMoon className={`${!isDark ? "hidden" : "inline-block"} absolute right-0 top-0 h-[22px] w-[22px] text-background`} />
      </div>
    </button>
  )
}

function isDarkPreferred() {
  if (typeof window !== "undefined") {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return true
}