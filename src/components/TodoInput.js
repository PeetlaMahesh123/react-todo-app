import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Programming");
  const [when, setWhen] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [fulfillment, setFulfillment] = useState(0);

  const submitTodo = () => {
    if (!task.trim()) return;
    addTodo(task, description, category, when, priority, fulfillment);
    setTask("");
    setDescription("");
    setCategory("Programming");
    setWhen("");
    setPriority("Medium");
    setFulfillment(0);
  };

  return (
    <input
      type="text"
      value={task}
      placeholder="Add a new to-do"
      onChange={(e) => setTask(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && submitTodo()}
      className="input-field"
    />
  );
}

export default TodoInput;
