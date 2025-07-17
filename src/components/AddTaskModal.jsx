// src/components/Modal.jsx
import { useState, useEffect, useRef } from 'react'

export default function Modal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTitle('')
      setDescription('')
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [isOpen])

  const handleSubmit = () => {
    if (title.trim()) {
      onSubmit(title, description)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white text-black rounded-4xl shadow-lg p-6 w-96 z-50">
        <h2 className="mb-4">Новая задача</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded-lg mb-3"
        />
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded-lg mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-4xl hover:bg-gray-400 transition"
          >
            Отмена
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-white rounded-4xl hover:bg-[#40739e] bg-[#353b48] transition"
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  )
}
