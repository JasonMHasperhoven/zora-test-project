export default function Toolbar({ filters, setFilters }: Readonly<{
  filters: {
    color: string
    orderBy: 'relevant' | 'latest'
  };
  setFilters: Function;
}>) {
  return (
    <div className="flex justify-between w-full bg-white rounded-lg px-8 py-4 mb-6">
      <div  className="flex items-center">
        <div className="mr-4">
          Filter by color:
        </div>
        {['red', 'orange', 'yellow', 'green', 'blue'].map(color => (
          <button type="button" key={color} className={`w-6 h-6 box-border rounded-full border-2 ${`border-${color}-500`} border-solid ${color === filters.color ? `bg-${color}-500` : ''} mr-2`} onClick={() => setFilters({
            ...filters,
            color,
          })} />
        ))}
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          Sort by:
        </div>
        {[
          {
            text: 'Relevant',
            value: 'relevant',
          },
          {
            text: 'Latest',
            value: 'latest',
          }
        ].map(({ text, value }) => (
          <button type="button" key={value} className={`mr-4 last:mr-0 px-4 box-border h-8 border-2 rounded-full border-solid ${value === filters.orderBy ? `border-blue-500` : ''} ${value === filters.orderBy ? `color-blue-500` : ''}`} onClick={() => setFilters({
            ...filters,
            orderBy: value,
          })}>
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}