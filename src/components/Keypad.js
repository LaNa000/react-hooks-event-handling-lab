// Code Keypad Component Here
import React from 'react'

export default function Keypad() {
    function handlingKeypad(){
        console.log('Entering password...');
    }
    return (
        <div>
            <input type="password" onChange={handlingKeypad}/>
        </div>
    )
}
