function printA(callback) {
  console.log("A");
  callback();
}

function printB(callback) {
  console.log("B");
  callback();
}

function printC(callback) {
  console.log("C");
  callback();
}

//Callback Hell
printA(() => {
  printB(() => {
    printC(() => {
      console.log("Done 🎯");
    });
  });
});
