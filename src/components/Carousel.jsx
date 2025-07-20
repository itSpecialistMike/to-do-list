import { useState } from "react";
import LocalDashbord from "./LocalDashbord.jsx";
import TaskGrid from "./TaskGrid";

const slides = [
  { id: "dashboard", label: "Local Dash", component: <LocalDashbord /> },
  { id: "task", label: "Dlobal DB", component: <TaskGrid /> },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full relative min-h-[300px]">
      {/* Переключатели */}
      <div className="flex justify-center items-center mb-4 space-x-6 font-semibold select-none">
        <button
          onClick={prevSlide}
          className="px-5 py-3 text-3xl font-bold rounded-3xl bg-white text-gray-800 shadow-inner border border-gray-300 hover:shadow-md hover:scale-105 transition-all duration-300"
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        <span className="text-center text-3xl font-bold text-gray-800 hover:scale-105 transition-transform duration-300 my-20">
          {slides[currentIndex].label}
        </span>

        <button
          onClick={nextSlide}
          className="px-5 py-3 text-3xl font-bold rounded-3xl bg-white text-gray-800 shadow-inner border border-gray-300 hover:shadow-md hover:scale-105 transition-all duration-300"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>




      {/* Контент слайдов: все рендерим, показываем только текущий слайд */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              opacity: currentIndex === index ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              position: currentIndex === index ? "relative" : "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: currentIndex === index ? "auto" : "none",
            }}
          >
            {slide.component}
          </div>
        ))}
      </div>
    </div>
  );
}
