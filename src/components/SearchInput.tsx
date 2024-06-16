import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import SearchIcon from "../icons/Search";

export default function SearchInput({
  query,
  setQuery,
}: Readonly<{
  query: string;
  setQuery: Function;
}>) {
  const [localSearch, setLocalSearch] = useState(query);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetQuery = useCallback(debounce(setQuery, 500), [setQuery]);

  useEffect(() => {
    debouncedSetQuery(localSearch);
  }, [localSearch, debouncedSetQuery]);

  return (
    <div className="relative max-w-screen-sm mx-auto mb-12">
      <SearchIcon className="absolute z-10 left-4 top-4 w-6" />
      <input
        className="w-full bg-white rounded-full py-4 pl-12 pr-8 drop-shadow-lg"
        value={localSearch}
        onChange={(event) => {
          setLocalSearch(event.target.value);
        }}
      />
    </div>
  );
}
