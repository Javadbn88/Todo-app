# ✅ Todo App

A simple, clean todo list app built with **React**, **TypeScript**, and **Tailwind CSS**, powered by **Vite**.

## Features

- ➕ Add new tasks
- ✏️ Edit existing tasks inline
- ☑️ Mark tasks as complete / incomplete
- 🗑️ Delete tasks
- 🌗 Toggle between dark and light theme
- 💾 Persistent storage — tasks and theme preference are saved in `localStorage` and restored on page reload

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — icons

## Project Structure

```
src/
├── components/
│   ├── TodoInput.tsx    # Input field + add button
│   ├── TodoItem.tsx     # Single todo row (view/edit/toggle/delete)
│   └── TodoList.tsx     # Renders the list of TodoItem components
├── types/
│   └── todo.ts          # Todo type definition
├── App.tsx              # Main app state and logic
├── main.tsx             # App entry point
└── index.css            # Tailwind import
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.19+ or v22.12+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the local dev server:

```bash
npm run dev
```

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## How It Works

- Tasks are stored in React state and automatically synced to `localStorage` on every change, so your list survives a page refresh.
- The dark/light theme preference is also saved in `localStorage` under its own key, so the app remembers your last selected theme.
- Editing a task swaps that row into an inline text input; saving or pressing the checkmark commits the change.

## Roadmap Ideas

- [ ] Filter tasks (All / Active / Completed)
- [ ] Show remaining task count
- [ ] "Clear completed" button
- [ ] Empty state illustration/message
- [ ] Cancel editing with `Escape` key

## License

This project is open for personal and educational use.
