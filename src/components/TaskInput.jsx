import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 justify-center w-full mb-5">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's the task"
        className="border pl-3 py-2 rounded-lg w-96"
      />
      <button
        type="submit"
        className="flex justify-center items-center border px-5 py-2 rounded-lg bg-[#1cad7f] border-[#1cad7f] hover:bg-[#2a7140] hover:border-[#2a7140] text-white"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
