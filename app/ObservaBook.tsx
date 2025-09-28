"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ObservaBook() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-black via-neutral-950 to-black text-red-500">
          {/* Alias para aportes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-10 text-sm text-red-400"
      >
        <p>Si querés aportar a la causa este es mi alias:</p>
        <p className="font-mono text-red-300 text-lg">Zero.jsx</p>
      </motion.div>
      {/* Portada del e-book con animación */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="relative w-72 h-[420px] shadow-2xl rounded-2xl overflow-hidden border border-red-500/50"
      >
        <Image
          src="/observa-cover.webp" // agrega tu imagen en /public/observa-cover.png
          alt="Portada del e-book Observa"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Botón de descarga */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8"
      >
        <Link
          href="/Observa.pdf" // tu archivo en /public/Observa.pdf
          download
          className="bg-red-600 hover:bg-red-700 active:bg-red-800 transition-colors px-8 py-3 rounded-xl font-semibold shadow-lg text-white tracking-wide"
        >
          Descargar gratis
        </Link>
      </motion.div>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 max-w-xl text-base text-red-200 leading-relaxed"
      >
        <strong className="text-red-400">Observa</strong> es un e-book gratuito
        que te ayuda a pensar como programador desde cero. No es un manual de
        sintaxis, sino una brújula práctica basada en{" "}
        <span className="text-red-400">Abstracción</span> y{" "}
        <span className="text-red-400">Lógica</span>. Ideal para principiantes,
        autodidactas y juniors ( también para profesores de coderhouse que son petes programando) que quieren construir proyectos reales con
        criterio y claridad.
      </motion.p>

  

    </section>
  );
}
