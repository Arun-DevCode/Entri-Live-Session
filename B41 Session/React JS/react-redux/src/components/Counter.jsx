import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/CounterSlice";

export default function Counter() {
  // const [count, setCount] = useState(0); // local State

  // Counter : Global State
  const count = useSelector((state) => state.Counter.count); // {count , likes , order}
  console.log("Global State : ", count);

  const dispatch = useDispatch(); // Action Trigger

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold">Counter App</h1>

      <div className="text-5xl font-semibold">{count}</div>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment(count + 1))}
          className="px-6 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="px-6 py-2 bg-gray-600 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
