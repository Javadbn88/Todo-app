import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  editingIndex: number | null;
  editValue: string;
  onEditValueChange: (value: string) => void;
  onToggle: (id: number) => void;
  onEdit: (index: number) => void;
  onSave: (index: number) => void;
  onDelete: (id: number) => void;
  darkTheme: boolean;
};

function TodoList({
  todos,
  editingIndex,
  editValue,
  onEditValueChange,
  onToggle,
  onEdit,
  onSave,
  onDelete,
  darkTheme,
}: TodoListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {todos.map((item, index) => (
        <TodoItem
          key={item.id}
          todo={item}
          isEditing={editingIndex === index}
          editValue={editValue}
          onEditValueChange={onEditValueChange}
          onToggle={() => onToggle(item.id)}
          onEdit={() => onEdit(index)}
          onSave={() => onSave(index)}
          onDelete={() => onDelete(item.id)}
          darkTheme={darkTheme}
        />
      ))}
    </ul>
  );
}

export default TodoList;
