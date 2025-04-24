"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer/page";

export default function Home() {
  const videos = [
    {
      src: "/video1.mp4",
      title: "QUIZ COLEÇÃO 2025",
      vimeoUrl: "https://player.vimeo.com/video/1067753081",
    },
    {
      src: "/video2.mp4",
      title: "REINEHR - LABIRINTO",
      vimeoUrl: "https://player.vimeo.com/video/1047559604",
    },
    {
      src: "/video4.mp4",
      title: "BAHRÔ STUDIO",
      vimeoUrl: "https://player.vimeo.com/video/1033533951",
    },
    {
      src: "/video3.mp4",
      title: "BAHRÔ STUDIO - TRANSFORMANDO BARRO EM ARTE.",
      vimeoUrl: "https://player.vimeo.com/video/1047485130",
    },
    {
      src: "/video5.mp4",
      title: "MARCIANO SCHMITZ: PINTOR, DESENHISTA E ESCULTOR.",
      vimeoUrl: "https://vimeo.com/1044495137",
    },
    {
      src: "/video6.mp4",
      title: "UNIFERTIL - VALORES QUE ALIMENTAM",
      vimeoUrl: "https://vimeo.com/1040199452",
    },
  ];

  const videoRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.playbackRate = 1.5;
    });
  }, []);

  const handleVideoClick = (url) => {
    setSelectedVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoUrl("");
  };

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

      {/* Hero */}
      <section className="text-center px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <Image
            src="/logo.svg"
            alt="Gustavo Reinehr"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Mobile: Exibir vídeos um embaixo do outro (quadrados) */}
      <section className="block md:hidden w-full px-4 mb-8">
        {videos.map((video, i) => (
          <div key={i} className="group relative w-full aspect-square mb-8">
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={() => handleVideoClick(video.vimeoUrl)}
            />
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover rounded-xl"
            />
            <div
              className="
                absolute bottom-2 left-2
                opacity-0 group-hover:opacity-100
                translate-y-4 group-hover:translate-y-0
                transition-all duration-300 ease-in-out
                bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm
              "
            >
              {video.title}
            </div>
          </div>
        ))}
      </section>

      {/* Desktop/tablet: Exibir vídeos em uma grade (quadrados) */}
      <section className="hidden md:grid w-full grid-cols-2 gap-2 px-4 mb-8">
        {videos.map((video, i) => (
          <div
            key={i}
            className="group relative w-full aspect-square overflow-hidden rounded-2xl"
          >
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={() => handleVideoClick(video.vimeoUrl)}
            />
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
            <div
              className="
                absolute bottom-2 left-2
                opacity-0 group-hover:opacity-100
                translate-y-4 group-hover:translate-y-0
                transition-all duration-300 ease-in-out
                bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm
              "
            >
              {video.title}
            </div>
          </div>
        ))}
      </section>

      {/* Modal com vídeo do Vimeo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative w-11/12 md:w-3/4 h-3/4">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={closeModal}
            >
              X
            </button>
            <iframe
              src={selectedVideoUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          </div>
        </div>
      )}
            {/* Botão "See more" */}
            <div className="w-full flex justify-center mb-16">
        <a
          href="https://vimeo.com/gustavoreinehr" // Substitua aqui se quiser outro link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition"
        >
          Ver mais
        </a>
        
      </div>
      <Footer />
    </main>
  
  );
}
