import React, { useState } from "react";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todo);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editText.trim()) return;

    onUpdate(todo.id, { todo: editText });
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="flex-1 flex gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-3 py-1 bg-gray-400 text-white rounded-xl hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.todo}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onUpdate(todo.id, { completed: !todo.completed })}
              className="px-3 py-1 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
            >
              {todo.completed ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;