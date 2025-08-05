"use client";

import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { motion, Transition } from "framer-motion";

export default function Projects() {
  const transition: Transition<string> = {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
  };
  const variants = {
    hidden: {
      filter: "blur(10px)",
      transform: "translateY(5%)",
      opacity: 0,
    },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };

  const Projects = [
    {
      id: "1",
      image: "/drawsync.png",
      title: "DrawSync",
      desc: "Real Time Collabrative White Board",
      date: "Jan 2024 - Dec 2024",
      techStack: [
        "Nextjs",
        "Reactjs",
        "Typescript",
        "Socket",
        "Prisma",
        "Postgress",
        "Tailwind",
        "Nodejs",
        "express",
      ],
      github: "https://github.com/chaitany233patil/Draw-app",
      liveLink: "https://drawsyncc.chaitany.space/",
    },
    {
      id: "2",
      image: "/brainly.png",
      title: "Brainly",
      desc: "Brainly - Your Second Brain",
      date: "Jan 2024 - Dec 2024",
      techStack: [
        "Nextjs",
        "Typescript",
        "Reactjs",
        "express",
        "Mongodb",
        "Tailwind",
        "HugginFace",
        "Nodejs",
        "framer-motion",
      ],
      github: "https://github.com/chaitany233patil/Brainly",
      liveLink: "https://brainly.chaitany.space/",
    },
    {
      id: "3",
      image: "/wanderlust.png",
      title: "Wanderlust",
      desc: "Room Booking Platform",
      date: "Jan 2024 - Dec 2024",
      techStack: [
        "Nodejs",
        "javascipt",
        "express",
        "EJS",
        "Stripe",
        "Boostrap",
        "MVC",
        "Mongodb",
        "Cloudinary",
      ],
      github: "https://github.com/chaitany233patil/wanderlust",
      liveLink: "#",
    },
    {
      id: "4",
      image: "/space.png",
      title: "Space",
      desc: "Space - My personal website",
      date: "Jan 2024 - Dec 2024",
      techStack: [
        "Portfolio",
        "Nextjs",
        "Tailwind",
        "Typescript",
        "Framer-motion",
      ],
      github: "https://github.com/chaitany233patil/chaitanya-portfolio",
      liveLink: "https://www.chaitany.space/",
    },
    {
      id: "5",
      image: "/chatspeare.png",
      title: "ChatterSphere",
      desc: "ChatterSphere - Temporary Chat App",
      date: "Nov 2024 - Dec 2024",
      techStack: [
        "Portfolio",
        "Nextjs",
        "Tailwind",
        "Typescript",
        "Framer-motion",
      ],
      github: "https://github.com/chaitany233patil/Chat-App",
      liveLink: "https://chattersphere.chaitany.space/",
    },
    {
      id: "6",
      image: "/assembly.png",
      title: "Assembly-Endgame",
      desc: "Assembly-Endgame",
      date: "Nov 2024 - Dec 2024",
      techStack: ["Reactjs", "Tailwind", "Javascript"],
      github: "https://github.com/chaitany233patil/Assembly-Endgame",
      liveLink: "https://assembly-endgame-dyex.vercel.app/",
    },
  ];

  return (
    <section>
      <div className="flex">
        <div className="max-w-3xl mx-auto w-full px-6">
          {/* Title */}
          <div className="flex flex-col items-center mt-10">
            <div className="text-4xl font-serif font-bold">Projects</div>
            <div className="text-neutral-400 text-md font-serif">
              Project&apos;s I Crafted
            </div>
          </div>

          {/* Projects */}
          <div className="text-2xl text-neutral-800 mt-20 mb-8">
            Top Projects
          </div>

          {/* Project Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col gap-20"
          >
            {Projects.map((project) => (
              <motion.div
                transition={transition}
                variants={variants}
                key={project.id}
              >
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  data={project.date}
                  desc={project.desc}
                  techStack={project.techStack}
                  github={project.github}
                  liveLInk={project.liveLink}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 flex items-center justify-start text-lg tracking-wider text-neutral-500 hover:text-neutral-900">
            <Link href={"/"} className="flex underline underline-offset-6">
              <Image
                src={"/icons/right-arrow.svg"}
                alt={"Navigate"}
                width={20}
                height={20}
                className="mt-1"
              />
              <div>cd .&nbsp;.</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
