import Image from "next/image";

export const Navbar = () => {
  const NavItems = [
    { title: "Work" },
    { title: "Projects" },
    { title: "About" },
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
            <div key={index} className="text-neutral-500 text-lg">
              {itme.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
