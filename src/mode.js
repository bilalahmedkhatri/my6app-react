import React, {useState} from 'react';
import './App.css';

function Mode () {
    let [isday, setDay] = useState(true);
    let [count, setCount] = useState(0);
    return (
        <div className={`${isday ? 'daymode' : 'nightmode'}`}>
            <br/>
            <span>
                <h2>INCREMENT "&" DECREMENT</h2>
                <p>This Number shows Increment and Decrement {count}</p>
                <button onClick={()=> setCount(++count)}>Increment</button>
                &nbsp;
                <button onClick={()=> setCount(--count)}>Decrement</button>
                <br/>
            </span>
            <br/>
            <span>
                This is <b>{isday ? 'DAY-MODE' : 'NIGHT-MODE'}</b>
                <br/>
                <br/>
                <button onClick={()=> setDay(!isday)}>Day/Night Mode</button>
                <br/>
                <br/>
            </span>
        </div>
    );
}

export default Mode;