function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <div className="left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
        />
        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      </div>

      <div className="right">
        <span className="date">
          {new Date(todo.createdAt).toLocaleDateString()}
        </span>
        <button className="delete" onClick={deleteTodo}>🗑</button>
      </div>
    </div>
  );
}

export default TodoItem;
