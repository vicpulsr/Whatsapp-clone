import React from 'react';

import { BsCheckAll } from 'react-icons/bs'

import './BallonChat.css';

function BallonChat({ text, time, sent, seen }) {
    return (
        <div className={ sent ? "ballon-chat sent" : "ballon-chat received"}>
            <span>{text}</span>
            <div>
                <span className="time">{time}</span>
                {
                    !sent ? '' : <BsCheckAll color={seen ? '#30a2fd' : ''} size={20} /> 
                }
            </div>
        </div>
    );
}

export default BallonChat;