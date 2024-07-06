import ReactPaginate from "react-paginate";

const Pagination = ({
	numberOfPosts,
	gotoNextPage,
}: {
	numberOfPosts: number;
	gotoNextPage: (page: number) => void;
}) => {
	const handlePageClick = (event: { selected: number }) => {
		gotoNextPage(event.selected);
	};
	return (
		<div className="my-10 flex justify-center">
			<ReactPaginate
				breakLabel="..."
				nextLabel={null}
				onPageChange={handlePageClick}
				pageRangeDisplayed={8}
				pageCount={Math.ceil(numberOfPosts / 10)}
				previousLabel={null}
				renderOnZeroPageCount={null}
				containerClassName="flex gap-1 items-center text-accent"
				activeClassName="bg-accent text-white"
				pageClassName="p-1 px-2"
			/>
		</div>
	);
};
export default Pagination;
