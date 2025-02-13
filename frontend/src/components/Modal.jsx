const Modal = ({ onClose, children }) => {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={onClose}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            onClick={onClose}
          >
            ×
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  