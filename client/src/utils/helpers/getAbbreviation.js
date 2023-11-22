export const getAbbreviation = text =>
  text
    ?.replace('-', ' ')
    .split(/\s+/)
    .reduce((acc, el) => acc + el.at(0).toUpperCase(), '')
    .substring(0, 3);
