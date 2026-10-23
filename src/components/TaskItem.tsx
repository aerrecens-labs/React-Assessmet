import type { Task } from "../types/task";
import "./TaskItem.css";

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
};

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? "task-item--completed" : ""}`}>
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-item__checkbox"
        />
        <span className="task-item__title">{task.title}</span>
      </label>
      <span className={`task-item__priority task-item__priority--${task.priority}`}>
        {task.priority}
      </span>
    </li>
  );
}
