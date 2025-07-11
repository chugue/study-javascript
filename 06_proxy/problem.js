const cache = {};

const fetchDataWithCache = (key) => {
  if (cache[key]) {
    console.log(`Returning cached data for key: ${key}`);
    return cache[key];
  }

  console.log(`Fetching data for key: ${key}`);
  const data = `Data for ${key}`;
  cache[key] = data;
  return data;
};

// Fetch Data with cache
console.log(fetchDataWithCache("key1"));
console.log(fetchDataWithCache("key2"));

console.log(fetchDataWithCache("key1"));
console.log(fetchDataWithCache("key2"));

console.log(fetchDataWithCache("key3"));
