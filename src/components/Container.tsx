interface Props {
	children: React.ReactNode;
}
const Container = ({ children }: Props) => {
	return (
		<section className="h-full px-padded-sm sm:px-padded-md md:px-padded-lg 2xl:px-padded-xl">
			{children}
		</section>
	);
};
export default Container;
