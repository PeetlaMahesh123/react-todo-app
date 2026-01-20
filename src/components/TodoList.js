import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {
  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Category</th>
          <th>When</th>
          <th>Priority</th>
          <th>Fulfillment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            updateTodo={updateTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
