import './Chat.css';
import HeadBar from './HeadBar';
import Body from './Body';
import { useState } from 'react';

function Chat({ friend }) {

    return (
        <div className="chatbox border border-2">
            <div className="HeadBar">
                <HeadBar friend={friend} />
            </div>
            <div className="body"></div>
            <Body friend={friend} />
            <div className="toolBar"></div>
        </div>
    );
}

export default Chat;