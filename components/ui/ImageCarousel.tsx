"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  displayDuration?: number; // Time (ms) image stays in place before sliding
  transitionDuration?: number; // Slide transition duration in ms
  className?: string;
}; 

export function ImageCarousel({
  images,
  displayDuration = 5000,
  transitionDuration = 1000,
  className,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  // Handle image loading status
  useEffect(() => {
    setImagesLoaded(Array(images.length).fill(false));
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, displayDuration + transitionDuration);

    return () => clearInterval(interval);
  }, [images, displayDuration, transitionDuration]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div
      className={cn("relative overflow-hidden w-full h-full", className)}
    >
      <div
        style={{
          display: "flex",
          width: `${images.length * 100}%`,
          transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
          transition: `transform ${transitionDuration}ms ease-in-out`,
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 auto",
              width: `${100 / images.length}%`,
              position: "relative",
              height: "100%",
            }}
          >
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              quality={90}
              className="object-cover rounded-3xl"
              sizes="100vw"
              onLoad={() => handleImageLoad(i)}
              onError={(e) => {
                console.error(`Failed to load image: ${src}`, e);
              }}
            />
            {!imagesLoaded[i] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-white">Loading image...</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};