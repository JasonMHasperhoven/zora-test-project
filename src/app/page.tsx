"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import camelcaseKeysDeep from "camelcase-keys-deep";
import unsplash from "@/services/unsplash";
import SearchInput from "@/components/SearchInput";
import Toolbar from "@/components/Toolbar";
import Results from "@/components/Results";
import Pagination from "@/components/Pagination";
import { Colors, OrderTypes } from "../types/unsplash";

export default function Home() {
  const [query, setQuery] = useState("cat");
  const [color, setColor] = useState(Colors.Red);
  const [orderBy, setOrderBy] = useState(OrderTypes.Relevant);
  const [page, setPage] = useState(1);

  const {
    isLoading,
    error,
    data = {} as any,
  } = useQuery({
    queryKey: ["unsplashSearchGetPhotos", query, page, color, orderBy],
    queryFn: () =>
      unsplash.search
        .getPhotos({
          query,
          page,
          perPage: 6,
          orderBy,
          color,
        })
        .then(({ response }) => camelcaseKeysDeep(response as Object)),
  });

  const { results, totalPages } = data;

  return (
    <main className={`flex w-full h-full justify-center p-16 bg-${color}-100`}>
      <div className="w-full max-w-screen-lg">
        <SearchInput query={query} setQuery={setQuery} />
        <Toolbar
          color={color}
          setColor={setColor}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
        {error ? (
          <div>An error has occurred: {error.message}</div>
        ) : (
          <Results isLoading={isLoading} results={results} />
        )}
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          color={color}
        />
      </div>
    </main>
  );
}
