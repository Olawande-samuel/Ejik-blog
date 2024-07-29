import { Post } from "@/lib/types";
import { client } from "@/lib/utils";
import { MetadataRoute } from "next";

const ALL_POSTS_QUERY = `*[_type == "post"]|order(_createdAt desc) {
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
	content[] {..., asset-> {
        url, _id
      }},
	_createdAt
  }
  `;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const getPosts = async () => {
		const data = await client.fetch(ALL_POSTS_QUERY);
		return data;
	};

	const posts: Post[] = await getPosts();

	const postsUrls = posts.map((post) => ({
		url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${post.slug.current}`,
		lastModified: new Date(post._createdAt),
	}));
	return [
		{
			url: process.env.NEXT_PUBLIC_WEBSITE_URL as string,
			lastModified: new Date("2024-07-29"),
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/news` as string,
			lastModified: new Date("2024-07-29"),
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/search` as string,
			lastModified: new Date("2024-07-29"),
		},
		...postsUrls,
	];
}
