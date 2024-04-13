import { useEffect } from "react";

function Table({ todos, addTodo }) {
  useEffect(() => {
    let prevTodos = localStorage.getItem("todos");
    // console.log(prevTodos);
    if (prevTodos != null) {
      addTodo(JSON.parse(prevTodos));
    }
    // console.log(todos);
  }, []);

  return (
    <div className="showTodos">
      {todos.length > 0 && (
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Table;
