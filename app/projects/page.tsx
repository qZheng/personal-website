// app/projects/page.tsx

export default function ProjectsPage() {
  return (
    <div id="projects" className="max-w-3xl space-y-8">
      <p className="font-mono text-sm tracking-wide text-slate-500">
        /Projects.md
      </p>

      <h1 className="text-4xl md:text-3xl font-semibold leading-tight">
        Some Projects
      </h1>

      <p className="text-slate-700">
        Here are some of the projects I've worked on.
      </p>

      <div className="space-y-8">
        <div className="border-l-2 border-slate-300 pl-6">
          <h3 className="text-xl font-semibold text-slate-900">A project.</h3>
          <p className="text-sm text-slate-500 mt-1">Technologies: React, Node.js, MongoDB</p>
          <p className="text-slate-700 mt-3">
            You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive
          </p>
        </div>

        <div className="border-l-2 border-slate-300 pl-6">
          <h3 className="text-xl font-semibold text-slate-900">Another project.</h3>
          <p className="text-sm text-slate-500 mt-1">Technologies: Next.js, TypeScript, Tailwind</p>
          <p className="text-slate-700 mt-3">
            You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive
          </p>
        </div>

        <div className="border-l-2 border-slate-300 pl-6">
          <h3 className="text-xl font-semibold text-slate-900">Another one?</h3>
          <p className="text-sm text-slate-500 mt-1">Technologies: Python, Flask, PostgreSQL</p>
          <p className="text-slate-700 mt-3">
            You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive
          </p>
        </div>
      </div>

      <p className="text-slate-700">
        Interested in collaborating? <a href="#">Let's connect</a>!
      </p>
    </div>
  );
}
