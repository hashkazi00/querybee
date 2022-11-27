import ReactPaginate from "react-paginate";

import "./Pagination.scss";

export const Pagination = ({
  totalPages,
  isHidden = false,
  onPageChange,
  currentPage,
}: {
  totalPages: number;
  isHidden?: boolean;
  onPageChange?: (_: number) => void;
  currentPage: number;
}) => {
  const handlePageClick = (event: any) => {
    console.log("here", event.selected);
    onPageChange && onPageChange(event.selected);
  };
  if (isHidden) return null;
  return (
    <div className={`pagination ${isHidden ? "hidden" : ""}`}>
      <div className="pages">
        <ReactPaginate
          initialPage={currentPage}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          onPageChange={handlePageClick}
          disabledClassName="hidden"
          activeClassName="selected-page"
          previousLabel=""
          nextLabel=""
        />
      </div>
    </div>
  );
};
