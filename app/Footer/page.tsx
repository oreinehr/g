import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-8 pt-24 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start border-t border-gray-800 pt-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Vamos nos conectar.</h2>
          <p className="text-base text-gray-400 italic">
            Tem algo em mente? Manda uma mensagem e vamos criar algo incrível juntos.
          </p>
        </div>

        <div className="mt-6 md:mt-0 text-center md:text-right">
          <p className="text-lg md:text-xl font-light italic text-gray-400">
            Sempre aberto para novas ideias.
          </p>
          <p className="text-3xl font-bold tracking-tight text-white mt-2">
            Vamos conversar!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-sm text-gray-500 border-t border-gray-800 pt-6">
        <span className="text-center md:text-left">&copy; {new Date().getFullYear()} Gustavo Reinehr</span>
        <div className="flex gap-4 mt-4 md:mt-0 justify-center md:justify-end">
          <Link href="https://www.instagram.com/gustavoreinehr" className="hover:text-white transition-colors" target="_blank">
            Instagram
          </Link>
          <Link href="https://vimeo.com/gustavoreinehr" className="hover:text-white transition-colors" target="_blank">
            Vimeo
          </Link>
        </div>
      </div>
    </footer>
  );
}
