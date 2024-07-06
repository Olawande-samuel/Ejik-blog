import Container from "@/components/Container";
import Tabs from "@/components/Tabs";
import TitleText from "@/components/TitleText";
import { Suspense } from "react";

import NewsList from "@/components/news/NewsList";
import { Skeleton } from "@/components/ui/skeleton";

const News = () => {
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
				<Suspense fallback={<p>Loading...</p>}>
					<NewsList />
				</Suspense>
			</Container>
		</section>
	);
};
export default News;
