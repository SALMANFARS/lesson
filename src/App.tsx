import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useAppSelector, useAppDispatch } from "./hooks/hooks";

import { addUser, completeUser, deleteUser, setText } from "./reducers/counterSlice";

function App() {
  const todo = useAppSelector((state) => state.counterSlice.todo);
  const text = useAppSelector((state) => state.counterSlice.text);

  const dispatch = useAppDispatch();
  return (
    // momomfjajfaljhfa
    <>
      <div>
        <div className="header">
          <form action="" onSubmit={() => dispatch(addUser(event))}>
            <input
              type="text"
              value={text}
              onChange={(event) => dispatch(setText(event.target.value))}
            />
            {/* <h1>{ text}</h1> */}
            <button>Add</button>
          </form>
        </div>
        <div className="section">
          {todo.map((elem) => {
            return (
              <div key={elem.id}>
                {elem.complete ? <h1 style={{color:"red",textDecoration:"line-through"}}>{elem.title}</h1> : <h1>{elem.title}</h1>}
                <input
                  type="checkbox"
                  onClick={() => dispatch(completeUser(elem.id))}
                />
                <button onClick={() => dispatch(deleteUser(elem.id))}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
