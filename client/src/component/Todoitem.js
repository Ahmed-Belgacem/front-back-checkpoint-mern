import React from "react";
import { useDispatch } from "react-redux";
import { doneTask, removeTask } from "../redux/todoSlice";
import Edittask from "./Edittask";
import "./admin.css";
const Todoitem = ({ todo }) => {
    const dispatch = useDispatch();
  return (
    <div className={`todo-item ${todo.isDone ? "done" : "undone"}`}>
      <div className='text'>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <span onClick={() => dispatch(doneTask({ id: todo.id }))}>
         {todo.isDone ? "done" : "undone"}
      </span>
      <Edittask todo={todo} />
      <button onClick={() => dispatch(removeTask({ id: todo.id }))}>Remove</button>
    </div>
  );
};

export default Todoitem;