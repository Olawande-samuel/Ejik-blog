import Navbar from "@/components/Navbar";

const NotFound = () => {
	return (
		<section>
			<div className="mb-20">
				<Navbar />
			</div>
			<div
				className="flex min-h-screen flex-col items-center
             justify-center"
			>
				<h1 className="text-center text-7xl font-extrabold text-accent">404</h1>
				<h2 className="text-center text-4xl text-accent">
					Page Does Not Exist
				</h2>
			</div>
		</section>
	);
};
export default NotFound;
