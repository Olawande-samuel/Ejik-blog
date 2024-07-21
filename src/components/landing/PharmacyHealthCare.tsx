"use client";

import Endpoints from "@/lib/API";
import { Post } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import TextH2 from "../TextH2";
import CardWithOverlay from "./Card";
import CardFull from "./CardFull";
import GridLoader from "./GridLoader";

const CONTENT_QUERY = `*["Pharmaceutical" in categories[]->.title || "Health Care" in categories[]->.title ]|order(_createdAt desc)[0...10] {	
author-> {name, _id},
mainImage {
asset-> {
url,
assetId
}
},
slug,
title,
categories[]-> {
_id,
title
},
_id,
content,
_createdAt
}
  `;

const PharmacyHealthCare = () => {
	const QUERY = new Endpoints();

	const query = useQuery({
		queryKey: ["fetch pharmaceutical posts"],
		queryFn: () => QUERY.getPosts(CONTENT_QUERY, {}),
	});

	return (
		<>
			{query?.isLoading ? (
				<GridLoader />
			) : (
				<section>
					<div className="mb-10">
						<TextH2 value="Pharmacy & Health Care" className="text-primary" />
					</div>
					<div className="flex flex-col gap-9 lg:flex-row">
						<section className="lg:basis-[65%]">
							<div className="flex flex-col gap-9 lg:grid lg:grid-cols-2">
								{query?.data?.slice(0, 5).map((item: Post, index: number) =>
									index === 0 ? (
										<div className="lg:col-span-2" key={item._id}>
											<CardFull {...item} showInfo={false} />
										</div>
									) : (
										<div className="h-[420px]" key={item._id}>
											<CardWithOverlay {...item} />
										</div>
									),
								)}
							</div>
						</section>
						<aside className="lg:basis-[35%]">
							<div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-1">
								{query?.data?.slice(5, 8).map((item: Post) => (
									<div className="h-[460px] max-w-[460px]" key={item._id}>
										<CardWithOverlay {...item} />
									</div>
								))}
							</div>
						</aside>
					</div>
				</section>
			)}
		</>
	);
};
export default PharmacyHealthCare;
