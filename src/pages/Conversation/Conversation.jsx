import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';
import { VscDeviceCameraVideo } from 'react-icons/vsc';
import { BiPhone, BiMicrophone } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaRegStickyNote } from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';

import './Conversation.css';

import BallonChat from '../../components/BallonChat/BallonChat';

import { useConversations } from '../../config/ConversationsConfig';

function Conversation({ match }) {

    let index = parseInt(match.params.index);
    const [showNumber, setShowNumber] = useState('');

    const { conversations, setConversations } = useConversations();
    const [ inputMessage, setInputMessage ] = useState({
        text: '',
        time: '',
        seen: false,
        sent: true,
    });

    function handleChangeInput(event) {
        const inputMessageText = event.target.value;
        const inputMessageAux = { text: inputMessageText, time: '18:50', seen: false , sent: true }
        setInputMessage(inputMessageAux);
    }

    // function convertTime() {
    //     var date = new Date();
    //     var hour = date.getHours();
    //     var min = date.getMinutes();
    //     var time = `${hour}:${min}`;
    //     return time;
    // }
    
    function sendMessage(inputMessage, time) {
        let conversationsAux = [...conversations];
        if(!conversationsAux[index].messages) {
            conversationsAux[index].messages = [];
        }
        let inputMessageAux = {...inputMessage};
        inputMessageAux.time = time;
        conversationsAux[index].messages.push(inputMessageAux)
        setConversations(conversationsAux);
        setInputMessage({ text: '', time: '', seen: false, sent: true });
    }

    function showNotificationNumber(conversations) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const values = conversations.map((conversation) => {
            if (conversation.newMessage > 0) {
                return 1;
            } else {
                return 0;
            }
        });
        const notificationNumber = values.reduce(reducer);
        setShowNumber(notificationNumber);
    }

    useEffect(() => {
        showNotificationNumber(conversations);
    }, [])

    return (
        <div className="conversation-page">
            <div className="conversation-header">
                <div className="conversation-btn-left">
                    <div>
                        <Link to="/">
                            <IoIosArrowBack size={25} />
                        </Link>
                        <span className="number-notification">
                            {
                                showNumber > 0 ? showNumber : ''
                            }
                        </span>
                    </div>
                    <div>
                        <img src={conversations[index].avatar} />
                        <span className="name">{conversations[index].name}</span>
                    </div>
                </div>
                <div>
                    <VscDeviceCameraVideo size={25} />
                    <BiPhone size={25} />
                </div>
            </div>
            <div className="conversation-main">
                {
                    conversations[index].messages &&
                    conversations[index].messages.map( message => {
                        return(
                            <BallonChat text={message.text} time={message.time} seen={message.seen} sent={message.sent} />
                        )
                    })
                }
            </div>
            <div className="conversation-footer">
                <AiOutlinePlus size={25} />
                <div className="input">
                    <input onKeyPress={(event) => {
                        if(event.key == 'Enter') {
                            var date = new Date();
                            var hour = date.getHours();
                            var min = date.getMinutes();
                            var mins = min < 10 ?  `0${min}` :  min
                            var time = `${hour}:${mins}`;
                            sendMessage(inputMessage, time);
                        }
                    }} type="text" value={inputMessage.text} onChange={handleChangeInput} />
                    <FaRegStickyNote size={25} />
                </div>
                <FiCamera size={25} />
                <BiMicrophone size={25} />
            </div>
        </div>
    );
}

export default Conversation;