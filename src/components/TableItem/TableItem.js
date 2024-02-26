export default function TableItem({ item }) {
  return (
    <li className="flex items-center lg:h-[50px] outline outline-1 outline-white">
      <p className="text-white w-1/4 text-center text-xs">{item.id}</p>
      <p className="text-white w-1/4 text-center text-xs">{item.product}</p>
      <p className="text-white w-1/4 text-center text-xs">{item.price}</p>
      <p className="text-white w-1/4 text-center text-xs">{item.brand}</p>
    </li>
  );
}
