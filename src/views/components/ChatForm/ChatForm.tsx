import { useChatState } from '@store/index';
import React, {useCallback, useRef} from 'react';
import css from './ChatForm.module.scss';
import {useDispatch} from 'react-redux';
import {setMessage, setChatLog} from '@store/slices/chatSlice';
import classcat from 'classcat';
import {author, contentType} from '@constants/types'

interface ChatFormProps {}

const defaultMessage = "질문할 내용을 입력해주세요.";

const useSubmit = (message : string) => {
    const dispatch = useDispatch();
    const textRef = useRef<HTMLInputElement>();

    const userRef = useRef<HTMLSelectElement | author>();
    const typeRef = useRef<HTMLSelectElement | contentType>();
    const checkBoxRef = useRef<HTMLTextAreaElement | string>();

    const onSubmit = useCallback((evt) => {
        evt.preventDefault();
        const text = textRef.current?.value.trim();
        textRef.current.value = "";
        console.log(text,
                    author[userRef.current?.value],
                    contentType[typeRef.current?.value],
                    JSON.parse(checkBoxRef.current?.value));
        if (!text) {
            return;
        }
        if (text === message) {
            return;
        }
        dispatch(setMessage(text));
        if (process.env.NODE_ENV === 'development') {
            dispatch(setChatLog({
                author: Number.parseInt(userRef.current?.value),
                contentType: Number.parseInt(typeRef.current?.value),
                text,
                timestamp: +new Date(),
                checkbox: JSON.parse(checkBoxRef.current?.value)
            }))
        } else {
            dispatch(setChatLog({
                author: author.USER,
                contentType: contentType.TEXT,
                text,
                timestamp: +new Date(),
                checkbox: []
            }));
        }
    }, [message]);
    return {
        textRef,
        userRef,
        typeRef,
        checkBoxRef,
        onSubmit
    }
};

const ChatForm: React.FC<ChatFormProps> = () => {
    const {message} = useChatState();
    const {textRef, userRef, typeRef, checkBoxRef, onSubmit} = useSubmit(message);
    const isDev = process.env.NODE_ENV === "development";
    return (
        <div className={css.form}>
            <div className={classcat([isDev ? css.debug : css.none])}>
                <div>
                    <select ref={userRef}>
                        <option value={author.USER}>USER</option>
                        <option value={author.BOT}>BOT</option>
                    </select>
                </div>
                <div>
                    <select ref={typeRef}>
                        <option value={contentType.TEXT}>TEXT</option>
                        <option value={contentType.MIXIN}>MIXIN</option>
                        <option value={contentType.LIST}>LIST</option>
                    </select>
                </div>
                <div>
                <textarea ref={checkBoxRef} defaultValue="[]"></textarea>
                </div>
            </div>
            <form className={css.ChatForm} onSubmit={onSubmit}>
                <input
                    ref={textRef}
                    className={css.textInput}
                    placeholder={defaultMessage}
                    type="text"
                />
            </form>
        </div>
    )
};

export default ChatForm;