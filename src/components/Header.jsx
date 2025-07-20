// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.svg";
import monke from "../assets/monke.gif";

export default function Header() {
  const [isProductOpen, setIsProductOpen] = useState(false);

  const toggleProductMenu = () => {
    setIsProductOpen((prev) => !prev);
  };

  return (
    <header className="bg-white text-2xl shadow-2xl">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center -m-1.5 p-1.5">
            <img
              src={icon}
              alt="Icon"
              className="h-20 w-20 mr-6 hover:scale-130 transition-transform duration-500"
            />
            <h1 className="font-bold">To-Do List...</h1>
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              onClick={toggleProductMenu}
              className="flex items-center gap-x-1 text-gray-900"
            >
              info
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`size-5 flex-none text-gray-400 transform transition-transform ${
                  isProductOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                />
              </svg>
            </button>

            {isProductOpen && (
              <div
                className="
                  absolute left-1/2 z-10
                   mt-3 w-screen max-w-md
                    -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5
                    my-6 gap-6 p-6 "
              >
                {/* Вставь сюда свой выпадающий список, который у тебя уже есть */}
                {/* Это тот самый большой блок с пунктами: Analytics, Engagement и т.д. */}
                {/* <img src={monke} /> */}
                <div className="flex justify-center items-center">
                  <div className="">
                    <h1 className="text-xl font-semibold text-gray-800 mb-2">
                      🚧 Проект в разработке
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Спасибо за проявленный интерес! <br /> Вы можете следить
                      за прогрессом в репозитории на GitHub.
                      <br />
                      <a
                        className="text-blue-600 hover:underline font-medium"
                        href="https://github.com/itSpecialistMike/to-do-list"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Перейти к репозиторию →
                      </a>{" "}
                      <br />
                      <a
                        className="text-blue-600 hover:underline font-medium"
                        href="#ProjectDescription"
                      >
                        Описние проекта →
                      </a>
                    </p>
                  </div>
                  <img
                    src={monke}
                    alt="Разработка"
                    className="w-36 h-36 rounded-2xl shadow-md object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className=" text-gray-900 flex items-center gap-3">
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
