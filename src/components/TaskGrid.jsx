// src/components/TaskGrid.jsx
import TaskCard from './TaskCard'
import AddTaskModal from './AddTaskModal'
import AddTaskButton from './AddTaskButton'
import TaskDetailsModal from './TaskDetailsModal'
import { useState } from 'react'
import { useEffect } from 'react'
import { mockTasks } from '../api/mockTasks'

const API_URL = import.meta.env.VITE_API_URL
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

export default function TaskGrid() {
    // 🧠 Состояние задач
    const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (USE_MOCK) {
      // 👇 Используем фейковые данные
      setTasks(mockTasks)
    } else {
        // 👇 Загружаем с API
        fetch(`${API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error('Ошибка загрузки с API:', err))
        }
    }, [])

    // ➕ Добавление новой задачи
    const addTask = (title, description) => {
    const newTask = {
        id: crypto.randomUUID(),
        title,
        description,
        completed: false,
    }
    setTasks(prev => [...prev, newTask])
    }

    // ❌ Удаление задачи
    const handleDelete = (idToDelete) => {
    setTasks(prev => prev.filter(task => task.id !== idToDelete))
    }

    // ✅ Отметить задачу как выполненную
    const handleComplete = (id) => {
    setTasks(prev =>
        prev.map(task =>
        task.id === id ? { ...task, completed: true } : task
        )
    )
    }

    // 📌 Модалка создания задачи
    const [isModalOpen, setIsModalOpen] = useState(false)

    // 🔍 Модалка деталей задачи
    const [detailsModalOpen, setDetailsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
    })

    // 📄 Открыть подробности задачи
    const handleOpenDetails = (task) => {
        setModalContent(task)
        setDetailsModalOpen(true)
    }


    return (
    
        <div className="mx-60">
            <p className='text-center text-6xl font-bold text-black text-shadow-2xs my-20'>Общий дашборд</p>
            <div className="flex flex-wrap justify-items-center justify-center gap-x-10 gap-y-20">
                {tasks.map(task => (
                    <TaskCard 
                        key={task.id}  
                        id={task.id} 
                        title={task.title} 
                        description={task.description} 
                        completed={task.completed} 
                        onDelete={handleDelete}
                        onComplete={handleComplete}
                        onOpenDetails={handleOpenDetails}
                    />
                ))}
                <AddTaskButton onClick={() => setIsModalOpen(true)} />
            </div>    

            <AddTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={addTask}
            />


            <TaskDetailsModal
                isOpen={detailsModalOpen}
                onClose={() => setDetailsModalOpen(false)}
                title={modalContent.title}
                description={modalContent.description}
                completed={modalContent.completed}
                onComplete={() => handleComplete(modalContent.id)}
                onDelete={() => handleDelete(modalContent.id)}
            />

        </div>
  )
}
