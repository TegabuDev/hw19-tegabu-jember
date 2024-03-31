import React from "react";
import AddTodo from "../components/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import { setEditedTodo } from "../store/todosSlice";

export default function TodoApp() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(setEditedTodo(id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h2 className="heading">Todo list</h2>
        <AddTodo />
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} handleEdit={handleEdit} />
          ))}
        </div>
      </div>
    </div>
  );
}
