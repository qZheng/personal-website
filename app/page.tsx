// app/page.tsx

export default function HomePage() {
  return (
    <div className="max-w-3xl space-y-8">
      <p className="font-mono text-sm tracking-wide text-slate-500">/README.md</p>

      <img
        src="/images/latte_and_i.jpeg"
        alt="Lucas Zheng"
        className="w-32 h-32 object-cover rounded-md shadow-sm float-right ml-6 mb-2"
      />
      <h1 className="text-4xl md:text-3xl font-semibold leading-tight">Lucas Zheng</h1>

      <p className="text-slate-700">
        A 2nd year computer science student @ <a href="https://www.mcmaster.ca/" target="_blank">McMaster University.</a> See my <a>projects.</a>
      </p>
      <p>
        While I'm not tackling LeetCode problems, I'm an avid mountain biker, love reading sci-fi/fantasy books, and play the guitar. I have a cat named Latte and a sister who was fortunately not named Latte.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>
          <span className="font-semibold">Here's a point.</span> I have a cat named Latte... He&apos;s super cute.
        </li>
        <li>
          <span className="font-semibold">Another point.</span> I'm not sure how to fill out this website
        </li>
      </ul>

      <p className="text-slate-700">
        If you would like to talk to me about anything (even random things),{" "}
        <a href="#">get in touch</a>.
      </p>
    </div>
  );
}
