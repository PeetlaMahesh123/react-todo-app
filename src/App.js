import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const THEMES = [
  "Light",
  "Dark",
  "Blue",
  "Green",
  "Purple",
  "Pink",
  "Orange",
  "Teal",
  "Indigo",
  "Rose",
  "Amber",
  "Cyan",
];

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("Blue");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const addTodo = (task, description, category, when, priority, fulfillment) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        task,
        description,
        category,
        when,
        priority,
        fulfillment,
        completed: false,
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

  const updateTodo = (id, updates) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  };

  const getFilteredTodos = () => {
    if (filter === "All") return todos;
    if (filter === "To-do") return todos.filter((t) => !t.completed);
    if (filter === "Completed") return todos.filter((t) => t.completed);
    return todos;
  };

  return (
    <div className={`page theme-${theme.toLowerCase()}`}>
      <div className="card">
        <div className="title-section">
          <h1 className="title">React To-Do List</h1>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="theme-selector"
          >
            {THEMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="top-section">
          <TodoInput addTodo={addTodo} />

          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === "All" ? "active" : ""}`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === "To-do" ? "active" : ""}`}
              onClick={() => setFilter("To-do")}
            >
              To-do
            </button>
            <button
              className={`filter-btn ${filter === "Completed" ? "active" : ""}`}
              onClick={() => setFilter("Completed")}
            >
              Completed
            </button>
          </div>
        </div>

        <TodoList
          todos={getFilteredTodos()}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
