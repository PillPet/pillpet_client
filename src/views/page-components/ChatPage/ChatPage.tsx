import React from "react";
import css from './ChatPage.module.scss';
import UserInfo from '@components/UserInfo/UserInfo';
import ChatBody from '@components/ChatBody/ChatBody'
import ChatForm from '@components/ChatForm/ChatForm'

interface ChatPageProps {}

const ChatPage : React.FC<ChatPageProps> = () => {
    return (
        <div className={css.ChatPage}>
            <UserInfo />
            <ChatBody />
            <ChatForm />   
        </div>
    );
};

export default ChatPage