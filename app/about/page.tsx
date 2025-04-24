import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="logo">
          <Link href="/">
            <svg
              width="50"
              height="30"
              viewBox="0 0 50 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 5L25 25L35 5" stroke="white" strokeWidth="2" />
            </svg>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* About Content */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-12">About</h1>
        <div className="space-y-6 text-lg">
          <p>
            Gustavo Reinehr is a skilled film and content editor with years of
            experience in the industry. Specializing in narrative storytelling
            and visual aesthetics, Gustavo brings a unique perspective to every
            project.
          </p>
          <p>
            With expertise in various editing software including Adobe Premiere
            Pro, Final Cut Pro, and DaVinci Resolve, Gustavo delivers
            high-quality content that engages audiences and conveys powerful
            messages.
          </p>
          <p>
            Throughout his career, Gustavo has worked with a diverse range of
            clients from independent filmmakers to corporate brands, helping
            them achieve their creative vision through meticulous editing and
            content creation.
          </p>
        </div>
      </section>
    </main>
  );
}
