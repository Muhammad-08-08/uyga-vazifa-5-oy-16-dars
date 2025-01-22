function Modal({ setState, state, setAdd, add, randomId, selModal }) {
  return (
    <div className="w-full h-[100vh] fixed top-0 flex items-center justify-center">
      <div
        onClick={() => {
          selModal(false);
        }}
        className="w-full h-[100vh] bg-black/50 fixed top-0 left-0"
      ></div>
      <div className="flex flex-col gap-6 mt-10 w-max bg-white shadow-lg absolute px-10 py-20 rounded-lg shadow-black">
        <div className="flex flex-col gap-1 w-96">
          <label>ism</label>
          <input
            value={state.name}
            onChange={(e) => {
              const new_state = {
                ...state,
                name: e.currentTarget.value,
              };
              setState(new_state);
            }}
            className="border border-gray-300 h-11 pl-3"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 w-96">
          <label>familya</label>
          <input
            value={state.surName}
            onChange={(e) => {
              const new_state = {
                ...state,
                surName: e.currentTarget.value,
              };
              setState(new_state);
            }}
            className="border border-gray-300 h-11 pl-3"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 w-96">
          <label>yosh</label>
          <input
            value={state.age}
            onChange={(e) => {
              const new_state = {
                ...state,
                age: e.currentTarget.value,
              };
              setState(new_state);
            }}
            className="border border-gray-300 h-11 pl-3"
            type="number"
          />
        </div>
        <div className=" translate-x-32 flex gap-2">
          <button
            onClick={() => {
              selModal(false);
            }}
            className="w-32 h-11 text-white text-lg rounded-lg bg-red-500"
          >
            bekor qilish
          </button>
          <button
            onClick={() => {
              if (
                state.age === "" ||
                state.name === "" ||
                state.surName === ""
              ) {
                alert("iltimos bo'sh joylarni to'ldiring");
              } else {
                const new_arr = add.concat({ ...state, id: randomId() });
                setAdd(new_arr);
                setState({ name: "", surName: "", age: "" });
              }
            }}
            className="w-32 h-11 text-white text-lg rounded-lg bg-green-500"
          >
            +add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
