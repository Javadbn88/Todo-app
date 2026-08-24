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
}: TodoItemProps) {
  return (
    <li
      className="flex flex-row items-center gap-2 sm:gap-3
                 rounded-full border border-gray-800 bg-gray px-3 py-3 sm:px-4 shadow-sm hover:bg-gray-900 transition-colors"
    >
      {isEditing ? (
        <input
          value={editValue}
          onChange={(e) => onEditValueChange(e.target.value)}
          className="flex-1 min-w-0 text-white rounded-full border border-gray-800 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      ) : (
        <div className="flex flex-1 min-w-0 items-center gap-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}
            className="h-4 w-4 text-white shrink-0 accent-indigo-600"
          />

          <span
            className={`min-w-0 flex-1 text-sm sm:text-base break-words ${
              todo.completed ? "line-through text-white" : "text-white"
            }`}
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
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-800
                       text-white hover:bg-gray-900 active:bg-black transition-colors"
          >
            <Pencil className="h-4 w-4" />
          </button>
        )}

        <button
          onClick={onDelete}
          aria-label="Delete"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-800
                     text-white hover:bg-gray-900 active:bg-black transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
