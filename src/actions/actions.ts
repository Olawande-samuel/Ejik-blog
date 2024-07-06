"use server";
import { client } from "@/lib/utils";

export async function getContent(CONTENT_QUERY: string, params = {}) {
	const content = await client.fetch(CONTENT_QUERY, params, {
		next: {
			revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
		},
	});
	return content;
}
