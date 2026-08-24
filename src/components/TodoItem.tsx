import type { Todo } from "../types/todo";
import { Check, Pencil, Trash2 } from "lucide-react";

type TodoItemProps = {
  todo: Todo;
  isEditing: boolean;
  editValue: string;
  onEditValueChange: (value: string) => void;
  onToggle: () => void;
  onEdit: () => void;
  onSave: () => void;
  onDelete: () => void;
  darkTheme: boolean;
};

function TodoItem({
  todo,
  isEditing,
  editValue,
  onEditValueChange,
  onToggle,
  onEdit,
  onSave,
  onDelete,
  darkTheme,
}: TodoItemProps) {
  return (
    <li
      className={`flex flex-row items-center gap-2 sm:gap-3
                 rounded-full border px-3 py-3 sm:px-4 shadow-sm transition-colors ${
                   darkTheme
                     ? "border-gray-800 bg-gray-900 hover:bg-gray-800"
                     : "border-amber-100 bg-amber-100 hover:bg-amber-200/50"
                 }`}
    >
      {isEditing ? (
        <input
          value={editValue}
          onChange={(e) => onEditValueChange(e.target.value)}
          className={`flex-1 min-w-0 rounded-full border px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 ${
                       darkTheme
                         ? "text-white border-gray-800 bg-black focus:ring-indigo-500"
                         : "text-black border-amber-300 bg-white focus:ring-amber-500"
                     }`}
        />
      ) : (
        <div className="flex flex-1 min-w-0 items-center gap-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}
            className="h-4 w-4 shrink-0 accent-indigo-600"
          />

          <span
            className={`min-w-0 flex-1 text-sm sm:text-base break-words ${
              darkTheme ? "text-white" : "text-gray-800"
            } ${todo.completed ? "line-through opacity-60" : ""}`}
          >
            {todo.title}
          </span>
        </div>
      )}

      <div className="flex shrink-0 items-center gap-2">
        {isEditing ? (
          <button
            onClick={onSave}
            aria-label="Save"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600
                       text-white hover:bg-green-700 active:bg-green-800 transition-colors"
          >
            <Check className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={onEdit}
            aria-label="Edit"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full 
                        transition-colors ${
                        darkTheme
                          ? 'bg-gray-800 text-white hover:bg-gray-700'
                          : 'bg-gray-100/50 text-black hover:bg-gray-200'
                       }`}
          >
            <Pencil className="h-4 w-4" />
          </button>
        )}

        <button
          onClick={onDelete}
          aria-label="Delete"
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
            darkTheme
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-100/50 text-black hover:bg-gray-200"
          }`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
