import { useState } from "react";
import TaskGrid from "./TaskGrid";
import LocalDashbord from "./LocalDashbord.jsx";

const slides = [
    { id: "dashboard", label: "Local Dash", component: <LocalDashbord /> },
    { id: "task", label: "Task Grid", component: <TaskGrid /> },
  
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
    <div className="w-full">
      {/* Переключатели со стрелками */}
      <div className="flex justify-center items-center mb-4 space-x-4 text-lg font-semibold select-none">
        <button
          onClick={prevSlide}
          className="px-3 py-1 text-6xl font-bold rounded hover:scale-160 transition"
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        <span className="text-center text-6xl font-bold hover:scale-110 text-black text-shadow-2xs my-20">{slides[currentIndex].label}</span>

        <button
          onClick={nextSlide}
          className="px-3 py-1 text-6xl font-bold rounded hover:scale-160 transition"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>

      {/* Контент слайдов */}
      <div className="rounded-2xl p-4 w-full">
        {slides[currentIndex].component}
      </div>
    </div>
  );
}
