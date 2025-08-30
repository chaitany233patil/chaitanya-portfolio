"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Player from "@/components/Player";

// Mock Image component for demo
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const Image = ({ src, alt, width, height, className }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);

export default function Playground() {
  const tracks = [
    {
      title: "Yours Truly",
      artist: "KR$NA",
      image: "/playlist/track1.jpeg",
      href: "https://open.spotify.com/track/69BPhJsrUz9Mkn02LaRxJm?si=cace4cbaee9445ac",
    },
    {
      title: "Victory Anthem",
      artist: "Lush curry",
      image: "/playlist/track2.jpg",
      href: "https://open.spotify.com/track/1UEbsf5kGEIcSMiWexOkrZ?si=692b53ea30e4474b",
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <div className="flex justify-center px-4">
        <div className="max-w-2xl mx-auto w-full">
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-2xl font-bold text-neutral-900 mb-2">
              Playground
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-neutral-800 to-neutral-500 rounded-full"></div>
          </motion.div>

          <motion.div
            className="mt-8 text-neutral-700 text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            This is my playground — a corner for random stuff I like, starting
            with some of my favorite tracks. Click a cover to jam along on
            Spotify.
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
              Featured Tracks
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {tracks.map((track, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-2xl overflow-hidden group transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-neutral-200 bg-neutral-50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Overlay */}
                  <a href={track.href} target="_black">
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center p-3 z-10">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.3 },
                        }}
                        className="text-center"
                      >
                        <ExternalLink className="w-6 h-6 text-white mx-auto mb-2" />
                        <span className="font-bold text-white text-sm leading-tight block">
                          {track.title}
                        </span>
                        <span className="text-white/80 text-xs">
                          {track.artist}
                        </span>
                      </motion.div>
                    </div>
                  </a>

                  {/* Image */}
                  <Image
                    src={track.image}
                    alt={`${track.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-12 mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
              Music Player
            </h3>
            <Player />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
