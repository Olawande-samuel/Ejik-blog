import { getContent } from "@/actions/actions";
import Hero from "@/components/Hero";
import Main from "@/components/details/Main";
import More from "@/components/details/More";
import MoreLoading from "@/components/details/MoreLoading";
import { CONTENT_DETAIL_QUERY } from "@/query";
import { Suspense } from "react";

const Details = async ({ params }: { params: { id: string } }) => {
	const data = await getContent(CONTENT_DETAIL_QUERY, { id: params.id });
	return (
		<section>
			<Hero image={data?.mainImage.asset.url} />
			<div className="flex">
				<div className="lg:basis-2/3">
					<Main {...data} />
				</div>
				<div className="hidden md:basis-1/3 lg:block">
					<Suspense fallback={<MoreLoading />}>
						<More params={{ id: params.id }} />
					</Suspense>
				</div>
			</div>
		</section>
	);
};
export default Details;
