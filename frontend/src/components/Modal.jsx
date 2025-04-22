const Modal = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="bg-white p-5 sm:p-6 rounded-lg shadow-xl max-w-3xl w-full relative transform transition-all duration-300 scale-100 sm:scale-105"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg hover:bg-red-600 transition-all duration-300"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="flex justify-center items-center max-h-[80vh] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
