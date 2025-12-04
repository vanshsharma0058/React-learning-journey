import React from "react";
import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // prevent empty todos
    dispatch(addTodo(input));
    setinput("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Add todo..."
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
