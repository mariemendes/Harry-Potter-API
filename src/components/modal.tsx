import React from "react";
import Button from "./button";
import "../styles.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
      
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <div className="modal-content">
          {children}
          <Button onClick={onClose} className="modal-close">Fechar</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
