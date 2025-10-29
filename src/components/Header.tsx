"use client"

import { useEffect, useRef, useState } from "react"

export default function Header() {
    const [visible, setVisible] = useState(true)
    const lastY = useRef(0)
    const scrolledPast = useRef(false)

    useEffect(() => {
        const projectsEl = document.getElementById("projects")
        if (!projectsEl) return

        const io = new IntersectionObserver(
            (entries) => {
                scrolledPast.current = entries[0].isIntersecting
                if (!scrolledPast.current) setVisible(true)
            }, {root:null, threshold:0}
        )

        io.observe(projectsEl)

        const onScroll = () => {
            const y = window.scrollY
            const goingDown = y > lastY.current
            const atTop = y < 24

            if (atTop) setVisible(true)
            else if (goingDown && scrolledPast.current) setVisible(false)
            else if (!goingDown) setVisible(true)
            
            lastY.current = y
        }

        onScroll()
        window.addEventListener("scroll", onScroll, {passive:true})
        return () => {
            window.removeEventListener("scroll", onScroll)
            io.disconnect()
        }
    }, [])
  return (
    <header
      className={[
        "sticky top-4 z-50 flex justify-between items-center px-6 pointer-events-none",
        "transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
      ].join(" ")}
    >
      <div
        className="
          pointer-events-auto rounded-full px-4 py-2
          border border-ink/50 bg-surface/50 supports-[backdrop-filter]:bg-evergreen/30
          backdrop-blur shadow-lg ring-1 ring-ink/30 transition-transform hover:-translate-y-0.5
        "
      >
        <a href="/" className="font-semibold tracking-wide text-sm">Lucas&nbsp;Zheng</a>
      </div>

      <div
        className="
          pointer-events-auto
          rounded-full px-4 py-2
          border border-ink/50
          bg-surface/50
          supports-[backdrop-filter]:bg-evergreen/30
          backdrop-blur
          shadow-lg
          ring-1 ring-ink/30
          transition-transform hover:-translate-y-0.5
        "
      >
        <nav className="flex items-center gap-2 text-sm">
          <a href="#projects" className="px-3 py-1 rounded-full hover:bg-surface/60 transition">Projects</a>
          <a href="#about" className="px-3 py-1 rounded-full hover:bg-surface/60 transition">About</a>
          <a href="#contact" className="px-3 py-1 ml-1 rounded-full font-semibold text-evergreen bg-gradient-to-r from-coral to-amber hover:opacity-95 transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}