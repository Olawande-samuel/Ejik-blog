import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Text from "../Text";
import { Calendar, Clock3 } from "lucide-react";
import TextH2 from "../TextH2";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface Props {
	btnClassName?: string;
	textClassName?: string;
	image: string;
}

const CardWithOverlay = ({ textClassName, image }: Props) => {
	return (
		<Link href="/1" className="h-full min-h-[300px]">
			<Card className="h-full min-h-[300px] rounded-none">
				<CardContent className="relative h-full bg-primary p-0">
					<Image
						src={image}
						fill
						alt="decorative"
						className="rounded-xl object-cover opacity-65"
					/>
					<div className="absolute inset-0 ">
						<div className="flex h-full flex-col p-6 text-white">
							<div className="flex gap-4">
								<Badge className="h-6 bg-[#E8EAEB] text-accent-blue">
									Pharmaceutical
								</Badge>
								<Badge className="h-6 bg-[#E8EAEB] text-accent-blue">
									Health Care
								</Badge>
							</div>
							<div className="mt-auto flex flex-1 flex-col justify-end">
								<TextH2
									value="Medication Safety and Error Prevention"
									className="text-4xl"
								/>
								<div className="flex flex-wrap items-end justify-between gap-4">
									<Text className={textClassName} value="Joshua Jackson" />
									<div className="flex gap-[77px] text-white">
										<span className="flex items-center gap-3 text-xs">
											<Clock3 size={16} color="#FFF" /> 2 mins read
										</span>
										<span className="flex items-center gap-3 text-xs">
											<Calendar size={16} color="#FFF" /> April 14, 2024
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
