import Link from "next/link";
import Image from "next/image";
import Footer from "../Footer/page";



export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="py-4 px-6 flex justify-between items-center">
        <Link href="/">
          <Image src="/Prancheta 1_2.png" alt="Logo" width={60} height={60} />
        </Link>
        <div className="flex gap-8 text-lg">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">Sobre</Link>
          <Link href="/contact" className="hover:text-gray-300">Contato</Link>
        </div>
      </nav>

      {/* About Content */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-12">About</h1>
        <div className="space-y-6 text-lg">
          <p>
          Gustavo Reinehr é um editor de vídeos experiente e versátil, 
          com anos de atuação no mercado. Especializado em storytelling e 
          estética visual, ele imprime uma identidade única em cada projeto.


          </p>
          <p>
          Com domínio de ferramentas como Adobe Premiere Pro, Gustavo produz conteúdos de alta qualidade que prendem a atenção do público e transmitem mensagens com clareza e impacto.
          </p>
          <p>
          Ao longo de sua carreira, colaborou com uma variedade de clientes — de criadores independentes a marcas e empresas — contribuindo para transformar ideias em vídeos envolventes e profissionais, sempre com atenção aos detalhes e foco nos objetivos de comunicação.
          </p>
        </div>
      </section>
        <Footer />
    </main>
  );
}
