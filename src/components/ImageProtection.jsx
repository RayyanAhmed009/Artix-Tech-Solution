import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.closest("image")) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e) => {
      if (e.target.closest("image")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}