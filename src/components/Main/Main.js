import { Pagination } from "../index";

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
          return (
            <li
              key={item.id}
              className="flex items-center lg:h-[50px] outline outline-1 outline-white"
            >
              <p className="text-white w-1/4 text-center text-xs">{item.id}</p>
              <p className="text-white w-1/4 text-center text-xs">
                {item.product}
              </p>
              <p className="text-white w-1/4 text-center text-xs">
                {item.price}
              </p>
              <p className="text-white w-1/4 text-center text-xs">
                {item.brand}
              </p>
            </li>
          );
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
