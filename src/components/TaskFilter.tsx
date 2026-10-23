import "./TaskFilter.css";

export function TaskFilter() {
  return (
    <div className="task-filter" role="group" aria-label="Filter tasks">
      <button type="button" className="task-filter__button task-filter__button--active">
        All
      </button>
      <button type="button" className="task-filter__button">
        Active
      </button>
      <button type="button" className="task-filter__button">
        Completed
      </button>
    </div>
  );
}
