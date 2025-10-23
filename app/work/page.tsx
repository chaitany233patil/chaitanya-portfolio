import { ArrowUpRight, ChevronRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <section className="">
      <div className="flex flex-col pt-20">
        <div className="max-w-2xl mx-auto w-full px-4">
          {/* Heading */}
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold dark:text-textMain">My Work</div>
            <a
              href={
                "https://drive.google.com/file/d/16KkSWX_386nSSWOUGbSKMjaY9lhus8Jj/view?usp=sharing"
              }
              target="_blank"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-black dark:bg-white transition-all duration-300 rounded-lg group-hover:rounded-none"></div>
                <div
                  className="
                    relative z-10 flex items-center text-md font-semibold justify-center border-2 border-dashed border-black dark:border-white 
                    px-3 py-1 rounded-lg bg-white dark:bg-dark dark:text-textMain transition-all duration-300 group-hover:-translate-x-1 
                    group-active:-translate-x-1 group-hover:-translate-y-1 group-active:-translate-y-1 
                    group-hover:rounded-none group-active:rounded-none"
                >
                  View Resume
                  <Image
                    src={"/icons/right-arrow.svg"}
                    alt={"Arrow"}
                    width={23}
                    height={23}
                    className="mt-1"
                  />
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 text-neutral-600 flex items-center text-lg dark:text-textMain">
            Turning ideas into impact. See what I’ve built .
            <Link href={"/projects"}>
              <div className="relative overflow-hidden group mb-2">
                <ArrowUpRight
                  width={20}
                  height={20}
                  className="ml-1 cursor-pointer transform transition-transform duration-300 group-hover:translate-x-4 group-active:translate-x-4 group-hover:-translate-y-4 group-active:-translate-y-4"
                />
                <ArrowUpRight
                  width={20}
                  height={20}
                  className="absolute ml-1 top-0 cursor-pointer transform transition-transform duration-300 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-active:translate-x-0 group-hover:-translate-y-0 group-active:-translate-y-0"
                />
              </div>
            </Link>
          </div>

          {/* Work Experience */}
          <div className="flex flex-col mt-2">
            <div className="text-2xl pt-8 font-bold text-neutral-750 dark:text-textMain">
              Live Leaderboard System – Converges 2025.
            </div>
            <div className="text-[15px] text-neutral-600 mt-2">
              <div className="dark:text-textMain">
                <span className="font-semibold">Role:</span> Technical Team Lead
                @Skill<span className="dark:text-red-400">Bhavan</span>
              </div>
              <div className="dark:text-textMain">
                <span className="font-semibold">Tech Stack:</span> React ·
                MongoDB · Socket.io · Node.js · Typescript
              </div>
            </div>

            <div className="mt-4 border-l-3 border-blue-400/50 pl-6 text-neutral-700 dark:text-textMain">
              Built a real-time leaderboard web app from scratch for SquidMaze,
              part of our college fest Converges 2025. Handled live tracking for
              30+ teams using WebSockets with smooth, real-time updates.
            </div>

            <div className="mt-6 text-neutral-700 flex items-center gap-2 dark:text-textMain">
              <div className="h-1 w-1 rounded-full bg-black/70"></div> Developed
              and deployed a full-stack leaderboard system for SquidMaze&apos;s
              final round.
            </div>

            <div className="mt-1 text-neutral-700 flex items-center gap-2 dark:text-textMain">
              <div className="h-1 w-1 rounded-full bg-black/70"></div> Built
              with React, TypeScript, Socket.io, Node.js, and MongoDB.
            </div>

            <div className="mt-1 text-neutral-700 flex items-center gap-2 dark:text-textMain">
              <div className="h-1 w-1 rounded-full bg-black/70"></div> Handled
              30+ live teams with real-time score updates during Converges 2025.
            </div>

            <div className="mt-5 border border-neutral-600/40 p-3 dark:text-textMain">
              This project demonstrated my ability to build full-stack
              applications under constraints, lead technical efforts in
              real-time scenarios, and contribute meaningfully to team-based
              events.
            </div>
          </div>
          <div className="mt-8 flex items-center justify-start text-lg tracking-wider text-black hover:text-neutral-900">
            <Link
              href={"/"}
              className="flex underline underline-offset-6 dark:text-textMain"
            >
              <ChevronRight width={20} height={20} className="mt-1" />
              <div>cd .&nbsp;.</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
