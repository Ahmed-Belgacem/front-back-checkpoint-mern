import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist: [
    {
      id: Math.random(),
      title: "TODO-1",
      description: "Add The New Trendy games and fix the bugs in the website",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "TODO-2",
      description: "Fix The Games discription",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "TODO-3",
      description: "Make Sure there is no bugs in the website",
      isDone: true,
    },
  ],
};


export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
     state.todolist.push(action.payload);
    },
      removeTask: (state, action) => {
     state.todolist = state.todolist.filter((el) => el.id !== action.payload.id);
    },
   doneTask: (state, action) => {
  let i = state.todolist.findIndex((el) => el.id === action.payload.id);

  state.todolist[i] = {
    ...state.todolist[i],
    isDone: !state.todolist[i].isDone,
    
  };
},
editTask: (state, action) => {
  let i = state.todolist.findIndex((el) => el.id === action.payload.id);

  state.todolist[i] = {
    ...state.todolist[i],
    title: action.payload.edited.title,
    description: action.payload.edited.description,
  };
},


  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask, doneTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;