import React, { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFulfillment, setEditedFulfillment] = useState(todo.fulfillment);

  const handleEditFulfillment = () => {
    updateTodo(todo.id, { fulfillment: editedFulfillment });
    setIsEditing(false);
  };

  return (
    <tr className={`todo-row ${todo.completed ? "completed" : ""}`}>
      <td className="task-cell">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
          className="checkbox"
        />
        <span>{todo.task}</span>
      </td>
      <td>{todo.description}</td>
      <td>{todo.category}</td>
      <td>{todo.when}</td>
      <td>
        <span className={`priority ${todo.priority.toLowerCase()}`}>
          {todo.priority}
        </span>
      </td>
      <td>
        {isEditing ? (
          <div className="fulfillment-edit">
            <input
              type="number"
              min="0"
              max="100"
              value={editedFulfillment}
              onChange={(e) => setEditedFulfillment(Number(e.target.value))}
              className="fulfillment-input"
            />
            <button onClick={handleEditFulfillment} className="save-btn">
              ✓
            </button>
          </div>
        ) : (
          <span onClick={() => setIsEditing(true)} className="fulfillment">
            {todo.fulfillment}%
          </span>
        )}
      </td>
      <td className="actions">
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          ✏
        </button>
        <button className="delete-btn" onClick={deleteTodo}>
          🗑
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
