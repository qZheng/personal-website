"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiLocationMarker } from "react-icons/hi";
import TypingText from "../components/ui/TypingText";



export default function HomePage() {
  const pathname = usePathname();
  return (
    <div className="max-w-3xl space-y-[1.65rem]">
      <img
        src="/images/IMG_5724.jpg"
        alt="Lucas Zheng"
        className="mr-2 w-28 h-28 md:w-33 md:h-33 object-cover rounded-lg shadow-md float-right ml-3 md:ml-6 mb-2"
      />
      <div className="space-y-0">
        <h1 className="text-4xl md:text-3xl font-semibold leading-tight">Lucas Zheng</h1>
        <p className="mt-0 flex items-center gap-1 text-sm text-slate-600">
          <HiLocationMarker className="h-4 w-4" />
          <TypingText text="Burlington, ON" speed={110}></TypingText>
{/*           <span>Burlington, ON</span>
          <span className="caret"></span> */}
        </p>
      </div>

      <p className="text-slate-700">
        An incoming 3nd year computer science student @ <a href="https://www.mcmaster.ca/" target="_blank">McMaster University.
        </a> 
        {/* todo add random photo on hover */}
        &nbsp;This summer, I'm interning as a Software Developer at <a href="https://dishoncnc.com" target="_blank"> Dishon Limited.</a>
      </p>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>
          <span className="font-semibold"><Link 
                      href="/projects" 
                      className={`${
                        pathname === "/projects" 
                          ? "font-semibold text-slate-700" 
                          : "text-slate-700 hover:text-slate-600"
                      }`}
                    >See my projects.
                    </Link></span> I'm interested in full-stack development and data science.
        </li>
        <li>
          <span className="font-semibold"><a href="/Lucas_Zheng_Resume.pdf" target="_blank">View my resume.</a></span> Currently searching for Fall 2026 internships!
        </li>
      </ul>
      <p>
        While not tackling LeetCode problems, I'm probably tackling the local trails on my mountain bike. I also love reading sci-fi/fantasy books, play the guitar, am an amateur <Link 
                      href="/about" 
                      className={`${
                        pathname === "/about" 
                          ? "font-semibold text-slate-700" 
                          : "text-slate-700 hover:text-slate-600"
                      }`}
                    >photographer, 
                    </Link> have a cat named Latte, and a sister who was fortunately not named Latte.
      </p>


      <p className="text-slate-700">
        If you would like to talk to me about anything (even random things!) reach me at:{" "}
        <a href="mailto:lucas@qzheng.ca">lucas@qzheng.ca</a>.
      </p>
    </div>
  );
}
