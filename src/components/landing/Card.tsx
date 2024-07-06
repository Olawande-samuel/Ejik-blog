import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Text from "../Text";
import { Calendar, Clock3 } from "lucide-react";
import TextH2 from "../TextH2";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Post } from "@/lib/types";
import { calculateReadTime } from "@/lib/utils";
import moment from "moment";

interface Props extends Post {
	btnClassName?: string;
	textClassName?: string;
}

const CardWithOverlay = ({
	textClassName,
	mainImage,
	categories,
	slug,
	title,
	author,
	_createdAt,
	body,
}: Props) => {
	return (
		<Link href={`/${slug?.current}`} className="h-full min-h-[300px]">
			<Card className="h-full min-h-[300px] rounded-none">
				<CardContent className="relative h-full bg-primary p-0">
					<Image
						src={mainImage?.asset?.url}
						fill
						alt="decorative"
						className="rounded-xl object-cover opacity-65"
					/>
					<div className="absolute inset-0 ">
						<div className="flex h-full flex-col p-6 text-white">
							<div className="flex gap-4">
								{categories?.map((category) => (
									<Badge
										className="h-6 bg-[#E8EAEB] text-accent-blue"
										key={category._id}
									>
										{category.title}
									</Badge>
								))}
							</div>
							<div className="mt-auto flex flex-1 flex-col justify-end">
								<TextH2 value={title} className="text-4xl" />
								<div className="flex flex-wrap items-end justify-between gap-4">
									{author && (
										<Text className={textClassName} value={author.name} />
									)}
									<div className="flex gap-[77px] text-white">
										<span className="flex items-center gap-3 text-xs">
											<Clock3 size={16} color="#FFF" />{" "}
											{calculateReadTime(body)}
										</span>
										<span className="flex items-center gap-3 text-xs">
											<Calendar size={16} color="#FFF" />{" "}
											{moment(_createdAt).format("MMMM DD, YYYY")}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};
export default CardWithOverlay;
