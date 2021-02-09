import React, { createContext, useContext, useState } from 'react';

import avatarPaola from '../assets/images/paola.jpg';
import avatarThomas from '../assets/images/thomas.jpg';
import avatarNubia from '../assets/images/nubia.jpg';
import avatarParceiras from '../assets/images/parceiras.jpg';

const ConversationsConfig = createContext();

export default function ConversationsContext({ children }) {
    const [conversations, setConversations] = useState([
        { name: 'Pah', avatar: avatarPaola, pinned: true, time: '18:47', newMessage: 0, messages: [
          { text: 'nao vi tua ligação', time:'18:48', seen: true, sent: true },
          { text: 'eu tava dormindo e agora to estudando aqui', time:'18:48', seen: true, sent: true },
          { text: 'posso te ligar mais tarde?', time:'18:48', seen: true, sent: true },
          { text: 'Sim sim', time:'18:48', seen: false, sent: false },
          { text: 'ta bom bjuss <3', time:'18:48', seen: false, sent: true },
          { text: 'tadinha', time:'18:48', seen: false, sent: true },
        ] },
        { name: 'Amor', avatar: avatarThomas, pinned: true, time: 'Ontem', newMessage: 0, messages: [
            { text: 'nao vi tua ligação', time:'18:48', seen: true, sent: true },
            { text: 'eu tava dormindo e agora to estudando aqui', time:'18:48', seen: true, sent: true },
            { text: 'posso te ligar mais tarde?', time:'18:48', seen: true, sent: true },
            { text: 'Sim sim', time:'18:48', seen: false, sent: false },
            { text: 'valeu', time:'18:48', seen: false, sent: false, type: 'foto' },
          ] },
        { name: 'Núbia', avatar: avatarNubia, pinned: true, time: '17:08', newMessage: 1,messages: [
            { text: 'nao vi tua ligação', time:'18:48', seen: true, sent: true },
            { text: 'eu tava dormindo e agora to estudando aqui', time:'18:48', seen: true, sent: true },
            { text: 'posso te ligar mais tarde?', time:'18:48', seen: true, sent: true },
            { text: 'Sim sim', time:'18:48', seen: false, sent: false },
            { text: 'https://vm.tiktok.com/ZSpm4RRY/', time:'18:48', seen: false, sent: false },
          ] },
        { name: 'Parceiras', avatar: avatarParceiras, pinned: false, time: '17:26', newMessage: 8, messages: [
            { text: 'nao vi tua ligação', time:'18:48', seen: true, sent: true },
            { text: 'eu tava dormindo e agora to estudando aqui', time:'18:48', seen: true, sent: true },
            { text: 'posso te ligar mais tarde?', time:'18:48', seen: true, sent: true },
            { text: 'Sim sim', time:'18:48', seen: false, sent: false },
            { text: 'Fabi: simmmm', time:'18:48', seen: false, sent: false },
          ] },
    ]);

    return (
        <ConversationsConfig.Provider value={{ conversations, setConversations }} >
            {children}
        </ConversationsConfig.Provider>
    )
}

export function useConversations() {
    const context = useContext(ConversationsConfig);
    const { conversations, setConversations } = context;
    return { conversations, setConversations };
}