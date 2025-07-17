// src/components/TaskDetailsModal.jsx
import { useEffect, useState } from 'react'

export default function TaskDetailsModal({
  isOpen,
  onClose,
  title,
  description,
  completed,
  onComplete,
  onDelete
}) {
  if (!isOpen) return null

  const [isCompleted, setIsCompleted] = useState(completed)

  // Сброс при открытии модалки (если открыл другую задачу)
  useEffect(() => {
    setIsCompleted(completed)
  }, [completed, isOpen])

  const handleCompleteClick = () => {
    onComplete()
    setIsCompleted(true)
  }

  const handleDeleteClick = () => {
    onDelete()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-4xl shadow-2xl w-[90%] max-w-lg text-black max-h-[80vh] flex flex-col">
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <div className="overflow-y-auto whitespace-pre-wrap text-gray-800 pr-2 mb-6" style={{ maxHeight: '50vh' }}>
          {description}
        </div>

        {/* Выполнить или статус */}
        

        <div className="mt-auto flex justify-center">
            {!isCompleted ? (
          <button
            onClick={handleCompleteClick}
            className="transform mx-5 w-40 h-10 shadow-2xl bg-[#353b48] 
            hover:scale-130 hover:bg-[#44bd32] text-white text-sm rounded-4xl 
            transition duration-300 ease-in-out"
          >
            Выполнить
          </button>
        ) : (
          <button
            onClick={handleDeleteClick}
            className="transform mx-5 w-40 h-10 shadow-2xl bg-[#353b48] 
            hover:scale-130 hover:bg-[#e84118] text-white text-sm rounded-4xl 
            transition duration-300 ease-in-out"
          >
            Удалить
          </button>
        )}
          <button
            onClick={onClose}
            className="transform mx-5 w-40 h-10 shadow-2xl bg-[#353b48] 
            hover:scale-130 hover:bg-[#40739e] text-white text-sm rounded-4xl 
            transition duration-300 ease-in-out"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}
