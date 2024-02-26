import { Pagination, TableItem, TableColumns } from "../index";

export default function Main(props) {
  const {
    pagesAllState,
    rowsAllState,
    tableColumnsNames,
    products,
    productsIdsAfterFilter,
  } = props;

  return (
    <main className="flex flex-col items-center w-full py-[30px]">
      <Pagination
        productsIdsAfterFilter={productsIdsAfterFilter}
        pagesAllState={pagesAllState}
        rowsAllState={rowsAllState}
      />
      <TableColumns tableColumnsNames={tableColumnsNames} />
      <ul className="flex flex-col w-full gap-y-[10px] pb-[30px]">
        {products.map((item) => {
          return <TableItem key={item.id} item={item} />;
        })}
      </ul>
      <Pagination
        productsIdsAfterFilter={productsIdsAfterFilter}
        pagesAllState={pagesAllState}
        rowsAllState={rowsAllState}
      />
    </main>
  );
}
