// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [isProductOpen, setIsProductOpen] = useState(false);

  const toggleProductMenu = () => {
    setIsProductOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-2xl">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className="font-bold text-shadow-2xs text-2xl">To-Do List...</h1>
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              onClick={toggleProductMenu}
              className="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
            >
              Product
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
              <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                {/* Вставь сюда свой выпадающий список, который у тебя уже есть */}
                {/* Это тот самый большой блок с пунктами: Analytics, Engagement и т.д. */}
              </div>
            )}
          </div>

          <a href="#" className="text-sm font-semibold text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900">
            Company
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
