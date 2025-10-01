import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Add new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;