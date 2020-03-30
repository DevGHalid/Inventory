const generateItems = (arr, count = 1) => {
  const items = [];

  for (let i = 0; i < count; i++) {
    if (arr[i]) {
      items[i] = arr[i];
    } else {
      items[i] = undefined;
    }
  }

  return items;
};

export default generateItems;
