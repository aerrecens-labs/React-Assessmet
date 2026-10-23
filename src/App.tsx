import { useState } from "react";
import { TaskFilter } from "./components/TaskFilter";
import { TaskList } from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import type { Task } from "./types/task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleToggle = (id: number) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Task Dashboard</h1>
      </header>

      <TaskFilter />

      <main className="app__main">
        <TaskList tasks={tasks} onToggle={handleToggle} />
      </main>
    </div>
  );
}

export default App;
