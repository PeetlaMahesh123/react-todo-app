import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("light");

  // Load theme on refresh
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const addTodo = (text, priority) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        priority,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className={`page ${theme}`}>
      <div className="card">
        <div className="header">
          <h2>✅ My Todo-s</h2>

          {/* THEME SELECTOR */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="theme-select"
          >
            <option value="light">🌤 Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="night">🌌 Night</option>
            <option value="blue">💙 Blue</option>
            <option value="green">💚 Green</option>
            <option value="purple">💜 Purple</option>
          </select>
        </div>

        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
