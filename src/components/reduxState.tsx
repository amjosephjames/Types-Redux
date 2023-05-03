import {createSlice} from "@reduxjs/toolkit"

export interface todo {
    task:{
        job:string;
        id:number;
    }[];
}

const initialState:todo={
    task:[],
}

const reduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.task = payload;
    },
    removeTask: (state, { payload }) => {
      state.task.filter((el) => el.id !== payload.id);
    },
    addingNewTask: (state, { payload }) => {
      state.task = [...state.task, payload];
    },
  },
});


export const { addTask, removeTask, addingNewTask } = reduxState.actions;

export default reduxState.reducer;