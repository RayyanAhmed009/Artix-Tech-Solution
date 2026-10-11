import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    const isImage = (target) => {
      return target instanceof Element && !!target.closest("images");
    };

    const handleContextMenu = (e) => {
      if (isImage(e.target)) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e) => {
      if (isImage(e.target)) {
        e.preventDefault();
      }
    };

    const handleSelectStart = (e) => {
      if (isImage(e.target)) {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e) => {
      if (isImage(e.target)) {
        e.target.style.webkitTouchCallout = "none";
        e.target.style.webkitUserSelect = "none";
        e.target.style.userSelect = "none";
      }
    };

    document.addEventListener("contextmenu", handleContextMenu, true);
    document.addEventListener("dragstart", handleDragStart, true);
    document.addEventListener("selectstart", handleSelectStart, true);
    document.addEventListener("touchstart", handleTouchStart, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, true);
      document.removeEventListener("dragstart", handleDragStart, true);
      document.removeEventListener("selectstart", handleSelectStart, true);
      document.removeEventListener("touchstart", handleTouchStart, true);
    };
  }, []);

  return null;
}