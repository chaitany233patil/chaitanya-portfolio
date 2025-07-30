"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const ScrollingRow = ({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseEnter = () => {
      el.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
      el.style.animationPlayState = "running";
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className={`flex gap-6 whitespace-nowraps ${
          reverse ? "scroll-reverse" : "scroll"
        }`}
      >
        {images.concat(images).map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="tech"
            width={40}
            height={40}
            className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 active:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingRow;
