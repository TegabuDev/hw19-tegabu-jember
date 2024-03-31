import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { selectTodo } from "../store/todosSlice";

export default function SelectedTodo() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedTodo = useSelector((state) => state.todos.selectedTodo);

  useEffect(() => {
    if (id) {
      dispatch(selectTodo(id)); //+id
    }
    return () => {
      dispatch(selectTodo(null));
    };
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="selected-todo">
      <div className="selected-todo-wrapper">
        <BackButton />
        {selectedTodo ? <h3>{selectedTodo.text}</h3> : <p>Todo not found!</p>}
        <form onSubmit={handleSubmit}>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className="add-info-btn">Save</button>
        </form>
      </div>
    </div>
  );
}
