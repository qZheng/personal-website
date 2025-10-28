// app/layout.tsx
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
        <div className="mx-auto max-w-5xl px-6">
          <Header />
          <main className="py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          Lucas Zheng
        </Link>
        <nav>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="rounded-full px-3 py-1 font-semibold text-evergreen bg-gradient-to-r from-coral to-amber">Contact Me</a>
        </nav>
      </div>
      <div className="mt-4 h-px w-full bg-ink/60" />
    </header>
  )
}

function Footer() {
  return (
    <footer className="py-12 text-sm text-mist/70">
      <div className="h-px w-full bg-ink/60 mb-8" />
      <p>© {new Date().getFullYear()} Your Name — Built with Next.js & Tailwind</p>
    </footer>
  )
}
