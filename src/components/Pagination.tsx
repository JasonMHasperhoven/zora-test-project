import React from "react";
import { ColorId } from "unsplash-js";
import ReactPaginate from "react-paginate";
import useSize from "@/hooks/useSize";

const itemClassName = "mx-1";
const anchorClassName =
  "w-10 h-10 flex drop-shadow-md justify-center items-center rounded-full bg-white text-sm font-medium";
const mobileAnchorClassName =
  "w-8 h-8 flex drop-shadow-md justify-center items-center rounded-full bg-white text-sm font-medium";

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
  const [windowWidth] = useSize();
  const mediaAnchorClassName =
    windowWidth > 768 ? anchorClassName : mobileAnchorClassName;

  if (!page || !totalPages) {
    return null;
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="&rarr;"
      previousLabel="&larr;"
      forcePage={page}
      onClick={({ nextSelectedPage }) => {
        setPage(nextSelectedPage);
      }}
      containerClassName="flex w-full justify-center mb-8"
      pageClassName={itemClassName}
      nextClassName={itemClassName}
      previousClassName={itemClassName}
      breakClassName={itemClassName}
      breakLinkClassName={mediaAnchorClassName}
      nextLinkClassName={mediaAnchorClassName}
      previousLinkClassName={mediaAnchorClassName}
      pageLinkClassName={mediaAnchorClassName}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
    />
  );
}
