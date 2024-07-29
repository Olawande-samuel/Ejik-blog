import { Post } from "@/lib/types";
import { calculateReadTime, formatDate } from "@/lib/utils";
import { Calendar, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PostBody from "../PortableText";
import TextH2 from "../TextH2";
import { Card, CardContent, CardHeader } from "../ui/card";

interface Props extends Post {
	showInfo: boolean;
}

const CardFull = ({
	showInfo,
	title,
	slug,
	_createdAt,
	mainImage,
	content,
	author,
}: Props) => {
	return (
		<Card className="flex h-full flex-col border-none shadow-none ">
			<CardHeader className="relative h-[320px] p-0 sm:h-[500px]">
				<Image
					src={mainImage?.asset?.url}
					alt={title}
					fill
					className="object-cover"
				/>
			</CardHeader>
			<CardContent className="px-4 pt-8 sm:px-6">
				<div className="mb-8 flex flex-wrap gap-4 lg:gap-[70px]">
					<span className="flex items-center gap-2 text-sm text-secondary sm:text-base">
						<Calendar size={18} color="#EC1C24" />
						{formatDate(_createdAt)}
					</span>
					<span className="flex items-center gap-2 text-sm text-secondary sm:text-base">
						<Clock3 size={18} color="#EC1C24" /> {calculateReadTime(content)}
					</span>
				</div>
				<Link href={`/${slug?.current}`}>
					<TextH2
						value={title}
						className="mb-1 max-w-[90%] text-2xl leading-10 tracking-normal text-primary sm:mb-0 sm:text-2xl"
					/>
				</Link>
				{showInfo && (
					<>
						<div className="blog_content mb-6 h-[95px] overflow-hidden text-ellipsis text-[#3A3C3E]">
							<PostBody body={content} />
						</div>
						{author && (
							<p className="text-lg font-bold text-secondary">{author?.name}</p>
						)}
					</>
				)}
			</CardContent>
		</Card>
	);
};
export default CardFull;
