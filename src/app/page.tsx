import Container from "@/components/Container";
import Text from "@/components/Text";
import AllStories from "@/components/landing/AllStories";

export default function Home() {
	return (
		<section className="mt-32">
			<Container>
				<Text value="News & Events" className="mb-3 text-accent" />
			</Container>
			<div className="mb-16 md:mb-[120px] lg:mb-[210px]">
				<AllStories />
			</div>
		</section>
	);
}
