import { Calendar, Clock3 } from "lucide-react";
import Image from "next/image";
import Text from "../Text";
import { Post } from "@/lib/types";
import { calculateReadTime, formatDate } from "@/lib/utils";
import Link from "next/link";

const BiteSizeCard = ({
	mainImage,
	title,
	slug,
	_createdAt,
	content,
}: Post) => {
	return (
		<Link href={`/${slug.current}`} className="flex items-center gap-2 pr-4">
			<div className="basis-1/4">
				<Image
					src={mainImage.asset.url}
					width={116}
					height={113}
					alt="decorative"
					className="max-w-full"
				/>
			</div>
			<div className="basis-3/4">
				<div className="flex gap-2  text-white">
					<span className="flex items-center gap-3 text-xs text-primary">
						<Clock3 size={12} color="#009BDB" /> {calculateReadTime(content)}
					</span>
					<span className="flex items-center gap-3 text-xs text-primary">
						<Calendar size={12} color="#009BDB" /> {formatDate(_createdAt)}
					</span>
				</div>
				<Text value={title} className="text-xl font-semibold text-primary" />
			</div>
		</Link>
	);
};
export default BiteSizeCard;
