// src/components/AddTaskButton.jsx
export default function AddTaskButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-64 h-100 text-2xl rounded-4xl shadow-2xl bg-[#353b48] text-white overflow-hidden text-shadow-xl 
        hover:scale-125 hover:bg-[#40739e] 
        transition duration-300 ease-in-out"
    >
      Добавить задачу
    </button>
  )
}
