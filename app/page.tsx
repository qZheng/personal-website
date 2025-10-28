import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-evergreen text-mist flex items-center justify-center">
      <h1 className="text-5xl font-bold">Hello, I'm building my site 🌿</h1>
      <button className="mt-6 rounded-full px-4 py-2 font-semibold text-evergreen bg-gradient-to-r from-coral to-amber">
        Gradient CTA
      </button>

    </main>
  )
}
