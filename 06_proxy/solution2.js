const fetchData = (key) => {
  console.log(`Fetching data with key: ${key}`);
  return `Data with key: ${key}`;
};

const createCacheProxy = (dataService) => {
  const cache = {};
  return {
    fetchData: (key) => {
      if (cache[key]) {
        console.log(`Cache hit for key: ${key}`);
        return cache[key];
      }

      const data = dataService(key);
      cache[key] = data;
      return data;
    },
  };
};

const cacheProxy = createCacheProxy(fetchData);

console.log(cacheProxy.fetchData("key1"));
console.log(cacheProxy.fetchData("key1"));
