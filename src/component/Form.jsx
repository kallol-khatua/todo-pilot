import { useState } from "react";
import "./Form.css";

function Form({ addTodo }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let todosArray;
    let currentTask = task.trim();

    let prevTodos = localStorage.getItem("todos");
    // console.log(prevTodos);

    if (prevTodos == null) {
      // when no todos are set
      todosArray = [];
      todosArray.push(currentTask);
      // console.log(todosArray);
      localStorage.setItem("todos", JSON.stringify(todosArray));
      addTodo(todosArray);
    } else {
      todosArray = JSON.parse(prevTodos);
      todosArray.unshift(currentTask); //adding current task at the beginning
      // console.log(todosArray);
      localStorage.setItem("todos", JSON.stringify(todosArray));
      addTodo(todosArray);
    }
    setTask("");
  };

  return (
    <div className="inputform">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Enter your task"
          value={task}
          className="form-control"
          id="inputfield"
          onChange={handleChange}
        />
        <br />
        {/* btn-outline-light */}
        <button className="btn btn-outline-light" type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
