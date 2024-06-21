"use client";

import Image from "next/image";
import Container from "./Container";
import Nav from "./Nav";
import { useState } from "react";
import { Menu } from "lucide-react";
import NavMobile from "./NavMobile";

const Navbar = () => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<section className="absolute inset-x-0 top-0 z-30 bg-transparent ">
			<nav>
				<Container>
					<div className="flex items-center justify-between   py-2">
						<div className="">
							<Image
								src="/images/logo.svg"
								width={130}
								height={40}
								alt="logo"
							/>
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
								<Menu size={42} color="#FFF" />
							</button>
							<div className="hidden rounded-md border-[0.52px] border-black px-4 lg:block  ">
								<select className="rounded-none border-0 bg-transparent text-xs text-black focus:ring-0 focus-visible:outline-none ">
									<option className="text-center text-red-900" value="">
										Chris Ejik Groups
									</option>
									<option className="text-center text-red-900" value="">
										Chris Ejik Pharmaceuticals
									</option>
									<option className="text-center text-red-900" value="">
										Chris Ejik International
									</option>
									<option className="text-center text-red-900" value="">
										Chris Ejik Engineering
									</option>
								</select>
							</div>
						</div>
					</div>
				</Container>
			</nav>
			{openNav && <NavMobile setOpenNav={setOpenNav} />}
		</section>
	);
};
export default Navbar;
