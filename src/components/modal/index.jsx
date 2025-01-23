function Modal({ children, selModal }) {
  return (
    <div className="w-full h-[100vh] fixed top-0 flex items-center justify-center">
      <div
        onClick={() => {
          selModal(false);
        }}
        className="w-full h-[100vh] bg-black/50 fixed top-0 left-0"
      ></div>
      <div className=" mt-10 w-max bg-white shadow-lg absolute px-10 py-20 rounded-lg shadow-black">
        {children}
      </div>
    </div>
  );
}

export default Modal;
