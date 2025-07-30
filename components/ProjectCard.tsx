import { Github, ArrowRight, Link } from "lucide-react";
import { ReactNode } from "react";

interface IProject {
  id: string;
  image: string;
  title: string;
  data: string;
  desc: string;
  techStack: string[];
  github: string;
  liveLInk: string;
}

function Stack(props: { title: string }) {
  return (
    <div className="flex">
      <div className="flex items-center gap-2 text-xs font-semibold bg-neutral-100 py-1 px-3 rounded-lg border border-neutral-200">
        <div className="border-2 rounded-full h-3"></div>
        {props.title}
      </div>
    </div>
  );
}

function Button(props: {
  startIcon?: ReactNode;
  title: string;
  endIcon?: ReactNode;
}) {
  return (
    <button className="cursor-pointer flex items-center justify-center bg-gray-950 text-white text-sm px-2 py-1.5 rounded-lg">
      {props.startIcon}
      <span className="font-semibold">{props.title}</span>
      {props.endIcon}
    </button>
  );
}

export function ProjectCard(props: IProject) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-14">
      <div className="md:max-w-sm max-w-lg flex flex-col bg-red-100/20 p-1 rounded-lg group border-2 border-gray-400/40 shadow-xl/40">
        <div className="flex items-center mb-1 pl-1">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-green-600 group-active:bg-green-600 transition-all duration-500"></div>
            <div className="h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-yellow-600 group-active:bg-yellow-600 transition-all duration-500"></div>
            <div className="h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-red-600 group-active:bg-red-600 transition-all duration-500"></div>
          </div>
          <div className="w-full flex justify-center">
            <div className="text-[10px] tracking-wide border bg-neutral-300/60 border-neutral-300 px-10 rounded-sm text-neutral-700/80">
              {props.title}
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={props.image}
            className="hover:scale-110 active:scale-110 transition-all duration-500"
          />
        </div>
      </div>

      {/* Description */}
      <div className="ml-4 sm:ml-0">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <div className="text-xs mb-2 font-semibold text-neutral-700">
          {props.data}
        </div>
        <div className="text-xs font-semibold text-neutral-700">
          {props.desc}
        </div>
        <div className="flex flex-wrap gap-2 mt-3 mb-3 max-w-lg">
          {props.techStack.map((title, index) => (
            <Stack key={index} title={title} />
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <a href={props.github} target="_blank">
            <Button
              startIcon={<Github className="h-4" />}
              title={"Source Code"}
            />
          </a>
          <a href={props.liveLInk} target="_blank">
            <Button
              endIcon={<ArrowRight className="h-3" />}
              title={"Live Demo"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
