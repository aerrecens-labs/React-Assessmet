# Task Dashboard — React Coding Test

A small React + TypeScript Task Dashboard used as a **10-minute live coding exercise** for frontend candidates.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

# React Coding Test

## Time Limit

10 minutes

## Task

Implement task filtering in the Task Dashboard.

The user should be able to filter tasks by:

- All
- Active
- Completed

### Requirements

- All displays every task.
- Active displays only incomplete tasks.
- Completed displays only completed tasks.
- The task list should update immediately when the filter changes.
- Existing task completion behavior must continue working.

### Bonus

If you finish early, display the number of currently visible tasks.

## Rules

- Use React and TypeScript.
- Keep the existing project structure where practical.
- Do not install unnecessary dependencies.
- Focus on functionality and clean code.

## Run

```bash
npm install
npm run dev
```

## Evaluation

You will be evaluated on:

* Understanding of the existing React code
* React state management
* Component design
* TypeScript usage
* Correct functionality
* Code quality
* Ability to work independently within the time limit


## What’s already implemented

- Task list rendered from local mock data
- Priority labels
- Completed / incomplete visual states
- Checkbox toggle to mark tasks complete or active
- Responsive layout and basic styling
- Filter control UI (not wired up yet)

## Stack

- React
- TypeScript
- Vite
- CSS (no UI framework)

## Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Typecheck and production build |
| `npm run preview` | Preview the production build |

## Project structure

```text
src/
  components/
    TaskList.tsx
    TaskItem.tsx
    TaskFilter.tsx
  data/
    tasks.ts
  types/
    task.ts
  App.tsx
  main.tsx
  index.css
```

## Interviewer notes

- Time box: **10 minutes**
- Core task: wire up **All / Active / Completed** filtering with React state
- Optional bonus: show a count of currently visible tasks
- Do not share a solution with the candidate before or during the exercise
