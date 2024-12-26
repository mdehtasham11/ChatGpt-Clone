// import { createSlice } from "@reduxjs/toolkit";

// const data = JSON.parse(localStorage.getItem("chat_History") || "[]");

// const messageSlice = createSlice({
//   name: "message",
//   initialState: {
//     storedMessage: data || [],
//     inputMessage: "",
//     response: "",
//   },
//   reducers: {
//     setInputMessage: (state, action) => {
//       state.inputMessage = action.payload;
//     },
//     setResponse: (state, action) => {
//       state.response = action.payload;

//       const newEntry = {
//         message: state.inputMessage,
//         response: state.response,
//       };

//       state.storedMessage.push(newEntry);
//       localStorage.setItem("chat_History", JSON.stringify(state.storedMessage));
//       // alert(state.storedMessage);
//     },
//   },
// });

// export const { setInputMessage, setResponse } = messageSlice.actions;
// export default messageSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// Load chat history from localStorage, with a fallback to an empty array.
const loadChatHistory = () => {
  try {
    const data = localStorage.getItem("chat_History");
    return JSON.parse(data) || [];
  } catch (error) {
    console.error("Error loading chat history:", error);
    return [];
  }
};

// Save chat history to localStorage.
const saveChatHistory = (history) => {
  try {
    localStorage.setItem("chat_History", JSON.stringify(history));
  } catch (error) {
    console.error("Error saving chat history:", error);
  }
};

// Initial state
const initialState = {
  storedMessage: loadChatHistory(),
  inputMessage: "",
  response: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setInputMessage: (state, action) => {
      state.inputMessage = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;

      const newEntry = {
        message: state.inputMessage,
        response: action.payload,
      };

      state.storedMessage.push(newEntry);
      saveChatHistory(state.storedMessage); // Save updated history to localStorage

      // Clear input after submission
      state.inputMessage = "";
    },
  },
});

export const { setInputMessage, setResponse } = messageSlice.actions;
export default messageSlice.reducer;
