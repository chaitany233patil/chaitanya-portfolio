import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const NavItems = [
    { title: "Work", href: "/work" },
    { title: "Projects", href: "projects" },
    { title: "About", href: "About" },
    { title: "Playground", href: "/Playground" },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto flex justify-between items-center my-6 px-3">
        <Image
          src={"/signature.svg"}
          alt="signature"
          width={100}
          height={100}
        />
        <div className="flex gap-8">
          {NavItems.map((itme, index) => (
            <Link key={index} href={itme.href}>
              <div
                key={index}
                className="text-neutral-500 hover:text-neutral-900 text-lg transition-all duration-300"
              >
                {itme.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
