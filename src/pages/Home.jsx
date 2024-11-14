import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Header from './components/Header';
import axios from 'axios';

function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  // Fetch todos from the backend API when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Logo />
      <Header />
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-4">My To-Do List</h1>
        
        <div className="flex mb-4">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 border rounded-l"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="p-2 bg-gray-200 rounded flex justify-between items-center"
            >
              <span>{todo.task}</span>
              <button
                onClick={() => deleteTask(todo.id)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
