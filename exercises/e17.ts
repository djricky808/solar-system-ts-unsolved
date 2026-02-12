export const minBy = <Type>(array: Type[], cb: (type: Type) => Type): Type => {
  let minimum;
  for (let i = 0; i < array.length; i++) {
    if (!minimum) {
      minimum = array[i];
    } else if (cb(array[i]) < cb(minimum)) {
      minimum = array[i];
    }
  }
  return minimum;
};

export function maxBy(array, cb) {}
