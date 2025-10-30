import Image from "next/image"
import { Github, Linkedin, MapPin, Sparkles } from "lucide-react"

type Props = {
  name: string
  tagline: string
  location: string
  github?: string
  linkedin?: string
  avatarSrc?: string
}

export default function ProfileCard({
  name,
  tagline,
  location,
  github,
  linkedin,
  avatarSrc = "/images/avatar.png",
}: Props) {
  return (
    <section
      className="
        max-w-sm rounded-3xl
        border border-ink/60 bg-surface/50 supports-[backdrop-filter]:bg-evergreen/30
        backdrop-blur shadow-lg ring-1 ring-ink/30
        p-5 md:p-6
        text-mist
      "
      aria-label="Profile"
    >
      {/* top row: avatar + socials */}
      <div className="flex items-start justify-between gap-3">
        <Image
          src={avatarSrc}
          alt={`${name} avatar`}
          width={56}
          height={56}
          className="rounded-md"
          priority
        />

        <div className="flex items-center gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-xl border border-ink/50 bg-deep/70 hover:bg-deep transition"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-xl border border-ink/50 bg-deep/70 hover:bg-deep transition"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* text */}
      <div className="mt-4">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Hi, I&apos;m <span className="text-mist"> {name}</span>.
        </h2>

        <p className="mt-2 text-mist/80 text-lg">{tagline}</p>

        <p className="mt-4 flex items-center gap-2 text-mist/80">
          <MapPin className="h-4 w-4" aria-hidden />
          <span>{location}</span>
        </p>
      </div>
    </section>
  )
}
