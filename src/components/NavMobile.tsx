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
		<section className="fixed inset-0 flex h-full flex-col bg-accent lg:hidden">
			<div className="flex justify-center">
				<X
					className="text-center text-white"
					size={60}
					onClick={() => setOpenNav(false)}
				/>
			</div>
			<div className="grid flex-1 place-items-center">
				<div className="">
					<Nav />
				</div>
				<div className="flex-1">
					<NavSelect isLight />
				</div>
			</div>
		</section>
	);
};
export default NavMobile;
