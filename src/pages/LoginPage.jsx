import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {error && (
          <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-lg transition"
        >
          Login
        </button>

        <p className="text-gray-500 text-center mt-4 text-sm">
          Demo credentials: <br />
          username: emilys, password: emilyspass
        </p>
      </div>
    </div>
  );
};

export default LoginPage;