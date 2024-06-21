import { X } from "lucide-react";
import Nav from "./Nav";
import React, { SetStateAction } from "react";

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
					<div className="rounded-md border-[0.52px] border-white px-4  ">
						<select className="rounded-none border-0 bg-transparent text-xs text-white focus:ring-0">
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
		</section>
	);
};
export default NavMobile;
