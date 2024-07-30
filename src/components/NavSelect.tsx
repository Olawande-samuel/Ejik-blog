"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const NavSelect = ({ isLight }: { isLight: boolean }) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		if (value === "1") {
			window.open(process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL, "_blank");
		}
		if (value === "2") {
			window.open(process.env.NEXT_PUBLIC_PHARMACY_WEBSITE_URL, "_blank");
		}
		if (value === "3") {
			window.open(process.env.NEXT_PUBLIC_INTERNATIONAL_WEBSITE_URL, "_blank");
		}
	}, [value]);
	return (
		<div
			className={cn(
				"rounded-md border-[0.52px] mb-4 lg:mb-0 border-white px-0 lg:px-4",
				isLight && "border-white lg:border-primary",
			)}
		>
			<select
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setValue(e.target.value)
				}
				value={value}
				className={cn(
					"rounded-none border-0 bg-transparent text-xs text-white focus:ring-0 focus-visible:outline-none",
					isLight && "lg:text-primary lg:border-primary",
				)}
			>
				<option className="text-center text-red-900" value="1">
					Chris Ejik Groups
				</option>
				<option
					// href="https://ejik-pharmacy.vercel.app/"
					className="text-center text-red-900"
					value="2"
				>
					Chris Ejik Pharmaceuticals
				</option>
				<option
					className="text-center text-red-900"
					value="3"
					// href="https://ejik-international.vercel.app/"
				>
					Chris Ejik International
				</option>
				<option
					value="4"
					className="text-center text-red-900"
					// href="https://ejik-pharmacy.vercel.app/"
				>
					Chris Ejik Engineering
				</option>
			</select>
		</div>
	);
};
export default NavSelect;
