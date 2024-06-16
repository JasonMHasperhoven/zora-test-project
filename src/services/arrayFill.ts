export default function arrayFill(n: number): Array<number> {
  const array = [];
  for (let i = 1; i < n + 1; i++) {
    array.push(i);
  }
  return array;
}
