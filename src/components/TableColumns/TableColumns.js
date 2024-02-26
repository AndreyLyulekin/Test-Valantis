export default function TableColumns({ tableColumnsNames }) {
  return (
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
  );
}
