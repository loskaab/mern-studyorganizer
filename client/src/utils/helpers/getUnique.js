export const getUnique = (objArray, key) =>
  Array.from(new Set(objArray.map(el => el[key])));
