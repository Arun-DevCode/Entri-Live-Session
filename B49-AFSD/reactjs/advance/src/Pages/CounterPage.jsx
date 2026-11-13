import { useReducer } from "react";

export default function CounterPage() {
  // Create Group : Reducer
  function reducer(state, action) {
    const type = action.type;

    switch (type) {
      case "increment":
        state + 1; // logic
        break;
      case "decrement":
        state - 1;
        break;
      case "reset":
        state = 0;
        break;
      default:
        console.log("Please do right action!");
    }
  }

  // Declare
  const [count, dispatch] = useReducer(reducer, 0);
  // const [value , setVal] = useState(0)

  //  function increment(){
  //   setVal(2) ; // rendering
  //  }
  //  function decrement(){
  //   setVal(1) ; // rendering
  //  }
  //  function reset(){
  //   setVal(0) ; // rendering
  //  }
  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}
