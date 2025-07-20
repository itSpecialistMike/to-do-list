import { useEffect, useState } from "react";

export default function TaskDetailsModal({
  isOpen,
  onClose,
  title,
  description,
  completed,
  onComplete,
  onDelete,
  onSave, // добавляем callback для сохранения изменений { title, description }
}) {
  if (!isOpen) return null;

  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  // Сброс при открытии или смене задачи
  useEffect(() => {
    setIsCompleted(completed);
    setIsEditing(false);
    setEditTitle(title);
    setEditDescription(description);
  }, [completed, title, description, isOpen]);

  const handleCompleteClick = () => {
    onComplete();
    setIsCompleted(true);
  };

  const handleDeleteClick = () => {
    onDelete();
    onClose();
  };

  const handleSaveEdit = () => {
    if (editTitle.trim() === "") {
      alert("Заголовок не может быть пустым");
      return;
    }
    onSave({ title: editTitle.trim(), description: editDescription.trim() });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTitle(title);
    setEditDescription(description);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white p-6 rounded-4xl shadow-2xl w-[90%] max-w-lg text-black max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center m-4">
          {isEditing ? (
            <input
              type="text"
              className="text-xl font-bold border-b border-gray-400 focus:outline-none w-full pr-10"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              autoFocus
            />
          ) : (
            <h2 className="text-xl font-bold">{title}</h2>
          )}

          {!isEditing && (
            <button
              className="hover:animate-pulse ml-4"
              onClick={() => setIsEditing(true)}
              aria-label="Редактировать"
              title="Редактировать задачу"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>
            </button>
          )}
        </div>

        <div
          className="m-4 overflow-y-auto whitespace-pre-wrap text-gray-800 pr-2 mb-6"
          style={{ maxHeight: "50vh" }}
        >
          {isEditing ? (
            <textarea
              className="w-full h-32 border border-gray-400 rounded p-2 resize-y focus:outline-none"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          ) : (
            description
          )}
        </div>

        <div className="mt-auto flex justify-center">
          {isEditing ? (
            <>
              <button
                onClick={handleSaveEdit}
                className="transform mx-5 w-40 h-10 shadow-2xl bg-[#353b48] hover:scale-130 hover:bg-[#44bd32] text-white text-sm rounded-4xl transition duration-300 ease-in-out"
                type="button"
              >
                Сохранить
              </button>
              <button
                onClick={handleCancelEdit}
                className="transform mx-5 w-40 h-10 shadow-2xl bg-[#353b48] hover:scale-130 hover:bg-[#e84118] text-white text-sm rounded-4xl transition duration-300 ease-in-out"
                type="button"
              >
                Отмена
              </button>
            </>
          ) : (
            <>
              {!isCompleted ? (
                <button
                  onClick={handleCompleteClick}
                  className="transform mx-5 w-40 h-10 shadow-2xl bg-[#353b48] hover:scale-130 hover:bg-[#44bd32] text-white text-sm rounded-4xl transition duration-300 ease-in-out"
                  type="button"
                >
                  Выполнить
                </button>
              ) : (
                <button
                  onClick={handleDeleteClick}
                  className="transform mx-5 w-40 h-10 shadow-2xl bg-[#353b48] hover:scale-130 hover:bg-[#e84118] text-white text-sm rounded-4xl transition duration-300 ease-in-out"
                  type="button"
                >
                  Удалить
                </button>
              )}
              <button
                onClick={onClose}
                className="transform mx-5 w-40 h-10 shadow-2xl bg-[#353b48] hover:scale-130 hover:bg-[#40739e] text-white text-sm rounded-4xl transition duration-300 ease-in-out"
                type="button"
              >
                Закрыть
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
