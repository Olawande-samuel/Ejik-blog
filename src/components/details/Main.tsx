import { Post } from "@/lib/types";
import { calculateReadTime } from "@/lib/utils";
import { Calendar, Clock3 } from "lucide-react";
import moment from "moment";
import Container from "../Container";
import PostBody from "../PortableText";
import TextH2 from "../TextH2";
import { Badge } from "../ui/badge";

const Main = ({ content, title, _createdAt, categories }: Post) => {
	return (
		<div className="mt-12">
			<Container>
				<div>
					<div className="mb-8 flex gap-[77px] text-secondary">
						<span className="flex items-center gap-3 text-xs">
							<Clock3 size={16} color="#009BDB" /> {calculateReadTime(content)}
						</span>
						<span className="flex items-center gap-3 text-xs">
							<Calendar size={16} color="#009BDB" />{" "}
							{moment(_createdAt).format("MMMM DD, YYYY")}
						</span>
					</div>
					<div className="mb-8 flex gap-4">
						{categories?.map((category) => (
							<Badge
								className="h-6 bg-[#E8EAEB] text-accent-blue"
								key={category._id}
							>
								{category.title}
							</Badge>
						))}
					</div>
					<div className="mb-6">
						<TextH2
							value={title}
							className="text-5xl font-semibold text-secondary-dark"
						/>
					</div>
					<div className="blog_content mb-8">
						<PostBody body={content} />
					</div>
				</div>
			</Container>
		</div>
	);
};
export default Main;
