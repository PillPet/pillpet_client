import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Chat} from '@constants/types';

interface ChatState {
    chatLog: Chat[];
    message: string;
}

const initialState: ChatState = {
    chatLog: [],
    message: ""
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChatLog(state, action: PayloadAction<Chat>) {
            state.chatLog = [...state.chatLog, action.payload]
        },
        setMessage(state, action: PayloadAction<string>) {
            state.message = action.payload
        }
    }
});

export const {
    setChatLog,
    setMessage
} = chatSlice.actions;

export default chatSlice.reducer;