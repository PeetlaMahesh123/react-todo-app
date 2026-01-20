import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const submitTodo = () => {
    if (!text.trim()) return;
    addTodo(text, priority);
    setText("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={text}
        placeholder="Add task..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submitTodo()}
      />

      <select onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button onClick={submitTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
