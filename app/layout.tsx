// app/layout.tsx
"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";

import initials_icon_black from "./images/initials_icon_black.svg";

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
      <head>
        <link rel="icon" href="/images/initials_icon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white text-slate-700 overflow-hidden">
        {/* corner box */}
        <div className="fixed left-6 top-6 z-20">
          <div className="border border-slate-500 bg-white">
            <a href="/"><img src="/images/initials_icon.svg" alt="LZ" className="w-11 h-11 block" /></a>
          </div>
        </div>

        {/* main framed container */}
        <div className="fixed inset-6 z-10 border border-slate-300 bg-white overflow-hidden flex flex-col">
          {/* dotted background */}
          <div aria-hidden className="absolute inset-0 bg-dot-grid pointer-events-none" />

          {/* content area */}
          <div className="relative flex-1 w-full overflow-y-auto px-4 py-6 md:px-12 md:py-10">
            <div className="mx-auto flex flex-col md:flex-row max-w-[50rem] gap-2">
              {/* vertical nav */}
              <aside className="hidden md:flex w-30 shrink-0 flex-col justify-between rounded-lg bg-white px-4 py-5">
                <nav className="space-y-8 text-sm text-slate-500">
                  <div className="space-y-3">
                    <Link
                      href="/"
                      className={`block no-underline ${
                        pathname === "/" 
                          ? "font-semibold text-slate-700" 
                          : "text-slate-700 hover:text-slate-600"
                      }`}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/projects" 
                      className={`block no-underline ${
                        pathname === "/projects" 
                          ? "font-semibold text-slate-700" 
                          : "text-slate-700 hover:text-slate-600"
                      }`}
                    >
                      Projects
                    </Link>
                    <Link 
                      href="/about" 
                      className={`block no-underline ${
                        pathname === "/about" 
                          ? "font-semibold text-slate-700" 
                          : "text-slate-700 hover:text-slate-600"
                      }`}
                    >
                      About
                    </Link>

                  </div>

                  <div className="h-px bg-slate-200" />

                  <div className="space-y-3">
                    <a
                      href="https://www.github.com/qZheng"
                      target="_blank"
                      className="flex items-center gap-3 no-underline hover:text-slate-600"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>Github</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lucas-q-zheng/"
                      target="_blank"
                      className="flex items-center gap-3 no-underline hover:text-slate-600"
                    >
                      <FaLinkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="mailto:hello@lucaszheng.net"
                      className="flex items-center gap-3 no-underline hover:text-slate-600"
                    >
                      <HiOutlineMail className="h-4 w-4" />
                      <span>Email</span>
                    </a>
                    <a
                      href="/Lucas_Zheng_Resume.pdf" 
                      target="_blank"
                      className="flex items-center gap-3 no-underline hover:text-slate-600"
                    >
                      <HiOutlineDocumentText className="h-4 w-4" />
                      <span>Resume</span>
                    </a>
                  </div>
                </nav>
              </aside>
              <main className="flex-1 max-w-4xl rounded-lg bg-white px-8 py-8">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
