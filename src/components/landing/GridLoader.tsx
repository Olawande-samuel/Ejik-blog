import { Skeleton } from "../ui/skeleton";

const GridLoader = () => {
	return (
		<section className="grid grid-cols-1 gap-9 lg:grid-cols-3 lg:grid-rows-2">
			{Array(3)
				.fill(1)
				.map((_, index: number) =>
					index === 0 ? (
						<div
							className="min-h-[420px] lg:col-span-2 lg:row-span-3"
							key={index}
						>
							<div className="h-full space-y-3">
								<Skeleton className="h-3/5 w-full" />
								<div className="h-2/5 space-y-3">
									<Skeleton className="h-10 w-full" />
									<Skeleton className="h-10 w-[70%]" />
									<Skeleton className="h-5 w-3/5" />
								</div>
							</div>
						</div>
					) : (
						<div
							className="h-[420px] lg:col-span-1 lg:col-start-3 odd:lg:row-start-2"
							key={index}
						>
							<Skeleton className="size-full" />
						</div>
					),
				)}
		</section>
	);
};
export default GridLoader;
