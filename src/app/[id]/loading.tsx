import MoreLoading from "@/components/details/MoreLoading";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
	return (
		<section>
			<Skeleton className="h-[70vh] w-full" />
			<div className="flex gap-4">
				<div className="mt-10 space-y-4 lg:basis-2/3">
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-20 w-full" />
					<Skeleton className="h-40 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-40 w-full" />
					<Skeleton className="h-10 w-[70%]" />
				</div>
				<div className="hidden md:basis-1/3 lg:block">
					<MoreLoading />
				</div>
			</div>
		</section>
	);
};
export default loading;
