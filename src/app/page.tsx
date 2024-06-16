"use client"
import React, { useState } from "react";
import Image from "next/image";
import {
  useQuery,
} from '@tanstack/react-query'
const camelcaseKeysDeep = require('camelcase-keys-deep');
import unsplash from "@/services/unsplash";
import SearchInput from '@/components/SearchInput';
import Toolbar from '@/components/Toolbar';
import Results from '@/components/Results';
import Pagination from '@/components/Pagination';

export default function Home() {
  const [query, setQuery] = useState('cat');
	console.log("TCL: Home -> query", query);
  const [filters, setFilters] = useState({
    color: 'green',
    orderBy: 'relevant',
    // orientation: 'portrait',
  });

  const { isLoading, error, data = {} } = useQuery({
    queryKey: ['unsplashSearchGetPhotos', query, filters.color, filters.orderBy],
    queryFn: () => unsplash.search.getPhotos({
      query,
      page: 1,
      perPage: 6,
      ...filters,
    }).then(({ response }) => response)
      .then(camelcaseKeysDeep),
  });
  console.log("TCL: Home -> data", data);

  const { results, total, totalPages } = data;

  if (error) return <div>An error has occurred: {error.message}</div>

  return (
    <main className={`flex w-full justify-center p-16 bg-${filters.color}-100`}>
      <div className="w-full max-w-screen-lg">
        <SearchInput query={query} setQuery={setQuery} />
        <Toolbar filters={filters} setFilters={setFilters} />
        <Results results={results} />
        <Pagination onLoadMore={() => {}} color={filters.color} />
      </div>
    </main>
  );
}
