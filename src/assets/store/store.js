import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState:{
        inputMesaage: "",
        response: "",
    },
    reducers:{
        setInputMesaage:(state,action) =>{
            state.inputMesaage = action.payload
        },
        setResponse: (state,action) =>{
            state.response = action.payload
        }
    }
})

export const { setInputMesaage, setResponse} = messageSlice.actions;
export default messageSlice.reducer;