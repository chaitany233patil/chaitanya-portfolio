import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const Projects = [
    {
      id: "1",
      image: "/drawsync.png",
      title: "DrawSync",
      desc: "Real Time Collabrative White Board",
      date: "Nov 2024 - Dec 2024",
      techStack: [
        "Nextjs",
        "Typescript",
        "Socket",
        "Prisma",
        "Postgress",
        "Tailwind",
        "Nodejs",
      ],
      github: "https://github.com/chaitany233patil/Draw-app",
      liveLink: "",
    },
    {
      id: "2",
      image: "/brainly.png",
      title: "Brainly",
      desc: "Brainly - Your Second Brain",
      date: "Nov 2024 - Dec 2024",
      techStack: [
        "Nextjs",
        "Typescript",
        "Reactjs",
        "Mongodb",
        "Tailwind",
        "HugginFace",
        "Nodejs",
      ],
      github: "https://github.com/chaitany233patil/Brainly",
      liveLink: "",
    },
    {
      id: "3",
      image: "/wanderlust.png",
      title: "Wanderlust",
      desc: "Room Booking Platform",
      date: "Nov 2024 - Dec 2024",
      techStack: ["Nodejs", "EJS", "Stripe", "Boostrap", "MVC", "Mongodb"],
      github: "https://github.com/chaitany233patil/wanderlust",
      liveLink: "",
    },
    {
      id: "4",
      image: "/space.png",
      title: "Space",
      desc: "Space - My personal website",
      date: "Nov 2024 - Dec 2024",
      techStack: [
        "Portfolio",
        "Nextjs",
        "Tailwind",
        "Typescript",
        "Framer-motion",
      ],
      github: "https://github.com/chaitany233patil/chaitanya-portfolio",
      liveLink: "",
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
          <div className="text-3xl text-neutral-800 mt-20 mb-8">
            Top Projects
          </div>

          {/* Project Cards */}
          <div className="flex flex-col gap-20">
            {Projects.map((project) => (
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
            ))}
          </div>
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
