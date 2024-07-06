import { Skeleton } from "../ui/skeleton";

const MoreLoading = () => {
	return (
		<div>
			<div className="mt-[300px]">
				<Skeleton className="mb-8 h-[70px] w-[300]" />
				<div className="space-y-6">
					{Array(3)
						.fill(1)
						.map((_, index) => (
							<div className="flex flex-col gap-4 sm:flex-row" key={index}>
								<Skeleton className="size-[100px]" />
								<div className="flex flex-1 flex-col gap-4">
									<Skeleton className="h-[20px] w-full" />
									<Skeleton className="h-[65px] w-full" />
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
export default MoreLoading;
