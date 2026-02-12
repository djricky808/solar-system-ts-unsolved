export const minBy = <Type>(
  array: Type[],
  cb: (type: Type | undefined) => string | number,
): Type | undefined => {
  if (array.length == 0) return undefined;
  let minimum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i]) < cb(minimum)) {
      minimum = array[i];
    }
  }
  return minimum;
};

export function maxBy(array, cb) {}
