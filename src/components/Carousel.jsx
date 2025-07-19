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
      <div className="flex justify-center items-center mb-4 space-x-4 text-lg font-semibold select-none">
        <button
          onClick={prevSlide}
          className="px-3 py-1 text-6xl font-bold rounded hover:scale-160 transition-transform duration-300"
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        <span className="text-center text-6xl font-bold hover:scale-110 transition-transform duration-300 text-black my-20">
          {slides[currentIndex].label}
        </span>

        <button
          onClick={nextSlide}
          className="px-3 py-1 text-6xl font-bold rounded transition-transform duration-300 hover:scale-160"
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
