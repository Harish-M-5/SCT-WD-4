import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-purple-100 shadow p-3 rounded-xl mb-2">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="h-5 w-5 text-green-600"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {todo.text} —{" "}
          <span className="text-sm text-gray-500">{todo.date}</span>
        </span>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => editTodo(todo.id)}
          className="text-sm px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
