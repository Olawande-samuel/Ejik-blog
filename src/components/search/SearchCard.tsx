import { Post } from "@/lib/types";
import { calculateReadTime, formatDate } from "@/lib/utils";
import { Calendar, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PostBody from "../PortableText";
import Text from "../Text";

const SearchCard = ({ mainImage, title, slug, _createdAt, body }: Post) => {
	return (
		<Link href={`/${slug.current}`} className="flex gap-2 pr-4 sm:gap-5">
			<div className="basis-1/4">
				<Image
					src={mainImage.asset.url}
					width={256}
					height={300}
					alt="decorative"
					className="h-full max-w-full object-cover"
				/>
			</div>
			<div className="basis-3/4">
				<Text
					value={title}
					className="mb-2 text-xl font-semibold text-primary"
				/>
				<div className="flex gap-2  text-white">
					<span className="flex items-center gap-3 text-xs text-primary">
						<Clock3 size={12} color="#009BDB" /> {calculateReadTime(body)}
					</span>
					<span className="flex items-center gap-3 text-xs text-primary">
						<Calendar size={12} color="#009BDB" /> {formatDate(_createdAt)}
					</span>
				</div>
				<div className="blog_content mb-6 h-[95px] overflow-hidden text-ellipsis text-[#3A3C3E]">
					<PostBody body={body} />
				</div>
			</div>
		</Link>
	);
};
export default SearchCard;
