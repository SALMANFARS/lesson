import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// Define a type for the slice state


interface ITodo{
  id: number;
  title: string;
  complete:boolean
}


interface CounterState {
  todo: ITodo[];
  text: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  todo: [{
    id: 1,
    title: "hello",
    complete:false
  }],
  text:""
};


export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    addUser: (state, action) => {
      action.payload.preventDefault();
      let newObj = {
        id: Date.now(),
        title: state.text,
        complete: false,
      };
      state.todo = [...state.todo, newObj];
      state.text = "";
    },
    deleteUser: (state, action) => {
      state.todo = state.todo.filter((elem) => {
        return elem.id!=action.payload
      })
    }
  },
});

export const { setText, addUser,deleteUser } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counterSlice;

export default counterSlice.reducer;
