import React from 'react';
import './App.css';
import Routes from './Routes';

import ConversationsConfig from '../src/config/ConversationsConfig';

function App() {

  return (
    <div className="App">
      <ConversationsConfig>
        <Routes />
      </ConversationsConfig>
    </div>
  );
}

export default App;
