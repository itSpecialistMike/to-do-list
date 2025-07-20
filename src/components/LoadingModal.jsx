// src/components/LoadingModal.jsx
import { useEffect, useState } from "react";
import gif from "../assets/loading-wut.gif";

export default function LoadingModal() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000); // Закроется через 1 сек

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center">
      <img src={gif} alt="Loading" className="w-64 h-64" />
    </div>
  );
}
