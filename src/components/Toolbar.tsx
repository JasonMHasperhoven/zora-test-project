import { Colors, Color, OrderTypes, OrderType } from "@/types/unsplash";

export default function Toolbar({
  color,
  setColor,
  orderBy,
  setOrderBy,
}: Readonly<{
  color: Color;
  setColor: Function;
  orderBy: OrderType;
  setOrderBy: Function;
}>) {
  return (
    <div className="flex justify-between w-full bg-white rounded-lg drop-shadow-md px-8 py-4 mb-6">
      <div className="flex items-center">
        <div className="mr-4">Filter by color:</div>
        {Object.values(Colors).map((clr) => (
          <button
            type="button"
            key={clr}
            className={`w-6 h-6 box-border rounded-full border-2 ${`border-${clr}-500`} border-solid ${
              clr === color ? `bg-${clr}-500` : ""
            } mr-2`}
            onClick={() => setColor(clr)}
          />
        ))}
      </div>
      <div className="flex items-center">
        <div className="mr-4">Sort by:</div>
        {Object.entries(OrderTypes).map(([text, value]) => (
          <button
            type="button"
            key={value}
            className={`mr-4 last:mr-0 px-4 box-border h-8 border-2 rounded-full border-solid ${
              value === orderBy ? `border-${color}-500` : ""
            } ${value === orderBy ? `text-${color}-500` : ""}`}
            onClick={() => setOrderBy(value)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
