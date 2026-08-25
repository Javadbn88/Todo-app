import { useState, useEffect } from "react";
import type { Todo } from "./types/todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "todos";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [darkTheme, setDarkTheme] = useState(true);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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
    <div className={`min-h-screen px-4 py-8 ${
      darkTheme ? 'bg-gray-950' : 'bg-amber-50'
    }`}>

      <button onClick={() => setDarkTheme(!darkTheme)} className={`p-2 rounded-full ${
        darkTheme ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'
      }`}>
        {darkTheme ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4" />}
      </button>

      <div className="mx-auto w-full max-w-md">
        <h1 className={`text-2xl font-bold text-gray-800 text-center mb-6 ${
          darkTheme ? 'text-white' : 'text-gray-800'
        }`}>
          Todo App
        </h1>

        <TodoInput 
          value={todo} 
          onChange={setTodo} 
          onAdd={addTodo}
          darkTheme={darkTheme}
        />
        

        <TodoList
          todos={todos}
          editingIndex={editingIndex}
          editValue={editValue}
          onEditValueChange={setEditValue}
          onToggle={toggleTodo}
          onEdit={editTodo}
          onSave={saveTodo}
          onDelete={deleteTodo}
          darkTheme={darkTheme}
        />
      </div>
    </div>
  );
}

export default App;