import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="max-w-xl mx-auto pt-20">
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
      </div>
    </section>
  );
}
