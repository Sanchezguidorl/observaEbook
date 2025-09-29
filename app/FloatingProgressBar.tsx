"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingProgressBar() {
  const [progress, setProgress] = useState(0);

  // Handler para simular descargas
  const handleDownload = () => {
    console.log("Descarga registrada");
    setProgress((prev) => (prev < 100 ? prev + 5 : 100)); // suma 5% por descarga
  };

  return (
    <div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-neutral-900/90 border border-red-500/50 rounded-xl shadow-lg backdrop-blur-sm p-4"
      >
        <p className="text-sm text-red-300 mb-2 text-center">
          Cada descarga me ayuda a seguir con este proyecto 🚀
        </p>

        <div className="w-full bg-neutral-800 rounded-full h-3 overflow-hidden">
          <motion.div
            className="bg-red-600 h-3 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <p className="text-xs text-red-400 mt-2 text-right">{progress}%</p>

        {/* Botón invisible para simular descargas (solo debug). 
            Podés borrar esto y llamar handleDownload() desde tu botón real */}
        <button
          onClick={handleDownload}
          className="mt-3 px-3 py-1 text-xs bg-red-700/40 rounded-lg text-red-300 hover:bg-red-700/60 transition"
        >
          Simular descarga
        </button>
      </motion.div>
    </div>
  );
}
