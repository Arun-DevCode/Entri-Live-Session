function APILogger(req, res, next) {
  const method = req.method;
  const UrlPath = req.url;

  // 1. Capture the start time
  const start = process.hrtime();

  // 2. Listen for the 'finish' event on the response object
  res.on("finish", () => {
    // 3. Calculate the high-resolution real time diff
    const diff = process.hrtime(start);

    // Convert to milliseconds (seconds * 1000 + nanoseconds / 1e6)
    const durationInMs = (diff[0] * 1e3 + diff[1] / 1e6).toFixed(2);

    console.log(
      `API Log: ${method} - ${UrlPath} | Status: ${res.statusCode} | Duration: ${durationInMs}ms`,
    );
  });

  // 4. Move to the next middleware
  next();
}

module.exports = APILogger;
