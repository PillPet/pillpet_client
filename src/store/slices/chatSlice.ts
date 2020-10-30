import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Chat} from '@constants/types';

interface ChatState {
    chat: Chat[];
    message: string;
}

const initialState: ChatState = {
    chat: [],
    message: ""
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChatLog(state, action: PayloadAction<Chat[]>) {
            state.chat = action.payload
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