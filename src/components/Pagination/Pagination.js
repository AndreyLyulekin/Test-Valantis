import { TablePagination } from "@mui/material";

export default function Pagination({
  pagesAllState,
  rowsAllState,
  productsIdsAfterFilter,
}) {
  const totalCount =
    productsIdsAfterFilter.length > 0 ? productsIdsAfterFilter.length : -1;

  const handleChangePage = (event, newPage) => {
    pagesAllState.setcurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    rowsAllState.setRowsPerPage(parseInt(event.target.value, 10));
    pagesAllState.setcurrentPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={totalCount}
      page={pagesAllState.currentPage}
      onPageChange={handleChangePage}
      rowsPerPage={rowsAllState.rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
