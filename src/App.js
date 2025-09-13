import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addTodo = () => {
    if (!task) return;
    if (editingId) {
      setTodos(todos.map(t => (t.id === editingId ? { ...t, text: task, date } : t)));
      setEditingId(null);
    } else {
      setTodos([
        ...todos,
        { id: Date.now(), text: task, date: date || "No date", completed: false },
      ]);
    }
    setTask("");
    setDate("");
  };

  const toggleComplete = id =>
    setTodos(todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTodo = id => setTodos(todos.filter(t => t.id !== id));

  const editTodo = id => {
    const todo = todos.find(t => t.id === id);
    setTask(todo.text);
    setDate(todo.date);
    setEditingId(id);
  };

  const clearAll = () => setTodos([]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center p-5">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-5">
        SkillCraft Technology To-Do App
      </h1>

      <div className="w-full max-w-md bg-white shadow-xl p-6 rounded-2xl">
        {/* Input Section */}
        <div className="flex flex-col space-y-3 mb-4">
          <input
            type="text"
            placeholder="Enter Task..."
            value={task}
            onChange={e => setTask(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <div className="flex space-x-2">
            <button
              onClick={addTodo}
              className="flex-1 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
            >
              {editingId ? "Update Task" : "Add Task"}
            </button>
            <button
              onClick={clearAll}
              className="flex-1 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Extra Buttons Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
            Filter Active
          </button>
          <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 text-sm">
            Filter Completed
          </button>
          <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 text-sm">
            Export Tasks
          </button>
        </div>

        {/* Todo Items */}
        {todos.length === 0 && (
          <p className="text-center text-gray-500">No tasks yet!</p>
        )}

        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}
