"use client";

export default function HomePage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div className="flex justify-between items-center">
        <p className="font-mono text-sm tracking-wide text-slate-500">/README.md</p>
      </div>

      <img
        src="/images/latte_and_i.jpeg"
        alt="Lucas Zheng"
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-lg shadow-md float-right ml-3 md:ml-6 mb-2"
      />
      <h1 className="text-4xl md:text-3xl font-semibold leading-tight">Lucas Zheng</h1>

      <p className="text-slate-700">
        A 2nd year computer science student @ <a href="https://www.mcmaster.ca/" target="_blank">McMaster University.
        </a> Amateur <a>photographer.</a> 
        {/* todo add random photo on hover */}
      </p>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        <li>
          <span className="font-semibold"><a href="/projects">See my projects.</a></span> I'm interested in data science and deep learning models.
        </li>
        <li>
          <span className="font-semibold"><a href="/Lucas_Zheng_Resume.pdf" target="_blank">View my resume.</a></span> Currently searching for Summer 2026 internships!
        </li>
      </ul>
      <p>
        While not tackling LeetCode problems, I'm probably tackling the local trails on my mountain bike. I also love reading sci-fi/fantasy books, play the guitar, and have a cat named Latte and a sister who was fortunately not named Latte.
      </p>


      <p className="text-slate-700">
        If you would like to talk to me about anything (even random things!),{" "}
        <a href="#">get in touch</a>.
      </p>
    </div>
  );
}
