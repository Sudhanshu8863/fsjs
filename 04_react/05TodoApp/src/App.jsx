import { useState } from "react";

export default function Todo() {
  const [inputText, setInputText] = useState("");
  const [listData, setListData] = useState([]);

  const checkEmptyText = (text) => {
    if (text != "") {
      return true;
    }
  };

  const addToList = () => {
    const text = inputText.trim();
    if (checkEmptyText(text)) {
      setListData([text, ...listData]);
      setInputText("");
    }
  };

  const deleteFromList = (index) => {
    listData.splice(index, 1);
    setListData([...listData]);
  };

  const editTodo = (index, value) => {
    if (checkEmptyText(value)) {
      listData.splice(listData[index], 1);
      listData[index] = value;
      setListData([...listData]);
    }
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-full overflow-auto pb-16">
      <div className="flex justify-center sticky mt-3 py-10 top-0 mx-[1%] rounded-md space-x-1 bg-gray-900 shadow-2xl">
        <input
          className="text-white bg-transparent border-x-2 px-3 py-1 outline-none text-center lg:w-[60%]"
          type="text"
          placeholder="Enter Task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="bg-sky-500 px-5 font-semibold" onClick={addToList}>
          Add to List
        </button>
      </div>

      {listData.map((item, index) => {
        return (
          <div
            className="bg-gray-900 mx-[5%] my-3 space-x-5 py-3 px-4 rounded-sm lg:flex"
            key={index}
          >
            <input
              className="bg-transparent outline-none text-justify leading-6 w-full text-lg my-3 lg:my-0"
              type="text"
              value={item}
              onChange={(e) => editTodo(index, e.target.value)}
            />
            <div className="lg:self-end">
              <button
                className="bg-gray-800 px-5 py-2 rounded text-red-500 hover:text-red-600 text-sm relative left-[70%] lg:left-0"
                onClick={() => deleteFromList(index)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}

      {listData.length >= 1 && (
        <button
          className="bg-sky-500 px-5 font-semibold fixed w-full bottom-0 py-3 text-lg"
          onClick={() => setListData([])}
        >
          Remove all
        </button>
      )}
    </div>
  );
}
