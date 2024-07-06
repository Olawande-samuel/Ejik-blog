import Image from "next/image";
// import Navbar from "./Navbar";

const Hero = ({ image }: { image: string }) => {
	return (
		<header className="relative flex h-[70vh] items-center bg-cover bg-right bg-no-repeat bg-blend-multiply md:h-section-taller screen-980:h-section">
			{/* <Navbar /> */}
			<Image src={image} fill alt="blog image" className="object-cover" />
		</header>
	);
};
export default Hero;
