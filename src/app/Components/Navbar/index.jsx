import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#101820] h-14 flex items-center justify-center px-5">
      <div className="flex justify-start max-w-7xl w-full">
        <div>
          <Link href="/">
            <p className="text-white">
              <span className="pr-1">AD</span>
              <span className="text-[#e5e5e5] font-bold tracking-widest border-b border-[#FEE715]">
                Portfolio
              </span>
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
