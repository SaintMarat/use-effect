import React, { useState } from "react";

const ChangeInputValue = () => {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const inputChange1 = (e) => {
        setInputValue1(e.target.value);
    };
    const inputChange2 = (e) => {
        setInputValue2(e.target.value);
    };
    const buttonClick = () => {
        console.log("InputValue1:", inputValue2);
        console.log("InputValue2:", inputValue1);
    };
    return (
        <div>
            <input
                type="text"
                value={inputValue1}
                onChange={inputChange1}
            />
            <input
                type="text"
                value={inputValue2}
                onChange={inputChange2}
            />
            <button onClick={buttonClick}>clikme</button>
           
        </div>
    );
};
export default ChangeInputValue;