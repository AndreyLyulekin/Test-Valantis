import { Pagination, TableItem } from "../index";

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
      <div className="flex w-full py-[30px]">
        <p className="text-white w-1/4 text-center">Id</p>
        {tableColumnsNames.map((item, index) => {
          return (
            <p key={index} className="text-white w-1/4 text-center">
              {item}
            </p>
          );
        })}
      </div>
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
