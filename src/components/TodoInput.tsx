import { Plus } from "lucide-react";

type TodoInputProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  darkTheme: boolean;
};

function TodoInput({ value, onChange, onAdd ,darkTheme}: TodoInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onAdd();
  };

  return (
    <div className="flex sm:flex-row gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        className={`flex-1 rounded-full px-4 py-2 text-sm sm:text-base
                   focus:outline-none focus:ring-1  ${
                    darkTheme ? 'bg-gary-100 focus:ring-indigo-500 text-white border border-gray-700' : 'bg-amber-100 text-black focus:ring-amber-500 border border-gray-300'
        }`}
      />

      <button
        onClick={onAdd}
        className={`rounded-full p-3 text-sm sm:text-base font-medium text-white
                   active:bg-indigo-800 transition-colors ${
                    darkTheme ? 'bg-indigo-900 hover:bg-indigo-700' : 'bg-amber-800 hover:bg-amber-700 '
                   }`}
      >
        <Plus className="h-4 w-4"/>
      </button>
    </div>
  );
}

export default TodoInput;
