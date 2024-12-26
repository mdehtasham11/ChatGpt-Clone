import React, { useEffect } from "react";
import { formatContent } from "../../assets/OpenApi/index";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import axios from "axios";

function ChatOutput() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.message.storedMessage);

  const savedchat = async (message, response) => {
    try {
      await axios.post("http://localhost:3000/api/chat", { message, response });
    } catch (error) {
      console.log("Error saving chat", error);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      const lastEntry = data[data.length - 1];
      savedchat(lastEntry.message, lastEntry.response);
    }
  }, [data]);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/chat");
        // Assuming you have an action to set initial chat data
        dispatch({ type: "SET_STORED_MESSAGES", payload: response.data });
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    fetchChatData();
  }, [dispatch]);

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
            <div className="bg-blue-200 p-3 rounded-md line-restricted ">
              <div
                dangerouslySetInnerHTML={{
                  __html: formatContent(entry.response),
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatOutput;
