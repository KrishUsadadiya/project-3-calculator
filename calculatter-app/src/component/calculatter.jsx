import React, { useState } from 'react';
import './Calculatter.css'
function Calculator() {
    const [equation, setEquation] = useState('');

    const handelKeypress = (key) => {
        setEquation(equation+key)
    }

    const calculate = () => {
        setEquation(eval(equation))
    }

    const handelclear = () => {
        setEquation(equation.substring(0,equation.length-1))
    }

    const handleclearall = () => {
        setEquation("")
    }
    return (
        <>
            <div className="calculatter">
                <input value={equation} onChange={(e)=>setEquation(e.target.value)} type="text" className='display'/>
                <div className="keypad">
                <div className="key clearbtn" onClick={handelclear}>C</div>
                <div className="key clearbtn" onClick={handleclearall}>CE</div>
                <div className="key oprbtn" onClick={()=>handelKeypress("%")}>%</div>
                <div className="key oprbtn" onClick={()=>handelKeypress("/")}>/</div>

                <div className="key numbtn" onClick={()=>handelKeypress("7")}>7</div>
                <div className="key numbtn" onClick={()=>handelKeypress("8")}>8</div>
                <div className="key numbtn" onClick={()=>handelKeypress("9")}>9</div>
                <div className="key oprbtn" onClick={()=>handelKeypress("*")}>x</div>

                <div className="key numbtn" onClick={()=>handelKeypress("4")}>4</div>
                <div className="key numbtn" onClick={()=>handelKeypress("5")}>5</div>
                <div className="key numbtn" onClick={()=>handelKeypress("6")}>6</div>
                <div className="key oprbtn" onClick={()=>handelKeypress("-")}>-</div>

                <div className="key numbtn" onClick={()=>handelKeypress("1")}>1</div>
                <div className="key numbtn" onClick={()=>handelKeypress("2")}>2</div>
                <div className="key numbtn" onClick={()=>handelKeypress("3")}>3</div>
                <div className="key oprbtn" onClick={()=>handelKeypress("+")}>+</div>

                <div className="key numbtn" onClick={()=>handelKeypress("00")}>00</div>
                <div className="key numbtn" onClick={()=>handelKeypress("0")}>0</div>
                <div className="key numbtn" onClick={()=>handelKeypress(".")}>.</div>
                <div className="key eqlbtn" onClick={calculate}>=</div>
                </div>
            </div>
        </>
    );
}

export default Calculator;