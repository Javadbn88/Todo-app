import { useState } from "react";
import type { Todo } from "./types/todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const addTodo = () => {
    if (todo.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (index: number) => {
    setEditingIndex(index);
    setEditValue(todos[index].title);
  };

  const saveTodo = (index: number) => {
    if (editValue.trim() === "") return;

    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], title: editValue };

    setTodos(newTodos);
    setEditingIndex(null);
    setEditValue("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-2xl text-white font-bold text-gray-800 text-center mb-6">
          Todo App
        </h1>

        <TodoInput value={todo} onChange={setTodo} onAdd={addTodo} />

        <TodoList
          todos={todos}
          editingIndex={editingIndex}
          editValue={editValue}
          onEditValueChange={setEditValue}
          onToggle={toggleTodo}
          onEdit={editTodo}
          onSave={saveTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
