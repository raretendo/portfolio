import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function DynamicLabel({
  strings,
  className
}: {
  strings: string[],
  className: string,
}) {
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!elementRef.current) { return }
    const typed = new Typed(elementRef.current, {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 1000,
      backDelay: 2000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [strings])

  return (
    <span className={className} ref={elementRef} />
  )
}