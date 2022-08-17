import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const TodoList = (props) => {
  const changeHandler = (e) => {
    e.preventDefault();
  };
  const deleteHandler = ({ id }) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id));
  };

  const editHandler = ({ id }) => {
    const findTodo = props.todos.find((todo) => todo.id === id);
    props.setEdit(findTodo);
  };
  return (
    <div>
      {props.todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <input
            type=""
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={changeHandler}
          />
          <button
            className="button-delete task-button"
            onClick={() => deleteHandler(todo)}
          >
            <DeleteForeverIcon />
          </button>

          <button
            className="button-edit task-button"
            onClick={() => editHandler(todo)}
          >
            <EditIcon />
          </button>
        </li>
      ))}
    </div>
  );
};
export default TodoList;
