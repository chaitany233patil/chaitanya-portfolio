import { Card } from "@/components/Card";
import { GithubHeatMap } from "@/components/GithubHeatMap";
import ScrollingRow from "@/components/ScrollingRow";
import { SocialCard } from "@/components/SocialCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const stack = [
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

  const revStack = [
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
    { title: "Followers", count: "0" },
    { title: "Stars", count: "4" },
    { title: "Issue", count: "2" },
    { title: "PRs", count: "16" },
  ];

  const socials = [
    {
      title: "Insta",
      logo: "/icons/instagram.svg",
      alt: "Instagram",
      href: "#",
      rotate: "-rotate-25",
    },
    {
      title: "Twitter",
      logo: "/icons/x.svg",
      alt: "Twitter",
      href: "#",
      rotate: "-rotate-15",
    },
    {
      title: "Linkedin",
      logo: "/icons/linkedin.svg",
      alt: "Linkedin",
      href: "#",
      rotate: "rotate-0",
    },
    {
      title: "Discord",
      logo: "/icons/discord.svg",
      alt: "Discord",
      href: "#",
      rotate: "rotate-15",
    },
    {
      title: "Spotify",
      logo: "/icons/spotify.svg",
      alt: "Spotify",
      href: "#",
      rotate: "rotate-20",
    },
  ];

  return (
    <section>
      <div className="relative max-w-2xl mx-auto pt-20 px-6">
        <div className="flex justify-between items-center py-4">
          <div>
            <div className="text-3xl font-semibold mb-1">Chaitanya Patil</div>
            <div className="text-lg text-neutral-600">Full Stack Developer</div>
          </div>
          <div className="relative flex items-center justify-center order-1">
            <Image
              src={"/chaitanya.jpg"}
              alt="Chaitanya Patil"
              height={70}
              width={70}
              className="z-1 rounded-xl"
            />
          </div>
        </div>
        <div className="text-lg text-neutral-600 pt-8 leading-7">
          <div>
            Hi, I&apos;m Chaitanya Patil, a Full-Stack Developer from India. I
            enjoy turning ideas into functional, user-focused web experiences
            using technologies like Next.js and Express.
          </div>
          <div className="pt-6">
            I work across the stack — from building clean, responsive interfaces
            to designing secure backend systems that scale.
          </div>{" "}
          <div className="pt-6">
            I love exploring the web, refining UI/UX details, and learning how
            things work under the hood. You can find my{" "}
            <span className="underline decoration-wavy cursor-pointer">
              crafts
            </span>{" "}
            here. Currently, I&apos;m diving deeper into Web3 and Improving my
            UI/UX skils.
          </div>
          <div className="pt-6 flex items-center ">
            A snapshot of my work experience.
            <Link href={"/work"}>
              <div className="relative overflow-hidden group">
                <Image
                  src={"/arrow.svg"}
                  alt="arrow"
                  width={20}
                  height={20}
                  className="ml-1 cursor-pointer transform transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"
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
          </div>
        </div>
        <div className="pb-10">
          <div className="pt-8 underline">Bento</div>
          <div className="pt-10 grid grid-cols-5 grid-rows-3 gap-2">
            {/* Playgorund */}
            <Card className="col-span-1 flex items-center hover:scale-[90%] overflow-hidden">
              <figure className="relative flex h-full max-w-sm transition-all duration-2000 overflow-hidden">
                <img
                  className="rounded-lg hover:scale-[120%] transition-all duration-500"
                  src="/hero.jpg"
                  alt="image description"
                />
                <figcaption className="absolute top-2 right-2 h-8 w-8 hover:rotate-360 transition-all duration-500 flex items-center text-lg text-white bottom-6 border border-neutral-500 rounded-full">
                  <Image
                    src={"/arrow.svg"}
                    alt="arrow"
                    width={25}
                    height={25}
                    className="ml-1 cursor-pointer transform transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 filter"
                  />
                </figcaption>
              </figure>
            </Card>

            {/* Tech Stack */}
            <Card
              className={
                "col-span-4 px-3 h-60 flex flex-col justify-between items-center overflow-hidden"
              }
            >
              <div className="flex flex-col justify-center h-full gap-8 pb-4">
                <div className="text-md tracking-tight bg-gradient-to-r from-blue-400 to-purple-900 bg-clip-text text-transparent pt-2 ps-2 font-serif">
                  Stacks
                </div>
                <div className="relative flex flex-col items-center justify-center gap-8">
                  <ScrollingRow images={stack} />
                  <ScrollingRow images={revStack} reverse />
                  {/* Left Fade */}
                  <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />

                  {/* Right Fade */}
                  <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                </div>
              </div>
            </Card>

            {/* Github */}
            <Card className="col-span-2 row-span-2 group">
              <div>
                <div className="text-md text-neutral-400 p-2 font-serif">
                  Github
                </div>
              </div>
              <div className="flex items-center justify-center mb-2">
                <GithubHeatMap />
              </div>
              <div className="flex flex-col gap-2 mt-4 overflow-hidden">
                {gitStat.map(({ title, count }, index) => (
                  <div
                    key={index}
                    className={`flex border border-gray-400/40 py-3 px-3 text-neutral-400 bg-gradient-to-b from-neutral-50 to-yellow-200/10 transition-all duration-600 w-1/2 ${
                      index % 2 == 0
                        ? "self-start rounded-r-full group-hover:w-3/5 justify-end"
                        : "self-end rounded-l-full group-hover:w-3/5 justify-start"
                    }`}
                  >
                    {title}
                    <span className="ml-2 text-black">{count}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social */}
            <Card className="col-span-3 rowspan-2 group">
              <div className="flex flex-col h-full items-center">
                <div className="text-md text-neutral-400 p-2 font-serif w-full">
                  Social
                </div>
                <div
                  className={`h-full w-full flex items-center justify-center hover:px-4 overflow-hidden gap-2 mt-[-8px] transition-all duration-500`}
                >
                  {socials.map((social, index) => (
                    <SocialCard
                      className={`${social.rotate} transition-all duration-500 group-hover:rotate-0 group-hover:mt-0 cursor-pointer`}
                      key={index}
                      src={social.logo}
                      alt={social.alt}
                      title={social.title}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* VScode Stat */}
            <Card className="relative col-span-2 group flex flex-col justify-between overflow-hidden">
              <div className="m-3">
                <img src={"/icons/code.svg"} width={25} />
              </div>
              <div className="h-full flex items-center mt-[-60px] justify-center flex-col gap-2">
                <div className="">
                  <span className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-500 via-neutral-500 to-black ">
                    940
                  </span>
                  <span className=" tracking-tight ml-3 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-950">
                    hrs
                  </span>
                </div>
                <div className="text-sm text-green-400">
                  <span className="mr-1">(</span>Wakatime
                  <span className="ml-1">)</span>
                </div>
              </div>
              <div className="absolute top-4 right-7 transition-all duration-700 blur-sm group-hover:blur-none">
                <img src={"/icons/vscode.svg"} width={70} />
              </div>
              <div className="absolute bottom-4 left-7 transition-all duration-700 blur-sm group-hover:blur-none">
                <img src={"/icons/terminal.svg"} width={60} />
              </div>
            </Card>

            {/* Anime */}
            <Card className="col-span-1 flex items-center hover:scale-[90%] overflow-hidden">
              <figure className="relative flex h-full max-w-sm transition-all duration-2000 overflow-hidden">
                <img
                  className="rounded-lg hover:scale-[120%] transition-all duration-500"
                  src="/sonic.jpg"
                  alt="image description"
                />
              </figure>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
