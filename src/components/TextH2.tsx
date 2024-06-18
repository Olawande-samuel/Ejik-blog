import { cn } from "@/lib/utils";

const TextH2 = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-white pb-2 text-5xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {value}
    </h2>
  );
};
export default TextH2;
