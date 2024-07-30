"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Nav from "./Nav";
import { useState } from "react";
import { Menu } from "lucide-react";
import NavMobile from "./NavMobile";
import NavSelect from "./NavSelect";

const Navbar = () => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<section className="fixed inset-x-0 top-0 isolate z-30  bg-white/60 lg:backdrop-blur-sm">
			<nav>
				<Container>
					<div className="flex items-center justify-between   py-2">
						<div className="">
							<Link href="/">
								<Image
									src="/images/logo.svg"
									width={130}
									height={40}
									alt="logo"
								/>
							</Link>
						</div>
						<div className="hidden lg:block">
							<Nav />
						</div>
						<div className="">
							<button
								onClick={() => setOpenNav(!openNav)}
								className="relative size-8 cursor-pointer border-none text-2xl text-accent outline-none dark:text-accent lg:hidden"
							>
								<span className="sr-only">Open main menu</span>
								<Menu size={42} color="#EC1C24" />
							</button>
							<div className="hidden lg:block">
								<NavSelect isLight />
							</div>
						</div>
					</div>
				</Container>
			</nav>
			{openNav && <NavMobile setOpenNav={setOpenNav} openNav={openNav} />}
		</section>
	);
};
export default Navbar;
