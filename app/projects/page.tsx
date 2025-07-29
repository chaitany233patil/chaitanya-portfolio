import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <div className="flex">
        <div className="max-w-3xl mx-auto w-full">
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
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}
