type TodoInputProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
};

function TodoInput({ value, onChange, onAdd }: TodoInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onAdd();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        className="flex-1 rounded-full border text-white border-gray-700 px-4 py-2 text-sm sm:text-base
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={onAdd}
        className="rounded-full bg-indigo-600 px-4 py-2 text-sm sm:text-base font-medium text-white
                   hover:bg-indigo-700 active:bg-indigo-800 transition-colors"
      >
        Add to list
      </button>
    </div>
  );
}

export default TodoInput;
