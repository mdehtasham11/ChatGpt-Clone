import React from "react";
import { useSelector } from "react-redux";
import store from "../../assets/store/store"

function ChatOutput({ message }) {
  const inputMessage = useSelector((state) => state.message.inputMesaage);
  const response = useSelector((state) => state.message.response);
  console.log(message);
  return (
    <>
      <div className=" w-1/2 border  rounded-md bg-slate-400 flex justify-center mx-auto">
        {inputMessage}
      </div>
      <div className=" w-1/2 border h-2/3  rounded-md bg-slate-400 flex justify-center mx-auto">
        {response}
      </div>
    </>
  );
}

export default ChatOutput;
