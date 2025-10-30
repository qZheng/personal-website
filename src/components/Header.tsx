"use client"

import { useEffect, useState } from "react"

const SECTIONS = ["home", "projects", "about", "contact"] as const
type SectionId = typeof SECTIONS[number]


export default function Header() {
    const [active, setActive] = useState<SectionId>("home")

    useEffect(() => {
        const els = SECTIONS
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]

        if (!els.length) return

        const io = new IntersectionObserver(
            (entries) => {
                const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
                if (visible) setActive((visible.target as HTMLElement).id as SectionId)
            },
        {
            root: null,
            threshold: [0.25, 0.6, 0.9],
            rootMargin: "-40% 0px -40% 0px",
        }
        )
        els.forEach((el) => io.observe(el))
        return () => io.disconnect()
    }, [])

    const item = (href: `#${SectionId}`, label: string, id: SectionId) => {
        const isActive = active === id
        const base =
             "px-3 py-1 rounded-full text-sm transition outline-none focus-visible:ring-2 focus-visible:ring-mint/80"
        const off = "text-mist/85 hover:bg-surface/60"
        const on = "bg-surface/70 text-mist ring-1 ring-ink/40"
        return (
            <a
                href={href}
                aria-current={isActive ? "page" : undefined}
                 className={`${base} ${isActive ? on : off}`}
            >
          {label}
      </a>
    )
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50">
        <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
        <div
            className="
            rounded-full px-4 py-2 border border-ink/50
            bg-surface/50 supports-[backdrop-filter]:bg-evergreen/30
            backdrop-blur shadow-lg ring-1 ring-ink/30
            "
        >
            <a href="#home" className="font-semibold tracking-wide text-sm">Lucas&nbsp;Zheng</a>
        </div>
        <div
            className="
            rounded-full px-4 py-2 border border-ink/50
            bg-surface/50 supports-[backdrop-filter]:bg-evergreen/30
            backdrop-blur shadow-lg ring-1 ring-ink/30
            "
        >

            <nav className="flex items-center gap-2 text-sm">
            {item("#projects", "Projects", "projects")}
            {item("#about", "About", "about")}
            {item("#contact", "Contact", "contact")}
            </nav>
        </div>
        </div>
    </header>
  )
}