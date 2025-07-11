// Compression functions
function zipCompressionStrategy(data) {
  console.log("Compressing using ZIP algorithm");
  // Implementation logic for ZIP compression
  return "Compressed using ZIP";
}

function gzipCompressionStrategy(data) {
  console.log("Compressing using GZIP algorithm");
  // Implementation logic for GZIP compression
  return "Compressed using GZIP";
}

const compressionContext = (strategy) => {
  const setStrategy = (newStrategy) => {
    strategy = newStrategy;
  };
  const compress = (data) => {
    return strategy(data);
  };
  return { setStrategy, compress };
};

const data = "Hellow, world!";

const context = compressionContext(zipCompressionStrategy);
