import React, { RefObject, useRef, useState } from "react";
import NextImage from "next/image";
import useSize from "@/hooks/useSize";

export default function Image({
  src,
  alt,
}: Readonly<{
  src?: string;
  alt?: string;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef();
  const [width] = useSize(ref);
  const height = width ? Math.round((width / 3) * 2) : 0;

  const wrapperClassName = [
    "bg-white",
    "rounded-lg",
    isLoading && "animate-pulse",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref as any} className={wrapperClassName} style={{ height }}>
      {src && width && (
        <NextImage
          width={width}
          height={height}
          src={src}
          alt={alt as string}
          style={{ width, height }}
          className="rounded-lg object-cover object-center"
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}
