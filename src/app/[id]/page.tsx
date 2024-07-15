import { getContent } from "@/actions/actions";
import Hero from "@/components/Hero";
import Main from "@/components/details/Main";
import More from "@/components/details/More";
import MoreLoading from "@/components/details/MoreLoading";
import { imageUrlBuilder } from "@/lib/utils";
import { CONTENT_DETAIL_QUERY } from "@/query";
import { Suspense } from "react";
interface Props {
	params: { id: string };
}
export async function generateMetadata({ params }: Props) {
	const id = params.id;
	const data = await getContent(CONTENT_DETAIL_QUERY, { id });
	return {
		title: data.title,
		keyword: [...data.categories],
		author: [{ name: data?.author?.name }],
		openGraph: {
			title: data.title,
			description: "Blog content",
			type: "article",
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${data.slug.current}`,
			images: [
				{
					url: imageUrlBuilder(data?.mainImage.asset.url),
					width: 1200,
					height: 630,
				},
			],
		},
	};
}

const Details = async ({ params }: Props) => {
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
