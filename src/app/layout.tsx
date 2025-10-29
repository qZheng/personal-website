// app/layout.tsx
import Header from "@/components/Header"
import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Lucas — Portfolio",
  description: "I build thoughtful interfaces for complex problems.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-evergreen text-mist">
        <Header />
        <div className="mx-auto max-w-5xl px-6">
          <main className="pt-28">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

/* function Header() {
  return (
    <header className="sticky top-4 z-50 flex justify-between items-center px-6 pointer-events-none">
      <div className="
        pointer-events-auto rounded-full px-4 py-2
        border border-ink/50 bg-surface/50 supports-[backdrop-filter]:bg-evergreen/30
        backdrop-blur shadow-lg ring-1 ring-ink/30 transition-transform hover:-translate-y-0.5
        "
      >
         <a href="/" className="font-semibold tracking-wide text-sm">Lucas&nbsp;Zheng</a>
      </div>
      <div className="
          pointer-events-auto
          rounded-full px-4 py-2
          border border-ink/50
          bg-surface/50
          supports-[backdrop-filter]:bg-evergreen/30
          backdrop-blur
          shadow-lg
          ring-1 ring-ink/30
          transition-transform hover:-translate-y-0.5
        ">
          <nav className="flex items-center gap-2 text-sm">
            <a href="#projects" className="px-3 py-1 rounded-full hover:bg-surface/60 transition">Projects</a>
            <a href="#about" className="px-3 py-1 rounded-full hover:bg-surface/60 transition">About</a>
            <a href="#contact" className="px-3 py-1 ml-1 rounded-full font-semibold text-evergreen bg-gradient-to-r from-coral to-amber hover:opacity-95 transition">Contact</a>
          </nav>

      </div>
      
    </header>
    
  )
} */

function Footer() {
  return (
    <footer className="py-12 text-sm text-mist/70">
      <div className="h-px w-full bg-ink/60 mb-8" />
      <p>While not tackling LeetCode problems, Lucas is an avid mountain biker, reads sci-fi/fantasy books, and plays guitar. He has a cat named Latte and a sister who was fortunately not named Latte.</p>
      <br></br>
      <p>© {new Date().getFullYear()} Lucas Zheng</p>
    </footer>
  )
}
