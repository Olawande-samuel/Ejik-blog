"use client";

import urlBuilder from "@sanity/image-url";

import Endpoints from "@/lib/API";
import { Post } from "@/lib/types";
import {
	NEXT_SEARCH_CONTENT_QUERY,
	PREV_SEARCH_CONTENT_QUERY,
	SEARCH_CONTENT_QUERY,
	SEARCH_CONTENT_QUERY_COUNT,
} from "@/query";
import { useQuery } from "@tanstack/react-query";
import Text from "../Text";
import SearchCard from "./SearchCard";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import { client } from "@/lib/utils";

const SearchContent = ({ searchParams }: { searchParams: { q: string } }) => {
	let SEARCH_CONTENT_QUERY_TYPE: string = NEXT_SEARCH_CONTENT_QUERY;

	const [lastPostCreatedAt, setLastPostCreatedAt] = useState();
	const [currentPageNumber, setCurrentPageNumber] = useState(1);

	const queryParams = useSearchParams();
	const currentPage = queryParams.get("page");

	const router = useRouter();
	const QUERY = new Endpoints();

	const query = useQuery({
		queryKey: ["search content", searchParams.q, currentPage],
		queryFn: () =>
			lastPostCreatedAt && Number(currentPage)
				? QUERY.getPosts(SEARCH_CONTENT_QUERY_TYPE, {
						q: searchParams.q,
						last_post_createdAt: lastPostCreatedAt,
					})
				: QUERY.getPosts(SEARCH_CONTENT_QUERY, searchParams),
	});
	const countQuery = useQuery({
		queryKey: ["search content count", searchParams.q],
		queryFn: () => QUERY.getPosts(SEARCH_CONTENT_QUERY_COUNT, searchParams),
	});

	useEffect(() => {
		if (query?.data?.length > 0) {
			setLastPostCreatedAt(query.data[query.data.length - 1]._createdAt);
		}
	}, [query, currentPage]);

	function gotoNextPage(next: number) {
		const page = next + 1;
		router.push(`?q=${searchParams.q}&page=${page}`);
		if (page < currentPageNumber) {
			setLastPostCreatedAt(query.data[0]._createdAt);
			SEARCH_CONTENT_QUERY_TYPE = PREV_SEARCH_CONTENT_QUERY;
		} else {
			SEARCH_CONTENT_QUERY_TYPE = NEXT_SEARCH_CONTENT_QUERY;
		}
		setCurrentPageNumber(page);
	}
	if (query?.data?.[0]?.mainImage.asset.url) {
		console.log(
			urlBuilder(client)
				.image(query?.data?.[0]?.mainImage.asset.url)
				.width(1200)
				.height(630)
				.auto("format")
				.url(),
		);
	}
	return (
		<>
			<Text
				value={`Found ${countQuery?.data ?? 0} results for search`}
				className="text-primary"
			/>
			<section className="flex flex-col gap-4 py-8">
				{query.isLoading
					? Array(10)
							.fill(1)
							.map((_, index) => (
								<div className="flex flex-col gap-4 sm:flex-row" key={index}>
									<Skeleton className="size-[200px]" />
									<div className="flex flex-1 flex-col gap-4">
										<Skeleton className="h-[40px] w-full" />
										<Skeleton className="h-[150px] w-full" />
									</div>
								</div>
							))
					: query?.data?.map((post: Post) => (
							<SearchCard {...post} key={post._id} />
						))}
			</section>
			<section>
				<Pagination
					numberOfPosts={countQuery?.data}
					gotoNextPage={gotoNextPage}
				/>
			</section>
		</>
	);
};
export default SearchContent;
