"use client";

import tasks from "./tasks";
import { Task } from "./models/Task";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  const addTask = () => {
    task.push({
      id: tasks.length + 1,
      lable: task,
      checked: false,
    });
    setTask("");
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <h1>THINGS TO DO:</h1>
      <hr />
      <p>Looks like you're absolutely free today</p>
      <hr />
      <p>DONE: {tasks.filter((t) => t.checked).length}</p>
      <form className="space-x-3">
        <input
          placeholder="Enter new task"
          onChange={(e) => setTask(e.target.value)}
          className="input input-bordered"
        />
        <button type="submit" className="btn btn-neutral" onClick={addTask}>
          Add Task
        </button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div>
                <input type="checkbox" defaultChecked={task.checked}></input>
                {task.checked ? (
                  <span>
                    <del>{task.label}</del>
                  </span>
                ) : (
                  <span>{task.label}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </form>
    </main>
  );
}
