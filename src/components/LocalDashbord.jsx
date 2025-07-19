import TaskCard from './TaskCard'
import AddTaskModal from './AddTaskModal'
import AddTaskButton from './AddTaskButton'
import TaskDetailsModal from './TaskDetailsModal'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, completeTask, updateTask } from '../store/localTasksSlice'

export default function LocalDashboard() {
  const tasks = useSelector(state => state.localTasks || [])
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', description: '', id: null, completed: false })

  const handleAddTask = (title, description) => {
    dispatch(addTask(title, description))
  }

  const handleDelete = (id) => dispatch(deleteTask(id))
  const handleComplete = (id) => dispatch(completeTask(id))

  const handleOpenDetails = (task) => {
    setModalContent(task)
    setDetailsModalOpen(true)
  }

  // Новая функция для сохранения обновленных данных задачи
  const handleSave = ({ title, description }) => {
    if (!modalContent.id) return

    dispatch(updateTask({ 
      id: modalContent.id,
      title,
      description
    }))

    // Обновляем modalContent, чтобы UI сразу обновился
    setModalContent(prev => ({
      ...prev,
      title,
      description,
    }))

    // Выходим из режима редактирования (в TaskDetailsModal)
    // Для этого просто закрываем модалку, либо можно передавать проп для управления редактированием (в зависимости от реализации)
    // Здесь просто закрывать не будем, чтобы юзер видел обновления
  }

  return (
    <div className="mb-20 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60">
      {/* <p className='text-center text-6xl font-bold text-black text-shadow-2xs my-20'>Local dash</p> */}
      <div className="flex flex-wrap justify-center gap-x-5 sm:gap-x-10 gap-y-10 sm:gap-y-20">
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
        onSubmit={handleAddTask}
      />

      <TaskDetailsModal
        isOpen={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        title={modalContent.title}
        description={modalContent.description}
        completed={modalContent.completed}
        onComplete={() => handleComplete(modalContent.id)}
        onDelete={() => handleDelete(modalContent.id)}
        onSave={handleSave}  // передаём функцию сохранения
      />
    </div>
  )
}
