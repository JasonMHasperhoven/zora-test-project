import Image from "./Image";
import { Photo } from "@/types/unsplash";
import arrayFill from "@/services/arrayFill";

export default function Results({
  results,
  isLoading,
}: Readonly<{
  results: Array<Photo>;
  isLoading: Boolean;
}>) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {!isLoading && results
        ? results.map((result) => (
            <Image
              key={result.id}
              src={result.urls.small}
              alt={result.altDescription}
            />
          ))
        : arrayFill(6).map((no) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image key={no} />
          ))}
    </div>
  );
}
