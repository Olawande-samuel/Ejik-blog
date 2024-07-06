import Container from "@/components/Container";
import TitleText from "@/components/TitleText";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<section className="mt-32">
			<Container>
				<div className="pb-10">
					<TitleText
						className="mb-10 font-medium text-primary"
						value="News and Events"
					/>
					<div className="flex">
						<Skeleton className="h-[70px] w-full" />
					</div>
					<section className="flex flex-col gap-4 py-8">
						{Array(5)
							.fill(1)
							.map((_, index) => (
								<div className="flex flex-col gap-4 sm:flex-row" key={index}>
									<Skeleton className="size-[200px]" />
									<div className="flex flex-1 flex-col gap-4">
										<Skeleton className="h-[40px] w-full" />
										<Skeleton className="h-[150px] w-full" />
									</div>
								</div>
							))}
					</section>
				</div>
			</Container>
		</section>
	);
};
export default Loading;
