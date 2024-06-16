import React, { useState } from "react";
import { ColorId } from "unsplash-js";
import ReactPaginate from "react-paginate";

const itemClassName = "mx-1";
const anchorClassName =
  "w-10 h-10 flex drop-shadow-md justify-center items-center rounded-full bg-white text-sm font-medium";

export default function Pagination({
  page,
  setPage,
  totalPages,
}: Readonly<{
  page: number;
  setPage: Function;
  totalPages: number;
  color: ColorId;
}>) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="&rarr;"
      previousLabel="&larr;"
      forcePage={page}
      onClick={({ nextSelectedPage }) => {
        setPage(nextSelectedPage);
      }}
      containerClassName="flex w-full justify-center"
      pageClassName={itemClassName}
      nextClassName={itemClassName}
      previousClassName={itemClassName}
      breakClassName={itemClassName}
      breakLinkClassName={anchorClassName}
      nextLinkClassName={anchorClassName}
      previousLinkClassName={anchorClassName}
      pageLinkClassName={anchorClassName}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
    />
  );
}
