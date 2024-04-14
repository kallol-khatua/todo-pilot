import { useEffect } from "react";
import "./Table.css";
import DeleteIcon from "@mui/icons-material/Delete";

function Table({ todos, addTodo }) {
  useEffect(() => {
    let prevTodos = localStorage.getItem("todos");
    // console.log(prevTodos);
    if (prevTodos != null) {
      addTodo(JSON.parse(prevTodos));
    }
    // console.log(todos);
  }, []);

  function deleteTask(idx) {
    // console.log(idx);
    if (todos.length > 0) {
      console.log(todos);
      console.log(todos[idx]);
      todos.splice(idx, 1);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
    addTodo([...todos]);
  }

  return (
    <div className="showTodos">
      <h3>All</h3>
      {todos.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{todo}</td>
                  <td>
                    <DeleteIcon
                      onClick={() => {
                        deleteTask(idx);
                      }}
                    />
                  </td>
                  {/* <td><button className="btn btn-outline-light" type="submit">Delete</button></td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Table;
