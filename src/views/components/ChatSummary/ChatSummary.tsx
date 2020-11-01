import React from 'react';
import {BiChevronRight} from 'react-icons/bi';
import {useDispatch} from 'react-redux';
import css from './ChatSummary.module.scss';
import {useInfoState} from '@store/index';
import {setActive} from '@store/slices/infoSlice'
import classCat from 'classcat';
import Markdown from '@components/Markdown/Markdown'

interface ChatSummaryProps {}

const ChatSummary : React.FC<ChatSummaryProps> = () => {
    const dispatch = useDispatch();
    const {info, active} = useInfoState();

    return (
        <div className={classCat([active ? css.active : null, css.chatSummary])}>
            <div className={css.header}>
                <span className={css.keyword}>
                    # {info.title}
                </span>

                <button onClick={() => dispatch(setActive(!active))}>
                    <BiChevronRight />
                </button>
            </div>
            <div className={css.content}>
                <Markdown content={info.content.textWithImg?.markdown} />
            </div>
        </div>
    );
}

export default ChatSummary;