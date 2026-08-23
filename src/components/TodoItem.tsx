import type { Todo } from "../types/todo";

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
      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3
                 rounded-xl border border-gray-800 bg-gray px-4 py-3 shadow-sm"
    >
      {isEditing ? (
        <>
          <input
            value={editValue}
            onChange={(e) => onEditValueChange(e.target.value)}
            className="flex-1 text-white rounded-xl border border-gray-800 px-3 py-1.5 text-sm
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={onSave}
            className="self-start sm:self-auto rounded-md bg-green-600 px-3 py-1.5 text-sm
                       font-medium text-white hover:bg-green-700 transition-colors"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div className="flex flex-1 items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={onToggle}
              className="h-4 w-4 text-white shrink-0 accent-indigo-600"
            />

            <span
              className={`text-sm sm:text-base break-words ${
                todo.completed ? "line-through text-white" : "text-white"
              }`}
            >
              {todo.title}
            </span>
          </div>

          <button
            onClick={onEdit}
            className="self-start sm:self-auto rounded-md bg-gray-800 px-3 py-1.5 text-sm
                       font-medium text-white hover:bg-gray-900 transition-colors"
          >
            Edit
          </button>
        </>
      )}

      <button
        onClick={onDelete}
        className="self-start sm:self-auto rounded-md bg-gray-800 px-3 py-1.5 text-sm
                   font-medium text-white hover:bg-gray-900 transition-colors"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;