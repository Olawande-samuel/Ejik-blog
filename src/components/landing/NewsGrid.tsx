import CardWithOverlay from "./Card";
import CardFull from "./CardFull";

const NewsGrid = () => {
	return (
		<section className="grid grid-cols-1 gap-9 lg:grid-cols-3 lg:grid-rows-2">
			<div className="lg:col-span-2 lg:row-span-3 ">
				<CardFull image="/images/medication.png" showInfo />
			</div>
			<div className="h-[420px] lg:col-span-1  lg:col-start-3">
				<CardWithOverlay image="/images/medication2.png" />
			</div>
			<div className="h-[420px] lg:col-span-1 lg:col-start-3 lg:row-start-2">
				<CardWithOverlay image="/images/medication3.png" />
			</div>
		</section>
	);
};
export default NewsGrid;
