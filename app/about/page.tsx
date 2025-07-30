import Image from "next/image";
import Link from "next/link";
import { parisienne } from "@/components/Font";

interface IHeroImage {
  src: string;
  title: string;
  className?: string;
}

function HeroImage(props: IHeroImage) {
  return (
    <div
      className={`group max-w-35 flex flex-col gap-3 items-center p-3 bg-neutral-100 border border-neutral-300/30 shadow-2xl ${props.className}`}
    >
      <img
        src={props.src}
        alt="me"
        className="filter grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-300"
      />
      <div className={`text-lg text-neutral-500 ${parisienne.className}`}>
        {props.title}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section>
      <div className="flex">
        <div className="max-w-2xl w-full mx-auto px-6">
          <div className="mt-20">
            <div className="text-2xl font-bold">About me</div>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-20 mt-10">
            <HeroImage
              className={"-rotate-10"}
              src={"/img1.jpg"}
              title={"Adventurer"}
            />
            <HeroImage
              className={"rotate-3"}
              src={"/img2.jpg"}
              title={"Explorer"}
            />
            <HeroImage
              className={"rotate-10"}
              src={"/img3.jpg"}
              title={"Dreamer"}
            />
          </div>
          <div className="pt-16 px-4 text-neutral-700">
            <div>
              Hey there! I’m{" "}
              <span className="text-neutral-950 font-semibold">
                {" "}
                Chaitanya Patil
              </span>
              , a passionate Full Stack Developer from India who enjoys building
              seamless, scalable, and interactive web experiences.
            </div>

            <div className="mt-6">
              I&apos;m currently in my final year of B.Tech in Computer Science
              and Engineering (CSE) at R. C. Patel Institute of Technology,
              Shirpur. Over the years, I&apos;ve explored the world of web
              development and built several projects using Next.js, Express,
              MongoDB, and Tailwind CSS. <br />
              <br />I love learning by doing — whether it&apos;s crafting
              user-friendly interfaces or building powerful backend systems.
              Alongside my technical journey, I&apos;m also exploring Web3 and
              improving my UI/UX design skills to make my apps not just work
              well, but feel great to use.
            </div>

            <div className="text-black text-xl font-bold mt-6">
              What Drives Me
            </div>
            <div className="mt-3">
              I love transforming ideas into live products that users can enjoy
              and benefit from. Whether it’s crafting a beautiful UI with
              Next.js + Tailwind CSS or setting up a secure backend with Express
              and MongoDB, I’m always excited to bring projects to life.
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
      </div>
    </section>
  );
}
