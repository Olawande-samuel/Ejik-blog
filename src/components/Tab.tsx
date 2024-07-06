import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Tab = ({
	title,
	selected,
	onClick,
}: {
	title: string;
	selected: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
	return (
		<Button
			onClick={onClick}
			className={cn(
				"py-2 px-[19px] text-gray-500 font-medium bg-transparent hover:bg-[#DFDFDF40] hover:text-black",
				selected && "bg-[#DFDFDF40] rounded-md text-primary",
			)}
		>
			{title}
		</Button>
	);
};
export default Tab;
