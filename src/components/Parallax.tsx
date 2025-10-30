/* 

"use client"

import { useEffect, useRef } from "react"

type Props = {
  bgSrc?: string
  children: React.ReactNode
  className?: string
}

export default function Parallax({ bgSrc = "/images/trees.svg", children, className = "" }: Props) {
  const wrapRef = useRef<HTMLElement | null>(null)
  const ticking = useRef(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const update = () => {
      // hero rect relative to viewport
      const rect = el.getBoundingClientRect()
      const total = Math.max(rect.height, 1) // avoid /0
      // progress: 0 at hero top aligned with viewport top; ~1 by the time you reach its end
      const p = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + total)))
      // write to CSS var (cheap)
      el.style.setProperty("--p", String(p))
      ticking.current = false
    }

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <section
      ref={wrapRef}
      // relative for layers; overflow hidden so trees slide under the content edge
      className={`relative overflow-hidden py-16 md:py-20 ${className}`}
      style={{
        // default value for safety
        // @ts-ignore – custom property is OK
        ["--p" as any]: 0,
      }}
    >
      {/* Background trees layer *//*}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          [mask-image:linear-gradient(to_bottom,black_65%,transparent)]
        "
        style={{
          backgroundImage: `url(${bgSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          transform: "translateY(calc(var(--p) * -120px))",
          transition: "transform 60ms linear",
          opacity: 0.35, // subtle; adjust to taste
          filter: "saturate(0.9) contrast(1.05)",
        }}
      />

      {/* Optional dark overlay to blend with evergreen *//*}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.12) 100%)",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
*/
"use client"

import { useEffect, useRef } from "react"

type Props = {
  children: React.ReactNode
  bgSrc?: string
  className?: string
  distance?: number // how far the trees move (px)
}

export default function Parallax({
  children,
  bgSrc = "/images/trees.svg",
  className = "",
  distance = 100, // tweak to taste
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const ticking = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = Math.max(rect.height, 1)

      // progress (0 → 1) as you scroll through the hero
      // 0 at hero top entering viewport; ~1 by the time you reach its end
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh + total)))

      el.style.setProperty("--p", String(p))
      el.style.setProperty("--d", `${distance}px`)
      ticking.current = false
    }

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", update)
    }
  }, [distance])

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden min-h-screen ${className}`}
      // defaults; JS will update these
      style={{ ["--p" as any]: 0, ["--d" as any]: `${distance}px` }}
    >
      {/* Full-bleed background that FILLS the hero */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 parallax-bg
          [mask-image:linear-gradient(to_bottom,black_85%,rgba(0,0,0,0.8)_92%,transparent)]
        "
        style={{
          backgroundImage: `url(${bgSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 90%",
          // parallax: move up as p increases
          transform: "translateY(calc(var(--p) * var(--d) * -1))",
          willChange: "transform",
          opacity: 0.30,
          filter: "saturate(0.9) contrast(1.03)",
          transition: "transform 60ms linear",
        }}
      />

      {/* soft vignette for depth (optional) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 70% at 50% 0%, rgba(0,0,0,0.18), transparent 55%)",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
