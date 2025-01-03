"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const images = [
  "/assets/work/thumb1.png",
  "/assets/work/thumb2.png",
  "/assets/work/thumb3.png",
  "/assets/work/thumb4.png",
  // Dodaj więcej ścieżek obrazów...
];

const Gallery = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Galeria</h1>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            slideShadows: true,
          }}
          loop={true}
          className="relative"
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Obraz ${index + 1}`}
                  className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Przyciski nawigacji */}
          <button className="swiper-button-prev absolute top-1/2 -left-8 transform -translate-y-1/2 text-white text-3xl">
            <PiCaretLeftBold />
          </button>
          <button className="swiper-button-next absolute top-1/2 -right-8 transform -translate-y-1/2 text-white text-3xl">
            <PiCaretRightBold />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
