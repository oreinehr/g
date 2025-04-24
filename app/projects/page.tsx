import Link from "next/link";
import VimeoEmbed from "@/components/vimeo-embed";

export default function Projects() {
  const projects = [
    { id: "1047485130", title: "Commercial Project" },
    { id: "1040199452", title: "Short Film" },
    { id: "115189988", title: "Music Video" },
    { id: "162427937", title: "Documentary" },
    { id: "370984351", title: "Corporate Video" },
    { id: "113716040", title: "Event Coverage" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="logo">
          <Link href="/">
            <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
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

      {/* Grid de Projetos */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-[2px] p-4">
        {projects.map((project) => (
          <VimeoEmbed
            key={project.id}
            videoId={project.id}
            title={project.title}
          />
        ))}
      </section>
    </main>
  );
}
