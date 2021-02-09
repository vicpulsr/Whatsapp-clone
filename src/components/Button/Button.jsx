import React from 'react';

import './Button.css';

function Button( { text }) {
    return(
        <button className="btn-default">{text}</button>
    );
}

export default Button;