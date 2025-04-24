"use client";

import Link from "next/link";
import Image from "next/image"
import { FaInstagram, FaVimeoV, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../Footer/page";
export default function Contact() {
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

      {/* Contact Content */}
      <section className="max-w-4xl mx-auto px-6 py-24 space-y-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          Contato
        </motion.h1>

        {/* Formulário de Contato */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg"
        >
          <div>
            <label className="block text-lg mb-2">Nome</label>
            <input type="text" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-lg mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none" />
          </div>
          <div>
            <label className="block text-lg mb-2">Mensagem</label>
            <textarea className="w-full p-3 rounded bg-gray-800 text-white h-32 resize-none focus:outline-none" />
          </div>
          <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition-colors">
            Enviar Mensagem
          </button>
        </motion.form>

        {/* Informações de Contato */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-8 text-lg"
        >
      

          <div>
            <h2 className="text-2xl font-semibold mb-2">Localização</h2>
            <p>Campo Bom, RS</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Redes Sociais</h2>
            <div className="flex gap-6 text-2xl">
              <a href="https://www.instagram.com/gustavoreinehr/" className="hover:text-gray-400"><FaInstagram /></a>
              <a href="https://vimeo.com/gustavoreinehr" className="hover:text-gray-400"><FaVimeoV /></a>
    
            </div>
          </div>
        </motion.div>
      </section>
       <Footer />
    </main>
  );
}
