import Image from './Image';

type Photo = {
  id: string
  altDescription: string
  urls: {
    full: string
    small: string
    regular: string
  }
}

export default function Results({ results }: Readonly<{
  results: Array<Photo>;
}>) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {results ? results.map(result => (
        <Image key={result.id} src={result.urls.small} alt={result.altDescription} />
      )) : [...Array(6).keys()].map(no => (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image key={no} />
      ))}
    </div>
  );
}