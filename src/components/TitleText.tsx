import { cn } from "@/lib/utils";

interface Props {
	value: string;
	className?: string;
}
const TitleText = ({ value, className }: Props) => {
	return (
		<h1 className={cn("text-5xl font-bold  lg:text-7xl", className)}>
			{value}
		</h1>
	);
};
export default TitleText;
