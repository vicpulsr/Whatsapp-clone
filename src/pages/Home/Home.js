import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
import { RiEditBoxLine } from 'react-icons/ri';
import { IoIosCall, IoIosChatbubbles } from 'react-icons/io';
import { HiOutlineCamera } from 'react-icons/hi';
import { GrSettingsOption } from 'react-icons/gr';
import { SiCircle } from 'react-icons/si';
import { ImBin2 } from 'react-icons/im';

import Button from '../../components/Button/Button';
import CardChat from '../../components/CardChat/CardChat';

import './Home.css';

import { useConversations } from '../../config/ConversationsConfig';

function Home() {

    const { conversations, setConversations } = useConversations();

    const [sum, setSum] = useState(0);

    function sumNewMessage(conversations) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const values = conversations.map((conversation) => {
            return conversation.newMessage;
        })
        const sum = values.reduce(reducer);
        setSum(sum);
    }

    useEffect(() => {
        sumNewMessage(conversations);
    }, [])

    return (
        <div className="home">
            <div className="header">
                <div className="edit">
                    <Button text={"Editar"} />
                    <RiEditBoxLine size={20} />
                </div>
                <span className="page-title">Conversas</span>
                <div className="input">
                    <AiOutlineSearch size={20} />
                    <input type="text" placeholder={"Pesquisar"} />
                </div>
                <div className="conversation">
                    <div>
                        <ImBin2 size={30} />
                        <Button text={"Conversas Arquivadas"} />
                    </div>
                    <span>28</span>
                </div>
                <div className="btns">
                    <Button text={"Listas de transmissão"} />
                    <Button text={"Novo grupo"} />
                </div>
            </div>
            <div className="main">
                {
                    conversations.map((conversation, index) => {
                        let last = conversation.messages[conversation.messages.length - 1];
                        console.log(last.text);
                        return (
                            <Link to={`/conversation/${index}`}>
                                <CardChat name={conversation.name} text={last.text} type={last.type} avatar={conversation.avatar} time={conversation.time} pinned={conversation.pinned} newMessage={conversation.newMessage} sent={last.sent} />
                            </Link>
                        )
                    })
                }
            </div>
            <div className="footer">
                <div>
                    <SiCircle size={25} />
                    <span>Status</span>
                </div>
                <div>
                    <IoIosCall size={25} />
                    <span>Ligações</span>
                </div>
                <div>
                    <HiOutlineCamera size={25} />
                    <span>Câmera</span>
                </div>
                <div className={sum > 0 ? 'chat-focused' : ''} >
                    <IoIosChatbubbles size={25} />
                    <span>Conversas</span>
                    {
                        sum > 0 ? <span className="sum">{sum}</span> : ''
                    }
                </div>
                <div>
                    <GrSettingsOption size={25} />
                    <span>Ajustes</span>
                </div>
            </div>
        </div>
    );
}

export default Home;