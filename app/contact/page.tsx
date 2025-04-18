import Link from "next/link"

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="logo">
          <Link href="/">
            <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>
      </nav>

      {/* Contact Content */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-12">Contact</h1>
        <div className="space-y-8">
          <p className="text-xl">Lorem</p>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Email</h2>
              <a href="mailto:contact@gustavoreinhehr.com" className="text-lg hover:underline">
                gustavo@gustavo.com
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Location</h2>
              <p className="text-lg">Campo Bom, RS</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Social</h2>
              <div className="flex gap-4">
                <a href="#" className="text-lg hover:underline">
                  Instagram
                </a>
                <a href="#" className="text-lg hover:underline">
                  Vimeo
                </a>
                <a href="#" className="text-lg hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
