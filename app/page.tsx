import Flat from "./sections/flat";
import Hero from "./sections/hero-section";
import Position from "./sections/position";
import Utilities from "./sections/utilites";
// import Investor from "./sections/investor";
//
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Position />
      <Utilities />
      <Flat />

      <Image
        src="/TDGLogo.png"
        alt="TDG Logo"
        width={75}
        height={75}
        className="fixed bottom-3 right-3"
      />
    </div>
  );
}
