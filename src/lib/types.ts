/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Post {
	author: { name: string; _id: null };
	mainImage: {
		asset: {
			url: string;
			assetId: string;
		};
	};
	slug: {
		current: string;
		_type: string;
	};
	title: string;
	categories: {
		_id: string;
		title: string;
	}[];
	_createdAt: string;
	_id: string;
	body: any[];
}
