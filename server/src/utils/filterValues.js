const filterValues = obj => {
  const newObj = { ...obj._doc };
  for (const key in newObj) {
    if (key === 'createdAt' || key === 'updatedAt') {
      delete newObj[key];
    }
  }
  return newObj;
};

module.exports = filterValues;
