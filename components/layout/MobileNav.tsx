import Link from "next/link";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function MobileNav() {
    const pathname = usePathname();
    return (
        <div>
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
                      Life outside of coding
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
        </div>
    )
}