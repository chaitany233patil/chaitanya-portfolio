"use client";

import { Card } from "@/components/Card";
import { GithubHeatMap } from "@/components/GithubHeatMap";
import ScrollingRow from "@/components/ScrollingRow";
import { SocialCard } from "@/components/SocialCard";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Transition } from "framer-motion";
import React from "react";

const WORDS = "Chaitanya Patil";

const STACK = [
  "/icons/next.svg",
  "/icons/react.svg",
  "/icons/js.svg",
  "/icons/ts.svg",
  "/icons/html.svg",
  "/icons/css.svg",
  "/icons/tailwind.svg",
  "/icons/sql.svg",
  "/icons/java.svg",
  "/icons/figma.svg",
];

const REVSTACK = [
  "/icons/prisma.svg",
  "/icons/postgress.svg",
  "/icons/node.svg",
  "/icons/mongodb.svg",
  "/icons/git.svg",
  "/icons/vscode.svg",
  "/icons/github.svg",
  "/icons/express.svg",
  "/icons/postman.svg",
  "/icons/docker.svg",
];

const gitStat = [
  { title: "Following", count: "12" },
  { title: "Followers", count: "1" },
  { title: "Stars", count: "6" },
  { title: "Issue", count: "0" },
  { title: "PRs", count: "14" },
];

const SOCIALS = [
  {
    title: "Discord",
    logo: "/icons/discord.svg",
    alt: "Discord",
    href: "#",
    rotate: "-rotate-25",
    postion: "left-20",
    index: "z-1",
    color: "socialDiscord",
  },
  {
    title: "Insta",
    logo: "/icons/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/chaitanya_233",
    rotate: "-rotate-15",
    postion: "left-30",
    index: "z-2",
    color: "socialInstagram",
  },
  {
    title: "Linkedin",
    logo: "/icons/linkedin.svg",
    alt: "Linkedin",
    href: "https://www.linkedin.com/in/chaitanya-patil-26ba9b257/",
    rotate: "rotate-0",
    index: "z-3",
    color: "socialLinkedin",
  },
  {
    title: "Twitter",
    logo: "/icons/x.svg",
    alt: "Twitter",
    href: "https://x.com/PChaitanya529",
    rotate: "rotate-15",
    postion: "right-30",
    index: "z-2",
    color: "socialTwitter",
  },
  {
    title: "Spotify",
    logo: "/icons/spotify.svg",
    alt: "Spotify",
    href: "#",
    rotate: "rotate-20",
    postion: "right-20",
    index: "z-1",
    color: "socialSpotify",
  },
];

