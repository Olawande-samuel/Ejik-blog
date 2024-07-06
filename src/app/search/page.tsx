import Container from "@/components/Container";
import SearchInput from "@/components/SearchInput";
import TitleText from "@/components/TitleText";
import SearchContent from "@/components/search/SearchContent";
import Endpoints from "@/lib/API";
import { SEARCH_CONTENT_QUERY, SEARCH_CONTENT_QUERY_COUNT } from "@/query";
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";

const SearchPage = async ({
	searchParams,
}: {
	searchParams: { q: string };
}) => {
	const queryClient = new QueryClient();
	const QUERY = new Endpoints();

	await queryClient.prefetchQuery({
		queryKey: ["search content", searchParams.q],
		queryFn: () => QUERY.getPosts(SEARCH_CONTENT_QUERY, searchParams),
	});
	await queryClient.prefetchQuery({
		queryKey: ["search content count", searchParams.q],
		queryFn: () => QUERY.getPosts(SEARCH_CONTENT_QUERY_COUNT, searchParams),
	});

	return (
		<section className="mt-32">
			<Container>
				<div className="pb-10">
					<TitleText
						className="mb-10 font-medium text-primary"
						value="Search Results"
					/>
					<div className="mb-8 flex">
						<SearchInput />
					</div>
					<HydrationBoundary state={dehydrate(queryClient)}>
						<SearchContent searchParams={searchParams} />
					</HydrationBoundary>
				</div>
			</Container>
		</section>
	);
};
export default SearchPage;
