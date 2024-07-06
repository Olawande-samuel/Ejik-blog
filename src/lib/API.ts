/* eslint-disable @typescript-eslint/no-explicit-any */
import { getContent } from "@/actions/actions";

export default class Endpoints {
	async getPosts(query: string, params: { [key: string]: string }) {
		try {
			return await getContent(query, params);
		} catch (error: any) {
			throw new Error(error.message ?? "Something went wrong");
		}
	}
}
