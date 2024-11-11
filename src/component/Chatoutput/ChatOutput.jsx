import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.css"; 
function ChatOutput() {
  const data = useSelector((state) => state.message.storedMessage);

  return (
    <div className="w-2/3 mx-auto overflow-y-auto no-scrollbar h-3/4">
      {data.map((entry, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-end mb-2">
            <div className="bg-gray-200 p-3 rounded-md text-right max-w-xs">
              <span>{entry.message}</span>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-blue-200 p-3 rounded-md ">
              <span>{entry.response}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatOutput;
