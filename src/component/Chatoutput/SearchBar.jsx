import React from "react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { getChat } from "../../assets/OpenApi/index2";
import {useSelector, useDispatch} from 'react-redux';
import { setInputMesaage, setResponse } from "../../assets/store/store";

function SearchBar() {


  // const [massage, setMassage] = useState("");
  // const [response, setResponse] = useState("");

  const dispatch = useDispatch();
  const message = useSelector((state)=> state.message.inputMesaage)
  
  const handleInputMassage = async () => {
    const result = await getChat(message);
    dispatch(setResponse(result))
  };

 
  return (
    <>
    
      <div className="flex mt-0">
        <div className="w-[80rem] flex justify-center items-center">
          <div className=" w-1/2 rounded-lg border-2 flex justify-center items-center px-2">
            <input
              className=" w-full border-none focus:outline-none p-2 "
              type="text"
              value={message}
              onChange={(e) => dispatch(setInputMesaage(e.target.value))}
              placeholder="Search"
            />
            <div>
              <button
                className="bg-slate-300 border rounded-full p-2 m-1"
                onClick={handleInputMassage}
              >
                <ArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;

// create a text area for the user to input their message
//create a button for the user to submit their message
