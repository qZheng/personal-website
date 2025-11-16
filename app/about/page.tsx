export default function AboutPage() {
  return (
    <div id="about" className="max-w-3xl space-y-8">
      <p className="font-mono text-sm tracking-wide text-slate-500">
        /ABOUT.md
      </p>

      <h1 className="text-4xl md:text-3xl font-semibold leading-tight">
        About Me
      </h1>

      <p className="text-slate-700">
        About You is a great song by the 1975. You should go take a listen!
      </p>

      <h2 className="text-2xl font-semibold leading-tight">Interests</h2>

      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>
          <span className="font-semibold">Yeti water bottles.</span> Well I have one of these on my desk. It's a great water bottle and survived a few too many falls that shouldn't have ever happened.
        </li>
        <li>
          <span className="font-semibold">Casio F91W watches.</span> This is a watch I have on my wrist right now. It's a great watch, and also great for placeholder text inspo.
        </li>
        <li>
          <span className="font-semibold">M4 Pro Macbook Pro.</span> This is just a laptop I have sitting on my desk and I need placeholder text.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold leading-tight">Tech Stack</h2>

      <p className="text-slate-700">
        Something script, Python, Pandas, Bears, Polar Bears
      </p>

      <p className="text-slate-700">
        Feel free to{" "}
        <a href="#">reach out</a> if you'd like to collaborate or just chat about
        tech!
      </p>
    </div>
  );
}
