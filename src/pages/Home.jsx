import React, { useState } from 'react';

// import logo and header

function Home() {
  // dummy data, we will replace this with data from database next week
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Finish homework' },
    { id: 3, text: 'Walk the dog' },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTask }]);
      setNewTask(''); // Clear the input
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      
      {/* add logo and header here! */}
      
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-4">My To-Do List</h1>
        
        <div className="flex mb-4">

          {/* input for new task */}
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 border rounded-l"
          />
          
          {/* submit button */}
          <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
            Add
          </button>
        </div>
        
        {/* task display */}
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="p-2 bg-gray-200 rounded flex justify-between items-center"
            >
              <span>{todo.text}</span>
              <button onClick={() => deleteTask(todo.id)} className="text-red-500 hover:text-red-700 font-bold">
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
