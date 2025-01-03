"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Tablica zawierająca ścieżki do obrazów używanych w galerii
const images = [
  "/assets/work/thumb1.png",
  "/assets/work/thumb2.png",
  "/assets/work/thumb3.png",
  // Dodaj więcej obrazów...
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Wyłączenie scrolla w tle, gdy modal jest otwarty
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  // Obsługa klawisza Escape do zamykania modalu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedImage) {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="min-h-screen py-12" style={{ backgroundColor: "transparent" }}>
      <div className="container mx-auto">
        {/* Siatka miniatur obrazów */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image}
                alt={`Miniatura ${index + 1}`}
                width={500}
                height={500}
                className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={(e) => (e.target.src = "/assets/fallback.png")}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal wyświetlający wybrany obraz */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative"
              onClick={(e) => e.stopPropagation()} // Zapobiega zamykaniu przy kliknięciu w obraz
            >
              <Image
                src={selectedImage}
                alt="Wybrany obraz"
                width={1000}
                height={1000}
                className="object-contain max-w-full max-h-screen"
                onError={(e) => (e.target.src = "/assets/fallback.png")}
              />
              <button
                aria-label="Zamknij"
                className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-lg"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
