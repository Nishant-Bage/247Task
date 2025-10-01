import React, { useEffect, useState, useContext } from "react";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../api/todos";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const { token, logout } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextId, setNextId] = useState(1000); 

  useEffect(() => {
    const getTodos = async () => {
      try {
        if (!token) return;
        const data = await fetchTodos(token);
        setTodos(data.todos || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getTodos();
  }, [token]);

  // Add a new todo
  const handleAdd = async (task) => {
    if (!task.trim()) return;

    try {
      const newTodo = await addTodo(task, token);

      
      const todoWithId = { ...newTodo, id: nextId };
      setNextId((prev) => prev + 1);

      setTodos((prev) => [...prev, todoWithId]);
    } catch (err) {
      console.error(err);
    }
  };

  // Update todo completion status
  const handleUpdate = async (id, updatedFields) => {
    try {
      // Optimistic UI update
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...updatedFields } : t))
      );

      // If it's a real API todo (id < 1000), call API
      if (id < 1000) {
        await updateTodo(id, updatedFields, token);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete todo
  const handleDelete = async (id) => {
    try {
      setTodos((prev) => prev.filter((t) => t.id !== id));

      // Only call API for real todos
      if (id < 1000) {
        await deleteTodo(id, token);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Todos</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl"
          >
            Logout
          </button>
        </div>

      
        <TodoForm onAdd={handleAdd} />

       
        {loading ? (
          <p className="text-center text-gray-500 mt-6">Loading tasks...</p>
        ) : todos.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">No tasks yet.</p>
        ) : (
          <div className="flex flex-col gap-3 mt-6">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;