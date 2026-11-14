import { useReducer } from "react";

export default function CounterPage() {
  // Create Group : Reducer
  function reducer(state, action) {
    const type = action.type;
    switch (type) {
      case "increment":
        return (state = state + 1); // logic
      case "decrement":
        return (state = state>0 ? state-=1:state);
      case "reset":
        return state = 0;
      default:
        console.log("Please do right action!");
    }
  }

  const initialState = 0;

  // Declare
  const [count, dispatch] = useReducer(reducer, initialState);
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
        <button onClick={() => dispatch({ type: "increment" })}>
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
