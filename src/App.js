import React, { useState } from 'react';
import './App.css';
import ThemeToggleButton from './ThemeToggleButton.jsx'; // <-- updated import

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [completed, setCompleted] = useState({}); // track which tasks are checked

  const handleInputChange = (e) => setNewTask(e.target.value);

  const handleCheck = (index) =>
    setCompleted((prev) => ({ ...prev, [index]: !prev[index] }));

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks((prev) => [...prev, newTask.trim()]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
    setCompleted((prev) => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    setTasks((prev) => {
      const arr = [...prev];
      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      return arr;
    });
  };

  const moveTaskDown = (index) => {
    setTasks((prev) => {
      if (index >= prev.length - 1) return prev;
      const arr = [...prev];
      [arr[index + 1], arr[index]] = [arr[index], arr[index + 1]];
      return arr;
    });
  };

  return (
    <div className="to-do-list">
      {/* top-right theme toggle */}
      <div className="toolbar">
        <ThemeToggleButton />
      </div>

      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={!!completed[index]}
              onChange={() => handleCheck(index)}
            />
            <span className={`text ${completed[index] ? 'completed' : ''}`}>
              {task}
            </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>☝</button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
