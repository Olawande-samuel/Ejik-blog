import Container from "../Container";
import Tabs from "../Tabs";
import Endpoints from "@/lib/API";
import { ALL_POSTS_QUERY } from "@/query";
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";
import Link from "next/link";
import TitleText from "../TitleText";
import NewsGrid from "./NewsGrid";
import PharmacyHealthCare from "./PharmacyHealthCare";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

const AllStories = async () => {
	const queryClient = new QueryClient();
	const QUERY = new Endpoints();

	await queryClient.prefetchQuery({
		queryKey: ["posts"],
		queryFn: () => QUERY.getPosts(ALL_POSTS_QUERY, { _id: "1" }),
	});
	return (
		<div>
			<Container>
				<TitleText
					value="All our stories"
					className="mb-14 font-medium text-primary"
				/>
				<Suspense fallback={<Skeleton className="h-10 w-full" />}>
					<Tabs />
				</Suspense>
				<HydrationBoundary state={dehydrate(queryClient)}>
					<div className="mb-36 mt-20">
						<Suspense fallback={<p>Loading...</p>}>
							<NewsGrid />
						</Suspense>
					</div>
					<div>
						<PharmacyHealthCare />
					</div>
				</HydrationBoundary>
				<div className="mt-20 flex justify-center">
					<Link
						href="/news?category=View All&page=1"
						className="rounded-md border border-accent px-8 py-2 text-accent hover:bg-accent hover:text-white"
					>
						Show More
					</Link>
				</div>
			</Container>
		</div>
	);
};
export default AllStories;
