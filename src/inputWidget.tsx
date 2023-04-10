import React from "react";

export interface input {
    w1: number;
    w2: number;
    w3: number;
}

function InputWidget({setState}: {setState: ((value: (((prevState: input) => input) | input)) => void)}) {
    let wave1clear = 0;
    let wave2clear = 0;
    let wave3clear = 0;

    function onClick() {
        setState({
            w1: parseFloat((document.getElementById("wave1clear") as HTMLInputElement).value),
            w2: parseFloat((document.getElementById("wave2clear") as HTMLInputElement).value),
            w3: parseFloat((document.getElementById("wave3clear") as HTMLInputElement).value)
        })
    }
    return (
        <div>
            <label htmlFor={"wave1clear"}>Wave 1 Clear Percentage</label>
            <input type={"number"} max={100} min={0} id={"wave1clear"} name={"wave1clear"}/>
            <br/>
            <label htmlFor={"wave2clear"}>Wave 2 Clear Percentage</label>
            <input type={"number"} max={100} min={0} id={"wave2clear"} name={"wave2clear"}/>
            <br/>
            <label htmlFor={"wave3clear"}>Wave 3 Clear Percentage</label>
            <input type={"number"} max={100} min={0} id={"wave3clear"} name={"wave3clear"}/>
            <br/>
            <input type={"submit"} onClick={onClick} value={"Calculate"}/>
        </div>
    )
}

export default InputWidget;