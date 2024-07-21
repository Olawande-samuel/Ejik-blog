"use client";

import Endpoints from "@/lib/API";
import { ALL_POSTS_QUERY, ALL_POSTS_QUERY_BY_ID_IN_CATEGORIES } from "@/query";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import CardWithOverlay from "./Card";
import CardFull from "./CardFull";
import GridLoader from "./GridLoader";

const NewsGrid = () => {
	const searchParams = useSearchParams();
	const selected = searchParams.get("category");
	const QUERY = new Endpoints();

	const query = useQuery({
		queryKey: ["posts", selected],
		queryFn: () =>
			selected === "View All" || !selected
				? QUERY.getPosts(ALL_POSTS_QUERY, { _id: "1" })
				: QUERY.getPosts(ALL_POSTS_QUERY_BY_ID_IN_CATEGORIES, {
						_id: selected as string,
					}),
	});
	return (
		<>
			{query?.isLoading ? (
				<GridLoader />
			) : (
				<section className="grid grid-cols-1 gap-9 lg:grid-cols-3 lg:grid-rows-2">
					{query?.data?.slice(0, 3).map((post: any, index: number) =>
						index === 0 ? (
							<div className="lg:col-span-2 lg:row-span-3" key={post._id}>
								<CardFull
									_createdAt={post?._createdAt}
									_id={post?._id}
									content={post?.content}
									mainImage={post?.mainImage}
									slug={post?.slug}
									title={post?.title}
									showInfo
									categories={post?.categories}
									author={post?.author}
								/>
							</div>
						) : (
							<div
								className="h-[420px] lg:col-span-1 lg:col-start-3 odd:lg:row-start-2"
								key={post._id}
							>
								<CardWithOverlay {...post} />
							</div>
						),
					)}
				</section>
			)}
		</>
	);
};
export default NewsGrid;
