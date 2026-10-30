const promise = new Promise((resolve, rejected) => {
  const isAvailable = true;

  if (isAvailable) {
    resolve(JSON.stringify([{ username: "Surya", duration: "1.5 hrs" }]));
  } else {
    rejected("The person your trying to not picking up your calls");
  }
});

// Promise - Object with multiple methods(Function)
// console.log(promise);
promise
  .then((response) => {
    console.log(typeof response);
    return response;
  })
  .then((data) => {
    const result = JSON.parse(data);
    console.log(typeof result);
    console.log("AFTER : ", result);
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    console.log("Finally, You have done call!");
  });
