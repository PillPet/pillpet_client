import React from 'react';
import css from './ChatBody.module.scss';
import {useChatState} from '@store/index';
import ChatBubble from '@components/ChatBubble/ChatBubble'

interface ChatBodyProps {}

const ChatBody : React.FC<ChatBodyProps> = () => {
    const {chatLog} = useChatState();

    return (
        <div className={css.chatLog}>
            {chatLog.map((chat) => <ChatBubble chat={chat} key={chat.timestamp} />)}
        </div>
    );
};

export default ChatBody;