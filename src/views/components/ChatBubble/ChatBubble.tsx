import React from 'react';
import css from './ChatBubble.module.scss';
import classCat from 'classcat';
import moment from 'moment';
import {Chat, author} from '@constants/types'
import {contentType} from '@constants/types';

interface ChatBubbleProps {
    chat: Chat
}

const ChatBubble : React.FC<ChatBubbleProps> = ({ chat }) => {
    const userChat = chat.author === author.USER;

    return (
        <div className={css.chat}>
            <div className={css.times}>
                {moment(chat.timestamp).format('dddd ・ HH:MM A')}
            </div>
            
            <div className={classCat([css.bubble, userChat ? css.user : css.bot])}>
                <div className={css.content}>
                    <div className={css.name}>
                        Pet Pill
                    </div>

                    <p>
                        {chat.text}
                    </p>

                    <ul className={classCat([css.options, css[contentType[chat.contentType]]])}>
                        {chat.checkbox.map((item) => item.displayText ? (
                            <li key={item.actionText}>
                                {/* TODO : action Text response function */}
                                <button onClick={() => console.log(item.actionText)}>
                                    {item.displayText}
                                </button>
                            </li>
                        ): null)}
                    </ul>
                </div>

                <span className={css.timestamp}>
                    {moment(chat.timestamp).format('HH:MM')}
                </span>
            </div>

            <div className={css.cardContainer}>
                <ul className={css.cardList}>
                    {chat.cards.map((item) => item.name ? 
                        <li>
                            <div className={css.card}>
                                {item.label ? <span className={css.label}>{item.label}</span> : null}
                                <h2 className={css.title}>{item.name}</h2>
                                <h3 className={css.location}>{item.location}</h3>
                                <h6 className={css.price}>
                                    <span>{item.topic}</span> 예상 총 비용
                                </h6>
                                <button onClick={() => console.log('111')}>
                                    {item.price.toLocaleString()} 원
                                </button>
                            </div>
                        </li> : null
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ChatBubble