import React from "react";
import { useState } from "react";
import Modal from "./components/modal";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  const [state, setState] = useState({ name: "", surName: "", age: null });
  const [modal, setModal] = useState(false);
  const [add, setAdd] = useState([]);

  function randomId() {
    return Math.random().toString(16).substr(2, 5);
  }

  function deletes(id) {
    const ochirish = add.filter((item) => item.id !== id);
    setAdd(ochirish);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <Button setModal={setModal}>Qo'shish</Button>
      <div className="mt-10 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        {add.map((item) => {
          return (
            <div key={item.id} className="border-b border-gray-300 py-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-gray-700">
                  ID: {item.id}
                </h2>
                <button
                  onClick={() => deletes(item.id)}
                  className="w-10 h-10 bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-full text-white flex items-center justify-center shadow-md"
                >
                  X
                </button>
              </div>
              <h2 className="text-lg text-gray-700">
                Ism:
                <span className="font-medium text-gray-800">{item.name}</span>
              </h2>
              <h2 className="text-lg text-gray-700">
                Familya:
                <span className="font-medium text-gray-800">
                  {item.surName}
                </span>
              </h2>
              <h2 className="text-lg text-gray-700">
                Yosh:
                <span className="font-medium text-gray-800">{item.age}</span>
              </h2>
            </div>
          );
        })}
      </div>

      {modal && (
        <Modal selModal={setModal}>
          <Input
            setAdd={setAdd}
            add={add}
            setState={setState}
            state={state}
            randomId={randomId}
            selModal={setModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
