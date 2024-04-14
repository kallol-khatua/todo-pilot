import { useState } from "react";
import "./Todo.css";
import Form from "./Form";
import Table from "./Table";

function Todo() {
  const [todos, setTodos] = useState([]);
  //   console.log(todos);

  //   only add the current task
  const addTodo = (todosArray) => {
    setTodos(todosArray);
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <Table todos={todos} addTodo={addTodo} />
    </>
  );
}

export default Todo;
