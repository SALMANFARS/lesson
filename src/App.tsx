import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { decrement, increment } from "./reducers/counterSlice";

function App() {
  const count = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
