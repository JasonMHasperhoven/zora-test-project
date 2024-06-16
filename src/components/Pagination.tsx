export default function Pagination({ color, onLoadMore }) {
  return (
    <div className="flex w-full justify-center">
      <button type="button" className={`rounded-full px-4 py-2 bg-${color}-700 text-white font-medium text-sm`} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}