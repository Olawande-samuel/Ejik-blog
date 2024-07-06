import { PortableText } from "next-sanity";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { client } from "@/lib/utils";

interface ImageCompProps {
	value: {
		_type: "image";
		_key: string;
		asset: {
			url: string;
			_id: string;
		};
	};
	isInline: boolean;
}
const PostImageComponent = ({ value, isInline }: ImageCompProps) => {
	const { width, height } = getImageDimensions(value);
	return (
		<img
			src={urlBuilder(client)
				.image(value?.asset?._id)
				.width(isInline ? 100 : 800)
				.fit("max")
				.auto("format")
				.url()}
			alt={""}
			loading="lazy"
			style={{
				display: isInline ? "inline-block" : "block",
				aspectRatio: width / height,
			}}
		/>
	);
};
const portableComponents = {
	types: {
		image: PostImageComponent,
	},
};
const PostBody = ({ body }: { body: any[] }) => {
	return <PortableText value={body} components={portableComponents} />;
};
export default PostBody;
