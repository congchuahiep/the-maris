"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselProps = {
  images: string[];
  className?: string;
};

export default function Carousel({ images, className }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const totalSlides = images.length;

  // Auto slide mỗi 10 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 10000);

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(interval);
  });

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);

  return (
    <div className="relative w-full overflow-hidden flex justify-center">
      {/* Slide Images */}
      <div className={`relative ${className}`}>
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Slide ${index}`}
            fill
            className={`absolute transition-opacity duration-700 object-cover rounded-2xl ${index === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Nút Previous */}
        <button
          type="button"
          onClick={prevSlide}
          className={`absolute text-3xl left-4 top-1/2 -translate-y-1/2 bg-cyan-700
            opacity-70 text-white p-3 rounded-md hover:opacity-100 hover:cursor-pointer transition duration-300`}
        >
          ◀
        </button>

        {/* Nút Next */}
        <button
          type="button"
          onClick={nextSlide}
          className={`absolute text-3xl right-4 top-1/2 -translate-y-1/2 bg-cyan-700
            opacity-70 text-white p-3 rounded-md hover:opacity-100 hover:cursor-pointer transition duration-300`}
        >
          ▶
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((src, index) => (
            <button
              type="button"
              key={src}
              className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white w-8" : "bg-cyan-200 opacity-40 w-3"}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
