function sendResponse(res, data, statusCode) {
  return res.end(JSON.stringify(data));
}

module.exports = sendResponse;
