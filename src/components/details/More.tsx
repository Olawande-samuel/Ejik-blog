import { getContent } from "@/actions/actions";
import TextH2 from "../TextH2";
import BiteSizeCard from "./BiteSizeCard";
import { Post } from "@/lib/types";

const CONTENT_QUERY = `*[_type == "post" && $id != slug.current] {
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
	body,
	_createdAt
  }
  `;
const More = async ({ params }: { params: { id: string } }) => {
	const data = await getContent(CONTENT_QUERY, { id: params.id });
	return (
		<div>
			<div className="mt-[300px]">
				<TextH2
					value="Read More"
					className="mb-7 text-3xl font-medium text-primary underline"
				/>
				<div className="space-y-6">
					{data?.map((post: Post) => <BiteSizeCard key={post._id} {...post} />)}
				</div>
			</div>
		</div>
	);
};
export default More;
