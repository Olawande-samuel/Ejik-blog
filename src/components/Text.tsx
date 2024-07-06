import { cn } from "@/lib/utils";

interface Props {
	value: string;
	className?: string;
}
const Text = ({ value, className }: Props) => {
	// md:w-10/12
	return (
		<p
			className={cn(
				"text-white tracking-[0.21px] leading-7 text-lg ",
				className,
			)}
		>
			{value}
		</p>
	);
};
export default Text;
