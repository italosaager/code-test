import React from "react";
import "./modal.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}
