import { FaRegTrashCan } from "react-icons/fa6";

const Task = ({ task, onDelete, onToggleDone }) => {
  return (
    <li className="flex justify-between items-center  border px-5 py-2 rounded-lg mb-2 w-full bg-blue-400">
      <span
        onClick={onToggleDone}
        style={{ textDecoration: task.done ? "line-through" : "none" }}
        className="text-white cursor-pointer"
      >
        {task.text}
      </span>
      <button onClick={onDelete} className="text-white">
        <FaRegTrashCan />
      </button>
    </li>
  );
};

export default Task;
