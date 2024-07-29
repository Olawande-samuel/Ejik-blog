/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "@sanity/client";
import moment from "moment";
import urlBuilder from "@sanity/image-url";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_KEY,
	dataset: "production",
	apiVersion: "2024-03-11",
	useCdn: process.env.NODE_ENV === "development" ? false : true,
});

export function calculateReadTime(text: any[]) {
	const wordsPerMinute = 225;
	if (text) {
		const body = text
			.map((block) =>
				block?.children?.map((child: any) => child.text).join(" "),
			)
			.join(" ");
		const words = body.trim().split(/\s+/).length;
		const readTime = Math.ceil(words / wordsPerMinute);

		return readTime + " mins read";
	}
	return "";
}

export function formatDate(date: string) {
	if (date) {
		return moment(date).format("MMMM DD, YYYY");
	}
	return "";
}

export function imageUrlBuilder(image: string) {
	if (image) {
		const url = urlBuilder(client)
			.image(image)
			.width(1200)
			.height(630)
			.auto("format")
			.url();
		return url;
	}
	return null;
}
// export function postTransformer(post: any): Post {
// 	if (post) {
// 		return {
// 			createdAt: post._createdAt,
// 			id: post._id,
// 			body: post.body,
// 			mainImage: post.mainImage,
// 			slug: post.slug.current,
// 			title: post.title,
// 			categories: post.categories,
// 			author: post.author,
// 		};
// 	}
// 	return {
// 		title: "",
// 		slug: "",
// 		categories: "",
// 		createdAt: "",
// 		mainImage: "",
// 		id: "",
// 		body: "",
// 		author: "",
// 	};
// }
