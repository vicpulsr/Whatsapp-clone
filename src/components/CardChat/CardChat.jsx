import React from 'react';

import { BsCheckAll } from 'react-icons/bs';
import { AiFillPushpin, AiFillCamera } from 'react-icons/ai';

import './CardChat.css';

function CardChat({ avatar, name, text, time, newMessage, pinned, sent, type }) {
    return (
        <div className="card-chat">
            <img src={avatar} />
            <div className="card-content">
                <div>
                    <span className="name">{name}</span>
                    <span className={ newMessage ? 'time-focused' : ''}>{time}</span>
                </div>
                <div>
                    <div>
                        {
                            sent && <BsCheckAll size={25}/>
                        }
                        <span className="text"> { type === 'foto' ? <> <AiFillCamera /> Foto </> : text }</span>
                    </div>
                    { pinned ? <AiFillPushpin  size={25} /> : '' }
                    { newMessage ? <span className="new-message">{newMessage}</span> : ''}
                </div>
            </div>
        </div>
    );
}

export default CardChat;