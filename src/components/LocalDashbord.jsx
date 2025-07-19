import TaskCard from './TaskCard'
import AddTaskModal from './AddTaskModal'
import AddTaskButton from './AddTaskButton'
import TaskDetailsModal from './TaskDetailsModal'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, completeTask } from '../store/localTasksSlice'

export default function LocalDashboard() {
  const tasks = useSelector(state => state.localTasks || []) // страховка на случай undefined
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', description: '' })

  const handleAddTask = (title, description) => {
    dispatch(addTask(title, description))
  }

  const handleDelete = (id) => dispatch(deleteTask(id))
  const handleComplete = (id) => dispatch(completeTask(id))

  const handleOpenDetails = (task) => {
    setModalContent(task)
    setDetailsModalOpen(true)
  }

  return (
    <div className="mx-60">
      <p className='text-center text-6xl font-bold text-black text-shadow-2xs my-20'>Личные дашборд</p>
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
      />
    </div>
  )
}
