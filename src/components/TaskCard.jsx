// src/components/TaskCard.jsx
export default function TaskCard({ title, description, onDelete, id, completed, onComplete, onOpenDetails }) {
  return (
    <div onClick={() => onOpenDetails({ id, title, description, completed })} 
    className={`relative w-64 h-[400px] text-2xl p-5 rounded-4xl shadow-2xl overflow-hidden
    hover:scale-125 transition-transform duration-300 ease-in-out 
    ${completed ? 'bg-[#44bd32] opacity-70 hover:opacity-100 transition duration-300 text-white' : 'bg-[#f1f2f6] text-black'}`}>
        <button
        onClick={(e) => {
            e.stopPropagation()
            onDelete(id)
            }}
        className="absolute top-5 right-5 text-sm transition duration-300 hover:scale-300 hover:rotate-360"
        >
        ❌ 
        </button>
        <h3 className="text-lg font-semibold text-wrap">{title}</h3>
        <p className="text-sm text-gray-600 text-wrap">{description}</p>

        {/* Кнопка или статус "Выполнена" */}
        {!completed ? (
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    onComplete(id)
                }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-10 shadow-2xl opacity-10 bg-[#353b48] hover:opacity-100 hover:bg-[#44bd32] text-white text-sm rounded-4xl hover:scale-130 transition duration-300 ease-in-out"
            >
            Выполнить
            </button>
        ) : (
            <div className="absolute bottom-10 left-1/2 text-4xl transform -translate-x-1/2 font-bold text-white">
            Выполнена
            </div>
        )}
    </div>
  )
}
