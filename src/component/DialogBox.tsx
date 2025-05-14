import { X } from 'phosphor-react';
import React from 'react';

interface DialogBoxProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="relative w-[463px] bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-custom-bg flex items-center justify-center"
        >
          <X size={20} color="white" />
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
