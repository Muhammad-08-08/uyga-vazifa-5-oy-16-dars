function Button({ setModal, children }) {
  return (
    <button
      onClick={() => {
        setModal(true);
      }}
      className="w-36 h-11 bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-lg text-2xl text-white shadow-md"
    >
      {children}
    </button>
  );
}

export default Button;
