"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchInput = () => {
	const router = useRouter();
	const [search, setSearch] = useState("");

	function onSearch(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		router.push("/search?q=" + search);
	}
	return (
		<div className="flex items-center gap-2">
			<Input
				type="search"
				placeholder="Search"
				Icon={Search}
				className="shadow-md"
				value={search}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setSearch(e.target.value)
				}
			/>
			<Button size="icon" onClick={onSearch} className="shadow-md">
				<Search />
			</Button>
		</div>
	);
};
export default SearchInput;
