import React, {useContext, useState} from 'react';
import {ThemeSelector} from '../App';

const Counter = ({ initialCount }) => {
    const [counter, setCounter] = useState(initialCount);
    const theme = useContext(ThemeSelector)
    
    const changeCounter = (number) => {
        setCounter(counter + number)
    }

    return (
        <div>
            <button style={theme} onClick={() => changeCounter(-1)}>-</button>
                <span>{counter}</span>
            <button style={theme} onClick={() => changeCounter(1)}>+</button>
        </div>
    )
}

export default Counter;
