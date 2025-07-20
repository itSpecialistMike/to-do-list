// src/components/ProjectDescription.jsx
import fabric from '../assets/fabric.gif' 

export default function ProjectDescription() {
  return (
    <div className="rounded-4xl p-10 mx-auto w-full max-w-screen-xl my-20 shadow-2xl bg-white space-y-12">
      
      {/* Что такое To-Do List? */}
      <section>
        <h1 className="text-3xl font-bold mb-5">Что такое To-Do List?</h1>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <p className="text-gray-800 text-lg max-w-5xl leading-relaxed">
            To-Do List — это простое, но эффективное приложение для управления задачами. 
            Оно позволяет пользователям создавать списки дел, отмечать выполненные пункты, 
            редактировать и удалять задачи. Цель проекта — помочь пользователям организовать 
            рабочие процессы и личные планы, повысить продуктивность и снизить уровень забывчивости.
            Приложение интуитивно понятно, минималистично по дизайну и адаптировано под любые устройства.
          </p>
        </div>
        
      </section>

      {/* Техническая реализация клиентской части */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Техническая реализация клиентской части</h2>
        <p className="text-gray-800 mb-3 leading-relaxed">
          Клиентская часть разработана с использованием <strong>React</strong> — современной JavaScript-библиотеки для построения интерфейсов. Она обеспечивает отзывчивый и динамичный UI, плавную навигацию и высокую производительность.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li><strong>Redux</strong> — глобальное управление состоянием (например, для авторизации и задач).</li>
          <li><strong>LocalStorage</strong> — локальное сохранение задач с офлайн-доступом.</li>
          <li><strong>React Router</strong> — маршрутизация между страницами.</li>
          <li>Модульная архитектура компонентов.</li>
          <li>Адаптивный дизайн под все устройства.</li>
        </ul>
      </section>

      {/* Реализация бэкенда */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Реализация бэкенда</h2>
        <p className="text-gray-800 leading-relaxed">
          Серверная часть реализована на языке <strong>Go</strong> с использованием REST API. Бэкенд обрабатывает регистрацию, аутентификацию, CRUD-операции для задач и взаимодействие с базой данных <strong>PostgreSQL</strong>. Архитектура сервиса организована по принципам чистого кода с разделением на слои контроллеров, сервисов и хранилища.
        </p>
      </section>

      {/* Инфраструктура */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Инфраструктура</h2>
        <p className="text-gray-800 max-w-4xl text-pretty leading-relaxed">
          Проект развернут в <strong>Kubernetes</strong>-кластере. Все компоненты — клиент, сервер и база данных — упакованы в Docker-контейнеры и управляются с помощью манифестов Kubernetes. Это обеспечивает гибкость масштабирования, отказоустойчивость и простоту обновлений.
        </p>
      </section>

      {/* Автоматизация */}
      <section className="">
        <div className="md:flex md:items-center gap-10">
          {/* Левая колонка: заголовок + текст */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Автоматизации
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg max-w-4xl text-wrap md:text-left">
              Процесс <strong>CI/CD</strong> автоматизирован с помощью <strong>Jenkins</strong>. 
              При каждом коммите в репозиторий запускается пайплайн, включающий:
              сборку контейнеров, прогон тестов, публикацию Docker-образов и обновление приложения 
              в <strong>Kubernetes</strong> — всё это происходит автоматически, без ручного вмешательства.
            </p>
          </div>

          {/* Правая колонка: гифка */}
          <div className="mt-8 md:mt-20 flex justify-center">
            <img src={fabric} alt="CI/CD pipeline" className="w-60 rounded-3xl" />
          </div>
        </div>        
    </section>
    
    </div>
  );
}
