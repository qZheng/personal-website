import Image from "next/image";
import MeCard from "@/components/MeCard"
import Parallax from "@/components/Parallax"
export default function Home() {
  return (
    <>
    {/* Intro */}
      <section id="home" /* className="py-16" */> 
        <Parallax distance={500}>
          <div className="mx-auto max-w-5xl px-6 min-h-screen pt-24 md:pt-28 pb-14">

              <MeCard
                name="Lucas"
                tagline="Proud cat owner"
                location="Oakville, Ontario, Canada"
                github="https://github.com/qZheng"
                linkedin="https://www.linkedin.com/in/lucas-q-zheng"
                // extraLink={{ href: "https://your.site", label: "Portfolio" }}
                avatarSrc="/images/cat.png"
              />
            </div>
          </Parallax>
      </section>
    {/* Projects */}
      <section id="projects" className="py-20 scroll-mt-24 mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-3 text-mist/80">Some cool projects</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Project
            title="test 1"
            summary="this is a test summary"
            stack={["Next.js", "Tailwind CSS", "Vercel"]}
          />
          <Project
            title="test 1"
            summary="this is a test summary"
            stack={["Next.js", "Tailwind CSS", "Vercel"]}
          />
          <Project
            title="test 1"
            summary="this is a test summary"
            stack={["Next.js", "Tailwind CSS", "Vercel"]}
          />
          <Project
            title="test 1"
            summary="this is a test summary"
            stack={["Next.js", "Tailwind CSS", "Vercel"]}
          />

        </div>


      </section>
    {/* About me */}
      <section id="about" className="py-20 scroll-mt-24 mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-3 max-w-prose text-mist/80">
          I'm a computer science undergraduate at McMaster University.
        </p>
      </section>
    {/* Contact */}
      <section id="contact" className="py-20 scroll-mt-24 mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="mt-3 max-w-prose text-mist/80">
          Email me at <a className="underline" href="mailto:hello@lucaszheng.net">hello@lucaszheng.net</a>
          <br></br>
          Text me at <a className="underline">+1 289-707-0012</a>
        </p>
      </section>
    </>
  )
}


function Project({
  title, summary, stack,
}: { title:string; summary:string; stack:string[] }) {
  return (
    <article className="rounded-2xl border border-ink/60 bg-surface/40 p-6 hover:bg-surface/60 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-mist/80">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map(s => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded-full border border-ink/50 bg-deep text-mist/90"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  )
}