export default function Home() {
  const transition: Transition<string> = {
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1],
  };
  const variants = {
    hidden: {
      filter: "blur(10px)",
      transform: "translateY(20%)",
      opacity: 0,
    },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };

  return (
    <section className="bg-whitemin-h-screen">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="relative max-w-2xl mx-auto pt-20 px-6"
      >
        <div className="flex justify-between items-center py-4">
          <div>
            <div className="text-3xl font-semibold mb-1 text-textMain dark:text-textMain">
              {WORDS.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  <motion.span
                    className="inline-block"
                    transition={transition}
                    variants={variants}
                  >
                    {word}
                  </motion.span>
                  {index < WORDS.length - 1 && " "}
                </React.Fragment>
              ))}
            </div>
            <motion.div
              transition={transition}
              variants={variants}
              className="text-lg italic dark:text-textMain"
            >
              Full Stack Developer
            </motion.div>
          </div>
          <motion.div
            transition={transition}
            variants={variants}
            className="relative flex items-center justify-center order-1"
          >
            <Image
              src={"/chaitanya.jpg"}
              alt="Chaitanya Patil"
              height={80}
              width={80}
              className="z-1 rounded-sm"
            />
          </motion.div>
        </div>
        <div className="text-lg pt-8 leading-7 text-gray-800 dark:text-textMain">
          <motion.div transition={transition} variants={variants}>
            Hi, I&apos;m Chaitanya Patil, a Full-Stack Developer from India. I
            enjoy turning ideas into functional, user-focused web experiences
            using technologies like Next.js and Typescript.
          </motion.div>
          <motion.div
            transition={transition}
            variants={variants}
            className="pt-6"
          >
            I work across the stack — from building clean, responsive interfaces
            to designing secure backend systems that scale.
          </motion.div>{" "}
          <motion.div
            transition={transition}
            variants={variants}
            className="pt-6"
          >
            I love exploring the web, refining UI/UX details, and learning how
            things work under the hood. You can find my{" "}
            <span className="underline decoration-wavy cursor-pointer text-gray-900 dark:text-textMain">
              crafts
            </span>{" "}
            here. Currently, I&apos;m diving deeper into Web3 and Improving my
            UI/UX skils.
          </motion.div>
          <motion.div
            transition={transition}
            variants={variants}
            className="pt-6 flex items-center text-gray-800 dark:text-textMain"
          >
            A snapshot of my work experience.
            <Link href={"/work"}>
              <div className="relative overflow-hidden group">
                <Image
                  src={"/arrow.svg"}
                  alt="arrow"
                  width={20}
                  height={20}
                  className="ml-1 cursor-pointer transform transition-transform duration-300 group-hover:translate-x-4 group-active:translate-x-4 group-hover:-translate-y-4 group-active:-translate-y-4"
                />
                <Image
                  src={"/arrow.svg"}
                  alt="arrow"
                  width={20}
                  height={20}
                  className="absolute ml-1 top-0 cursor-pointer transform transition-transform duration-300 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-0"
                />
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          transition={transition}
          variants={variants}
          className="pb-10"
        >
          <div className="pt-8 underline dark:underline-white text-gray-900 dark:text-white">
            Bento
          </div>
          <div className="pt-10 grid grid-cols-5 grid-rows-5 sm:grid-rows-3 gap-2">
            {/* Playgorund */}
            <Card className="order-1 sm:order-none col-span-2 sm:col-span-1 flex items-center hover:scale-[90%] active:scale-[90%] overflow-hidden bg-gray-50 dark:bg-cardBg">
              <figure className="relative flex h-full max-w-sm transition-all duration-2000 overflow-hidden">
                <img
                  className="rounded-lg hover:scale-[120%] active:scale-[120%] transition-all duration-500"
                  src="/hero.jpg"
                  alt="image description"
                />
                <Link href={"/playground"}>
                  <figcaption className="absolute top-2 right-2 h-8 w-8 hover:rotate-360 active:rotate-360 transition-all duration-500 flex items-center text-lg text-white bottom-6 border border-neutral-500 dark:border-accentMuted rounded-full">
                    <Image
                      src={"/arrow.svg"}
                      alt="arrow"
                      width={25}
                      height={25}
                      className="ml-1 cursor-pointer transform transition-transform duration-300"
                    />
                  </figcaption>
                </Link>
              </figure>
            </Card>

            {/* Tech Stack */}
            <Card
              className={
                "col-span-5 sm:col-span-4 px-3 h-60 flex flex-col justify-between items-center overflow-hidden bg-gray-50 dark:bg-cardBg"
              }
            >
              <div className="flex flex-col justify-center h-full w-full pb-4">
                <div className="flex w-full text-md tracking-tight pt-2 ps-2 font-serif">
                  <span className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-600 dark:from-accentBlue dark:to-purple-900 bg-clip-text text-transparent">
                    Stacks
                  </span>
                </div>
                <div className="relative h-full flex items-center overflow-hidden">
                  <div className="flex flex-col gap-8">
                    <ScrollingRow images={STACK} />
                    <ScrollingRow images={REVSTACK} reverse />
                    {/* Left Fade */}
                    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 dark:from-cardBg to-transparent pointer-events-none" />

                    {/* Right Fade */}
                    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 dark:from-cardBg to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Github */}
            <Card className="col-span-3 sm:col-span-2 row-span-2 group bg-gray-50 dark:bg-cardBg">
              <a href="https://github.com/chaitany233patil" target="_blank">
                <div className="text-md text-gray-500 dark:text-accentMuted p-2 font-serif flex items-center">
                  <Github className="h-4" />
                  Github
                </div>
                <div className="flex items-center justify-center mb-2">
                  <GithubHeatMap />
                </div>
                <div className="flex flex-col gap-2 mt-4 overflow-hidden">
                  {gitStat.map(({ title, count }, index) => (
                    <div
                      key={index}
                      className={`flex border border-gray-300 dark:border-gray-700 py-3 px-3 text-gray-700 dark:text-textMain bg-gradient-to-b from-gray-100 to-gray-50 dark:from-cardBgLight dark:to-cardBg transition-all duration-600 w-1/2 ${
                        index % 2 == 0
                          ? "self-start rounded-r-full group-hover:w-3/5 justify-end group-active:w-3/5 "
                          : "self-end rounded-l-full group-hover:w-3/5 justify-start group-active:w-3/5"
                      }`}
                    >
                      {title}
                      <span className="ml-2 text-gray-900 dark:text-accentAqua">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </a>
            </Card>

            {/* Social */}
            <Card className="order-2 sm:order-none col-span-5 sm:col-span-3 rowspan-2 group bg-gray-50 dark:bg-cardBg">
              <div className="flex flex-col h-full items-center">
                <div className="text-md text-gray-500 dark:text-accentMuted p-2 font-serif w-full">
                  Social
                </div>
                <div
                  className={`relative h-full w-full flex items-center justify-center hover:px-4 group-active:px-4 overflow-hidden gap-2 mt-[-8px] transition-all duration-500`}
                >
                  {SOCIALS.map((social, index) => (
                    <SocialCard
                      className={`${social.index} ${social.rotate} ${social.postion} dark:bg-gradient-to-b dark:from-dark via-neutral-100 to-yellow-400/15`}
                      key={index}
                      src={social.logo}
                      alt={social.alt}
                      title={social.title}
                      href={social.href}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* VScode Stat */}
            <Card className="relative order-3 sm:order-none col-span-5 sm:col-span-2 group flex flex-col justify-between overflow-hidden bg-gray-50 dark:bg-cardBg">
              <div className="m-3">
                <img src={"/icons/code.svg"} width={25} />
              </div>
              <div className="h-full flex items-center mt-[-60px] justify-center flex-col gap-2">
                <div className="">
                  <span className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 via-gray-600 to-gray-900 dark:from-neutral-500 dark:via-neutral-400 dark:to-textLight">
                    940
                  </span>
                  <span className="tracking-tight ml-3 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800 dark:from-accentBlue dark:to-blue-950">
                    hrs
                  </span>
                </div>
                <div className="text-sm text-green-500 dark:text-accentGreen">
                  <span className="mr-1">(</span>Wakatime
                  <span className="ml-1">)</span>
                </div>
              </div>
              <div className="absolute top-4 right-7 transition-all duration-700 blur-sm group-hover:blur-none group-active:blur-none">
                <img src={"/icons/vscode.svg"} width={70} />
              </div>
              <div className="absolute bottom-4 left-7 transition-all duration-700 blur-sm group-hover:blur-none group-active:blur-none">
                <img src={"/icons/terminal.svg"} width={60} />
              </div>
            </Card>

            {/* Anime */}
            <Card className="order-1 sm:order-none col-span-2 sm:col-span-1 flex items-center hover:scale-[90%] active:scale-[90%] overflow-hidden bg-gray-50 dark:bg-cardBg">
              <figure className="relative flex h-full max-w-sm transition-all duration-2000 overflow-hidden">
                <img
                  className="rounded-lg hover:scale-[120%] active:scale-[120%] transition-all duration-500"
                  src="/sonic.jpg"
                  alt="image description"
                />
              </figure>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
