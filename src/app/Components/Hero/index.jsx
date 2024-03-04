import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#101820]">
      <div className="flex md:flex-row flex-col-reverse gap-12 items-center max-w-4xl justify-between mx-auto px-5 py-24">
        <div className="text-[#fff] text-center md:text-left p-4">
          <h1 className="font-bold text-5xl tracking-wide">Portfolio</h1>
          <p className="font-semibold uppercase pb-6 tracking-widest">
            Alexander Dyb
          </p>
          <p>
            Hi! I’m a developer who loves to build things on the web. My main
            tools are React, TypeScript, JavaScript, and Tailwind CSS.{" "}
          </p>
        </div>
        <div className="max-w-[200px]">
          <img
            src="/alexanderdyb.jpg"
            alt="Alexander Dyb"
            className="object-cover max-w-full rounded-full border-4 border-[#FEE715]"
          />
        </div>
      </div>
    </section>
  );
}
