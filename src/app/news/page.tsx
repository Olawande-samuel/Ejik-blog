"use client";

import Container from "@/components/Container";
import Tabs from "@/components/Tabs";
import TitleText from "@/components/TitleText";
import SearchCard from "@/components/search/SearchCard";
import { Post } from "@/lib/types";
import { Suspense, useEffect, useState } from "react";

import Pagination from "@/components/Pagination";
import Endpoints from "@/lib/API";
import {
	ALL_POSTS_QUERY,
	ALL_POSTS_QUERY_BY_ID_IN_CATEGORIES,
	ALL_POSTS_QUERY_BY_ID_IN_CATEGORIES_COUNT,
	ALL_POSTS_QUERY_COUNT,
	NEXT_POSTS_QUERY,
	NEXT_POSTS_QUERY_WITH_CATEGORY_ID,
	PREV_POSTS_QUERY,
	PREV_POSTS_QUERY_WITH_CATEGORY_ID,
} from "@/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const News = () => {
	let pageSearchQuery = NEXT_POSTS_QUERY;
	let pageSearchQueryWithId = NEXT_POSTS_QUERY_WITH_CATEGORY_ID;
	const QUERY = new Endpoints();
	const searchParams = useSearchParams();
	const selected = searchParams.get("category");
	const currentPage = searchParams.get("page");
	const [lastPostCreatedAt, setLastPostCreatedAt] = useState<string | null>(
		null,
	);
	const [currentPageNumber, setCurrentPageNumber] = useState(1);

	const router = useRouter();

	const query = useQuery({
		queryKey: ["fetch news posts", currentPage],
		queryFn:
			selected === "View All" || selected === null
				? () =>
						currentPage && Number(currentPage) > 1 && lastPostCreatedAt
							? QUERY.getPosts(pageSearchQuery, {
									last_post_createdAt: lastPostCreatedAt as string,
								})
							: QUERY.getPosts(ALL_POSTS_QUERY, {
									_id: selected as string,
								})
				: () => {
						return currentPage && Number(currentPage) > 1 && lastPostCreatedAt
							? QUERY.getPosts(pageSearchQueryWithId, {
									_id: selected as string,
									last_post_createdAt: lastPostCreatedAt as string,
								})
							: QUERY.getPosts(ALL_POSTS_QUERY_BY_ID_IN_CATEGORIES, {
									_id: selected as string,
								});
					},
	});

	const queryCount = useQuery({
		queryKey: ["fetch news posts count", selected],
		queryFn:
			selected === "View All" || selected === null
				? () =>
						QUERY.getPosts(ALL_POSTS_QUERY_COUNT, {
							_id: selected as string,
						})
				: () =>
						QUERY.getPosts(ALL_POSTS_QUERY_BY_ID_IN_CATEGORIES_COUNT, {
							_id: selected as string,
						}),
	});

	useEffect(() => {
		if (query?.data) {
			setLastPostCreatedAt(query?.data[query?.data.length - 1]?._createdAt);
		}
		return () => setLastPostCreatedAt(null);
	}, [query, currentPage]);

	async function gotoNextPage(next: number) {
		const page = next + 1;
		router.push(`?category=${selected}&page=${page}`);
		if (selected === "View All") {
			if (page < currentPageNumber) {
				pageSearchQuery = PREV_POSTS_QUERY;
				setLastPostCreatedAt(query?.data[0]?._createdAt);
			} else {
				pageSearchQuery = NEXT_POSTS_QUERY;
			}
		} else {
			if (page < currentPageNumber) {
				pageSearchQueryWithId = PREV_POSTS_QUERY_WITH_CATEGORY_ID;
				setLastPostCreatedAt(query?.data[0]?._createdAt);
			} else {
				pageSearchQueryWithId = NEXT_POSTS_QUERY_WITH_CATEGORY_ID;
			}
		}

		setCurrentPageNumber(page);
	}
	return (
		<section className="mt-32">
			<Container>
				<div className="pb-10">
					<TitleText
						className="mb-10 font-medium text-primary"
						value="News and Events"
					/>
					<Suspense fallback={<Skeleton className="h-10 w-full" />}>
						<Tabs />
					</Suspense>
				</div>
				<section className="flex flex-col gap-4 py-8">
					{query?.isLoading
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
				<Pagination
					numberOfPosts={queryCount?.data ?? 0}
					gotoNextPage={gotoNextPage}
				/>
			</Container>
		</section>
	);
};
export default News;
// on selected change, call the query without regard for lastPostCreatedAt or current page
// if selected remains the same and lastPostCreatedAt and currentPage exist call the first one else call the second one
