import React from 'react';
import {css} from 'emotion';


const Button = () => {
    return (
        <button className={css({
            backgroundColor: 'blue',
            borderRadius: '60px',
            width: '110px',
            height: '48px',
            float: 'right',
            margin: '20px 20px',
            color:'white',
            fontSize: '20px',
        })}>Leisure</button>
    ) 
}

export default Button;  