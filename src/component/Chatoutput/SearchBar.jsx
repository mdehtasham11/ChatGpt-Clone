import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { getChat } from "../../assets/OpenApi/index";
import { useDispatch } from "react-redux";
import { setInputMessage, setResponse } from "../../assets/store/store";

function SearchBar() {
  const dispatch = useDispatch();
  // const message = useSelector((state) => state.message.inputMessage);
  // const response = useSelector((state) => state.message.response);

  const [inputData, setInputData] = useState("");

  const handleInputMessage = async (e) => {
    e.preventDefault();
    dispatch(setInputMessage(inputData));
    const result = await getChat(inputData);
    console.log(result);
    dispatch(setResponse(result));
  };
  
  return (
    <div className="flex mt-0">
      <div className="w-[80rem] flex justify-center items-center">
        <div className="w-1/2 bg-slate-600 rounded-lg border-none flex justify-center items-center px-2">
          <form className="flex w-full" onSubmit={handleInputMessage}>
            <input
              className="flex-grow bg-slate-600 border-none focus:outline-none p-2"
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder="Search"
            />
            <div>
              <button
                className="bg-slate-300 border rounded-full p-2 m-1"
                type="submit"
              >
                <ArrowUp />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
