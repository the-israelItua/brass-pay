import ReactPaginate from "react-paginate";
import { PaginateContainer, ItemsWrapper } from "./styles";
import Dropdown from "./dropdown";

const Pagination = ({
  currentPage,
  pageSize,
  totalPages,
  totalRows,
  setPageSize,
  setCurrentPage,
}) => {
  const handlePageSizeChange = (value) => {
    setCurrentPage(1);
    setPageSize(value);
  };

  return (
    <PaginateContainer>
      <ReactPaginate
        breakLabel="..."
        previousLabel=""
        nextLabel=""
        breakClassName="break"
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={9}
        onPageChange={({ selected }) => setCurrentPage(selected + 1)}
        pageClassName="pagination"
        activeClassName="pageLink2"
        activeLinkClassName="pageLink2"
        previousClassName="arrows"
        nextClassName="arrows"
        forcePage={currentPage - 1}
      />

      <ItemsWrapper>
        <p>Show Per Page</p>

        <Dropdown
          options={[10, 20, 30]}
          onSelect={(value) => handlePageSizeChange(value)}
        />

        <p>
          Showing
          {currentPage === 1
            ? currentPage
            : pageSize * currentPage + 1 - pageSize}
          -{pageSize * currentPage} 0f {totalRows}
        </p>
      </ItemsWrapper>
    </PaginateContainer>
  );
};

export default Pagination;
