import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = (props) => {
  let edit = props.edit;
  let setInput = props.setInput;
  const updateTodo = (title, id, complated) => {
    const newTodo = props.todos.map((todo) =>
      todo.id === id ? { title, id, complated } : todo
    );
    props.setTodos(newTodo);
    props.setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else setInput("");
  }, [setInput, edit]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!props.edit) {
      props.setTodos([
        ...props.todos,
        { id: uuidv4(), title: props.input, complated: false }
      ]);
      props.setInput("");
    } else {
      updateTodo(props.input, props.edit.id, props.edit.complated);
    }
  };

  const inputChangeHandler = (e) => {
    props.setInput(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="task-input"
        type="text"
        placeholder="write something"
        onChange={inputChangeHandler}
        required
        value={props.input}
      />

      <button className="button-add " type="submit">
        {props.edit ? "ok" : "Add"}
      </button>
    </form>
  );
};
export default TodoForm;
