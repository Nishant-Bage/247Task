const BASE_URL = "https://dummyjson.com/todos";

// Fetch all todos for user 1
export const fetchTodos = async (token) => {
  const res = await fetch(`${BASE_URL}/user/1`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
};

// Add a new todo
export const addTodo = async (task, token) => {
  const res = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ todo: task, userId: 1, completed: false }),
  });
  if (!res.ok) throw new Error("Failed to add todo");
  return res.json();
};

// Update todo
export const updateTodo = async (id, updatedFields, token) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) throw new Error("Failed to update todo");
  return res.json();
};

// Delete todo
export const deleteTodo = async (id, token) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to delete todo");
  return res.json();
};