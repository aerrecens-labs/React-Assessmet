import type { Task } from "../types/task";
import { TaskItem } from "./TaskItem";
import "./TaskList.css";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
};

export function TaskList({ tasks, onToggle }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="task-list__empty">No tasks to show.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
}
