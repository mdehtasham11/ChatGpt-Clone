import { createSlice } from "@reduxjs/toolkit";

const data = JSON.parse(localStorage.getItem("chat_History") || "[]");

const messageSlice = createSlice({
  name: "message",
  initialState: {
    storedMessage: data || [],
    inputMessage: "",
    response: "",
  },
  reducers: {
    setInputMessage: (state, action) => {
      state.inputMessage = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;

      const newEntry = {
        message: state.inputMessage,
        response: state.response,
      };

      state.storedMessage.push(newEntry);
      localStorage.setItem("chat_History", JSON.stringify(state.storedMessage));
      // alert(state.storedMessage);
    },
  },
});

export const { setInputMessage, setResponse } = messageSlice.actions;
export default messageSlice.reducer;
