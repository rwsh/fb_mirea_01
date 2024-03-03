import { useState } from "react"

export default function Repeater() {
    const [text, setText] = useState("Для повтора")

    function handlerChange (e) {
        console.log(e.target.value)
        setText(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handlerChange}/>
            <br/>
            <input type="text" readOnly value={text}/>
        </div>
    )
}

