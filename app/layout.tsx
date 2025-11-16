// app/layout.tsx
"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
/* 
export const metadata: Metadata = {
  title: "Lucas Zheng",
  description: "Personal website I guess",
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-slate-900 overflow-hidden">
        {/* corner box */}
        <div className="fixed left-6 top-6 z-20">
          <div className="border border-slate-500 bg-white px-3 py-2">
            <span className="font-semibold text-lg leading-none">LZ</span>
          </div>
        </div>

        {/* main framed container */}
        <div className="fixed inset-6 z-10 border border-slate-300 bg-white overflow-hidden">
          {/* dotted background */}
          <div aria-hidden className="absolute inset-0 bg-dot-grid" />

          {/* content area */}
          <div className="relative h-full w-full overflow-y-auto px-6 py-8 md:px-12 md:py-10">
            <div className="mx-auto flex h-full max-w-3xl gap-2">
              {/* vertical nav */}
              <aside className="hidden md:flex w-30 shrink-0 flex-col justify-between rounded-lg bg-white px-4 py-5">
                <nav className="space-y-8 text-sm text-slate-500">
                  <div className="space-y-3">
                    <Link
                      href="/"
                      className={`block no-underline ${
                        pathname === "/" 
                          ? "font-semibold text-slate-900" 
                          : "text-slate-900 hover:text-slate-800"
                      }`}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/about" 
                      className={`block no-underline ${
                        pathname === "/about" 
                          ? "font-semibold text-slate-900" 
                          : "text-slate-900 hover:text-slate-800"
                      }`}
                    >
                      About
                    </Link>
                    <Link 
                      href="/projects" 
                      className={`block no-underline ${
                        pathname === "/projects" 
                          ? "font-semibold text-slate-900" 
                          : "text-slate-900 hover:text-slate-800"
                      }`}
                    >
                      Projects
                    </Link>
                  </div>

                  <div className="h-px bg-slate-200" />

                  <div className="space-y-3">
                    <a
                      href="#"
                      className="flex items-center gap-3 no-underline hover:text-slate-800"
                    >
                      <span>Github</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 no-underline hover:text-slate-800"
                    >
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 no-underline hover:text-slate-800"
                    >
                      <span>Email</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 no-underline hover:text-slate-800"
                    >
                      <span>Resume</span>
                    </a>
                  </div>
                </nav>
              </aside>
              <main className="flex-1 max-w-3xl rounded-lg bg-white px-8 py-8">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
