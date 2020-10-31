import React from "react";
import css from './ChatPage.module.scss';
import ChatBody from '@components/ChatBody/ChatBody'
import ChatForm from '@components/ChatForm/ChatForm'

interface ChatPageProps {}

const ChatPage : React.FC<ChatPageProps> = () => {
    return (
        <div className={css.ChatPage}>
            <ChatBody />
            <ChatForm />   
        </div>
    );
};

export default ChatPage