// src/components/TaskGrid.jsx
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";
import AddTaskButton from "./AddTaskButton";
import TaskDetailsModal from "./TaskDetailsModal";
import { useState } from "react";
import { useEffect } from "react";
import { mockTasks } from "../api/mockTasks";

const API_URL = import.meta.env.VITE_API_URL;
const USE_MOCK = import.meta.env.VITE_USE_MOCK === "false";

export default function TaskGrid() {
  // 🧠 Состояние задач
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (USE_MOCK) {
      //  Используем фейковые данные
      setTasks(mockTasks);
    } else {
      //  Загружаем с API
      // fetch(`${API_URL}/list`)
      fetch("/api/list")
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch((err) => console.error("Ошибка загрузки с API:", err));
    }
  }, []);

  // ➕ Добавление новой задачи
  const addTask = async (title, description) => {
    try {
      const response = await fetch(`api/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при добавлении задачи");
      }

      const createdTask = await response.json();
      setTasks((prev) => [...prev, createdTask]); // Добавляем задачу, которую вернул сервер
    } catch (err) {
      console.error("Ошибка добавления задачи:", err);
    }
  };

  //  Удаление задачи
  const handleDelete = async (idToDelete) => {
    try {
      const response = await fetch(`api/delete/${idToDelete}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Ошибка при удалении задачи");
      }

      setTasks((prev) => prev.filter((task) => task.id !== idToDelete));
    } catch (err) {
      console.error("Ошибка при удалении задачи:", err);
    }
  };

  //  Отметить задачу как выполненную
  const handleComplete = async (id) => {
    try {
      const response = await fetch(`api/done/${id}`, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Ошибка при завершении задачи");
      }

      // Обновляем состояние локально
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
    } catch (err) {
      console.error("Ошибка при завершении задачи:", err);
    }
  };

  //  Модалка создания задачи
  const [isModalOpen, setIsModalOpen] = useState(false);

  //  Модалка деталей задачи
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  //  Открыть подробности задачи
  const handleOpenDetails = (task) => {
    setModalContent(task);
    setDetailsModalOpen(true);
  };

  // Новая функция для сохранения обновленных данных задачи
  const handleSave = async ({ title, description }) => {
    const id = modalContent.id;

    try {
      const response = await fetch(`/api/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }), // 🔥 Точно как в curl
      });

      if (!response.ok) {
        throw new Error("Ошибка при обновлении задачи");
      }

      // Локально обновляем UI
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, title, description } : task
        )
      );
      setModalContent((prev) => ({ ...prev, title, description }));
    } catch (err) {
      console.error("Ошибка при обновлении задачи:", err);
    }
  };

  return (
    <div className="mb-20 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60">
      {/* <p className='text-center text-6xl font-bold text-black text-shadow-2xs my-20'>Server DB dash</p> */}
      <div className="flex flex-wrap justify-center gap-x-5 sm:gap-x-10 gap-y-10 sm:gap-y-20">
        {tasks.map((task) => (
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
        onSave={handleSave}
      />
    </div>
  );
}
