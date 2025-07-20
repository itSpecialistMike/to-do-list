// src/components/ProjectDescription.jsx
import fabric from "../assets/fabric.gif";
import restpic from "../assets/rest-api.png";
import golangguy from "../assets/golangguy.png";
import { useState } from "react";
import ExpandableSection from "./ExpandableSection";

export default function ProjectDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="rounded-4xl p-10 mx-auto w-full max-w-screen-xl my-30 shadow-2xl bg-white space-y-20"
      id="ProjectDescription"
    >
      {/* Что такое To-Do List? */}
      <section className="p-4">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
          Что такое <span className="text-indigo-600">To-Do List</span>?
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <p className="text-gray-800 text-lg leading-relaxed max-w-5xl">
            <strong>To-Do List</strong> — это простое, но эффективное приложение
            для управления задачами. Оно позволяет создавать списки дел,
            редактировать, удалять задачи и отмечать их выполнение. Интерфейс
            интуитивен, минималистичен и адаптирован под любые устройства — от
            мобильных до десктопов.
          </p>
        </div>
      </section>

      {/* Техническая реализация клиентской части */}
      <section className="bg-gradient-to-br from-slate-100 to-white p-8 rounded-2xl shadow-inner">
        <ExpandableSection
          title="Клиентская часть"
          brief={
            <>
              Интерфейс создан на <strong>React</strong> с фокусом на
              отзывчивость, скорость и модульность.
            </>
          }
        >
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
            <li>
              <strong>Redux</strong> — управление состоянием.
            </li>
            <li>
              <strong>LocalStorage</strong> — офлайн-доступ.
            </li>
            <li>
              <strong>React Router</strong> — маршруты без перезагрузки.
            </li>
            <li>Компонентный подход и переиспользуемость.</li>
            <li>Полная адаптивность для всех экранов.</li>
          </ul>
        </ExpandableSection>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-10 border-l-4 border-indigo-500">
        <ExpandableSection
          title="Серверная часть"
          brief={
            <>
              <strong className="text-xl">Бэкенд</strong> построен на{" "}
              <strong>Go</strong> и реализует <strong>REST API</strong> —
              архитектурный стиль на основе HTTP и CRUD-операций.
            </>
          }
        >
          <div className="md:flex gap-8">
            <img
              src={restpic}
              className="hidden md:block h-[300px] pt-6"
              alt="REST API"
            />
            <div className="text-gray-800 leading-relaxed space-y-4">
              <p>
                REST API обеспечивает простую и предсказуемую структуру для
                интеграций и фронтенда. Вся логика охватывает{" "}
                <strong>CRUD-операции</strong>, регистрацию, авторизацию и
                валидацию сессий.
              </p>

              <p>
                Хранение реализовано на <strong>PostgreSQL</strong> — надёжной
                реляционной СУБД, гарантирующей безопасность и согласованность
                данных.
              </p>

              <p>
                Вся архитектура придерживается принципов <em>чистого кода</em>:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <strong>Контроллеры</strong> — обрабатывают HTTP-запросы;
                </li>
                <li>
                  <strong>Сервисы</strong> — реализуют бизнес-логику;
                </li>
                <li>
                  <strong>Репозитории</strong> — работают с БД и SQL.
                </li>
              </ul>

              <p>
                Такой подход делает сервер стабильным, читаемым и
                масштабируемым. REST упрощает отладку и интеграцию.
              </p>
            </div>
          </div>

          <div className="md:flex gap-8 mt-10">
            <div className="text-gray-800 leading-relaxed space-y-4">
              <p>
                <strong className="text-xl">Микросервис</strong> авторизации
                реализован через <strong>gRPC</strong> — высокопроизводительный
                RPC-фреймворк от Google.
              </p>

              <p>
                Он использует бинарный формат <strong>Protocol Buffers</strong>{" "}
                и HTTP/2 — это уменьшает объём передаваемых данных и повышает
                скорость.
              </p>

              <p>gRPC особенно эффективен при:</p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Минимизации задержек между сервисами;</li>
                <li>Жёсткой типизации и автогенерации кода;</li>
                <li>Поддержке стриминга (одно- и двунаправленного);</li>
                <li>Снижении избыточности по сравнению с JSON;</li>
                <li>Высокой масштабируемости при нагрузках.</li>
              </ul>

              <p>
                Это решение делает архитектуру гибкой, производительной и
                готовой к масштабированию.
              </p>
            </div>

            <img
              src={golangguy}
              className="hidden md:block h-[260px] pt-6"
              alt="Golang Dev"
            />
          </div>
        </ExpandableSection>
      </section>

      {/* Бэкенд */}

      {/* Инфраструктура */}
      <section className="bg-gradient-to-br from-slate-100 to-white p-8 rounded-2xl shadow-inner">
        <ExpandableSection
          title="Инфраструктура"
          brief={
            <>
              Проект развернут в <strong>Kubernetes</strong>-кластере с
              использованием Docker-контейнеров. Масштабирование и
              отказоустойчивость достигаются через автоматизацию и манифесты.
            </>
          }
        >
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
            <li>Автоматическое масштабирование под нагрузкой;</li>
            <li>Балансировка трафика и маршрутизация через Ingress;</li>
            <li>Хранение конфигураций и секретов (ConfigMap и Secrets);</li>
            <li>Мониторинг и автоперезапуск при сбоях;</li>
            <li>Высокая доступность и отказоустойчивость.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Благодаря такой инфраструктуре все изменения доставляются в
            продакшен быстро и надежно, без участия человека.
          </p>
        </ExpandableSection>
      </section>

      {/* Автоматизация */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-10 border-l-4 border-indigo-500">
        <ExpandableSection
          title="Автоматизация"
          brief={
            <>
              Процесс <strong>CI/CD</strong> автоматизирован с помощью{" "}
              <strong>Jenkins</strong>. Пайплайн собирает Docker-образы,
              прогоняет тесты, публикует образы и разворачивает приложения в{" "}
              <strong>Kubernetes</strong>.
            </>
          }
        >
          <div className="md:flex gap-8">
            <img
              src={fabric}
              className="hidden md:block h-[300px] pt-6 rounded-3xl border shadow-lg"
              alt="CI/CD pipeline"
            />
            <div className="text-gray-800 leading-relaxed space-y-4 max-w-xl">
              <p>
                <strong>CI (Continuous Integration)</strong> — непрерывная
                интеграция, при которой код автоматически собирается и
                тестируется при каждом коммите. Это позволяет быстро выявлять
                ошибки и сохранять качество проекта.
              </p>

              <p>
                <strong>CD (Continuous Delivery/Deployment)</strong>{" "}
                обеспечивает автоматическую публикацию протестированных версий
                приложения в staging и production окружения, минимизируя ручные
                операции и человеческий фактор.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Автоматическая сборка и тестирование Docker-образов;</li>
                <li>Публикация образов в Docker Registry;</li>
                <li>Развёртывание обновлений на серверы или в Kubernetes;</li>
                <li>Мониторинг состояния пайплайна и уведомления о сбоях;</li>
                <li>Быстрая обратная связь для разработчиков.</li>
              </ul>

              <p>
                Такой подход повышает стабильность, скорость выпуска новых
                версий и позволяет команде сосредоточиться на разработке, а не
                на рутинных операциях.
              </p>
            </div>
          </div>
        </ExpandableSection>
      </section>
    </div>
  );
}
