import { useChatState } from '@store/index';
import React, {useCallback, useRef} from 'react';
import css from './ChatForm.module.scss';
import {useDispatch} from 'react-redux';
import {setMessage} from '@store/slices/chatSlice';

interface ChatFormProps {}

const defaultMessage = "질문할 내용을 입력해주세요.";

const useSubmit = (message : string) => {
    const dispatch = useDispatch();
    const textRef = useRef<HTMLInputElement>();
    const onSubmit = useCallback((evt) => {
        evt.preventDefault();
        const text = textRef.current.value.trim();
        textRef.current.value = "";
        if (text === message) {
            return;
        }
        dispatch(setMessage(text));
    }, [message]);
    return {
        textRef,
        onSubmit
    }
};

const ChatForm: React.FC<ChatFormProps> = () => {
    const {message} = useChatState();
    const {textRef, onSubmit} = useSubmit(message);
    console.log(message)
    return (
        <form className={css.ChatForm} onSubmit={onSubmit}>
            <input
                ref={textRef}
                className={css.textInput}
                placeholder={defaultMessage}
                type="text"
            />
            <div className={css.buttonWrap}>
                <button type="submit">
                    전송
                </button>
            </div>
        </form>
    )
};

export default ChatForm;