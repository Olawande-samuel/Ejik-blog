"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getContent } from "@/actions/actions";
import { ALL_CATEGORIES } from "@/query";
import SearchInput from "./SearchInput";
import Tab from "./Tab";

const data = [
	{
		_id: "1",
		title: "View All",
	},
];

const Tabs = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const selected = searchParams.get("category");

	const query = useQuery({
		queryKey: ["get categories"],
		queryFn: () => getContent(ALL_CATEGORIES),
	});

	return (
		<div className="flex flex-wrap gap-6">
			<Tab
				{...data[0]}
				selected={data[0].title.toLowerCase() === selected?.toLowerCase()}
				onClick={() => router.push(`?category=${data[0].title}`)}
				key={data[0]._id}
			/>
			{query?.data?.map((item: { title: string; _id: string }) => {
				const isSelected = item.title.toLowerCase() === selected?.toLowerCase();
				return (
					<Tab
						{...item}
						selected={isSelected}
						onClick={() => router.push(`?category=${item.title}`)}
						key={item._id}
					/>
				);
			})}
			<SearchInput />
		</div>
	);
};
export default Tabs;
