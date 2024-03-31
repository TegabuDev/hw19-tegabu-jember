import React, { useEffect, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../store/todosSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const editedTodo = useSelector((state) => state.todos.editedTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editedTodo !== null) {
      setText(editedTodo.text);
    } else {
      setText("");
    }
  }, [editedTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    if (editedTodo !== null) {
      dispatch(updateTodo({ id: editedTodo.id, text }));
    } else {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>
        {editedTodo !== null ? <IoBagAdd /> : <BsPlusCircle />}
        <span>{editedTodo !== null ? "Save" : "Add"}</span>
      </button>
    </form>
  );
}
