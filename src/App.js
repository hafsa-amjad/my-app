import React, { useState } from 'react';
import './App.css';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [taskInputs, setTaskInputs] = useState({});
  const [completed, setCompleted] = useState({}); // ✅ track which tasks are checked

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleInputClick() {
    setShowCheckbox(true);
  }

  function handleTaskInputChange(index, value) {
    setTaskInputs(prev => ({ ...prev, [index]: value }));
  }

  function handleCheck(index) {
    setCompleted(prev => ({ ...prev, [index]: !prev[index] }));
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    const updatedInputs = { ...taskInputs };
    delete updatedInputs[index];
    setTaskInputs(updatedInputs);

    const updatedCompleted = { ...completed };
    delete updatedCompleted[index];
    setCompleted(updatedCompleted);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          onClick={handleInputClick}
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {/* ✅ Checkbox next to each task */}
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

export default ToDoList;
