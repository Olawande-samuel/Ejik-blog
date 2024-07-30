import Nav from "./Nav";
import React, { SetStateAction } from "react";
import NavSelect from "./NavSelect";

const NavMobile = ({
	setOpenNav,
	openNav,
}: {
	setOpenNav: React.Dispatch<SetStateAction<boolean>>;
	openNav: boolean;
}) => {
	return (
		<div>
			{/* Hamburger menu button */}

			{/* Sidebar */}
			<div
				className={` fixed left-0 top-0 z-50 h-full w-64 bg-accent p-5 text-white transition-transform duration-300 ease-in-out${
					openNav ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<h2 className="mb-5 text-3xl font-bold">Menu</h2>
				<div className="my-6 flex-1">
					<NavSelect isLight={false} />
				</div>
				<Nav />
			</div>

			{/* Overlay */}
			{openNav && (
				<div
					className="fixed inset-0 z-40 bg-black/50"
					onClick={() => setOpenNav(false)}
				></div>
			)}
		</div>
	);
};
export default NavMobile;
