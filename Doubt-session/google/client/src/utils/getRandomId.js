function getRandomUId() {
  const randomId = Math.random() * 6 * 10000;
  return randomId.toString().split(".")[1];
}

export default getRandomUId;
