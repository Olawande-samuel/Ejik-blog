import { X } from "lucide-react";
import Nav from "./Nav";
import React, { SetStateAction } from "react";
import NavSelect from "./NavSelect";

const NavMobile = ({
	setOpenNav,
}: {
	setOpenNav: React.Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<section className="fixed inset-0 isolate flex h-full flex-col bg-white/60 backdrop-blur-lg lg:hidden">
			<div className="flex justify-center">
				<X
					className="text-center text-black"
					size={60}
					onClick={() => setOpenNav(false)}
				/>
			</div>
			<div className="grid flex-1 place-items-center">
				<div className="">
					<Nav />
				</div>
				<div className="flex-1">
					<NavSelect isLight={false} />
				</div>
			</div>
		</section>
	);
};
export default NavMobile;
