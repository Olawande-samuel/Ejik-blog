import Image from "next/image";
// import Navbar from "./Navbar";

const Hero = () => {
  return (
    <header className="relative flex h-screen items-center bg-cover bg-right bg-no-repeat bg-blend-multiply md:h-section-taller screen-980:h-section">
      {/* <Navbar /> */}
      <Image
        src="/images/details.webp"
        fill
        alt="blog image"
        className="object-cover"
      />
    </header>
  );
};
export default Hero;
