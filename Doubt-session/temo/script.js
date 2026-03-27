// Set Item - History to local Storage
const getAllHistory = [{ from: "USD", to: "INR", currency: 86 }];

const CurrentHistory = [
  ...getAllHistory,
  {
    from: "INR",
    to: "USD",
    Currency: 86,
  },
];

console.log(CurrentHistory);

localStorage.setItem("History", JSON.stringify(CurrentHistory));

// Get Item - Read data from localStorage
// const history = localStorage.getItem("History-1");

// console.log(JSON.parse(history));
// clearItem
// localStorage.clear()

// removeItem

localStorage.removeItem("History-1");

// History  - [{..},{...}]
// Fav - [{..},{...}]
