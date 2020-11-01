import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Info, InfoType} from '@constants/types';

interface InfoState {
    info: Info,
    active: boolean
}

const initialState: InfoState = {
    info: {
        title: "PillPet",
        content: {
            type: InfoType.TEXTWITHIMG,
            textWithImg: {
                imgUrl: "https://placehold.it/500",
                markdown : "## 필펫은 이런 서비스 입니다.\n어쩌구 저쩌구 필펫 소개글 어쩌구 저쩌구 필펫 소개글"
            }
        }
    },
    active: false
}

export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setInfo(state, action : PayloadAction<Info>) {
            state.info = action.payload
        },
        setActive(state, action: PayloadAction<boolean>) {
            state.active = action.payload
        }
    }
});

export const {
    setInfo,
    setActive
} = infoSlice.actions;

export default infoSlice.reducer;