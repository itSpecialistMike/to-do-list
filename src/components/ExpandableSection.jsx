import { useState, useRef, useEffect } from 'react';

export default function ExpandableSection({ title, brief, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  // Для вычисления высоты раскрытого контента
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isExpanded]);

  return (
    <div className="space-y-4 relative">
      <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>

      <p className="text-gray-700 leading-relaxed">{brief}</p>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden relative`}
        style={{ maxHeight: height }}
      >
        {/* Содержимое (спойлер) */}
        <div ref={contentRef} className="pt-2">
          {children}
        </div>

        {/* Размытие внизу, если скрыто */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-16   pointer-events-none rounded-b-2xl" />
        )}
      </div>

      <button
        className="text-indigo-600 font-semibold hover:underline transition"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Скрыть' : 'Подробнее'}
      </button>
    </div>
  );
}
