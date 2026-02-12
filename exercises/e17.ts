export const minBy = (array, cb) => {
  let minimum;
  for (let i = 0; i < array.length; i++) {
    if (!minimum || cb(array[i]) < cb(minimum)) {
      minimum = array[i];
    }
  }
  return minimum;
};

export function maxBy(array, cb) {}
