import { useState } from "react"

export default function Lister(props) {
    const [checked, setChecked] = useState(0)

    function handlerClick(e) {
        setChecked(e.target.id)
    }

    function Print(props) {
        const style = {}
        if (checked == props.id) {
            style.background = "Red"
        } else if (!props.even) {
            style.background = "LightGreen"
        }
        return (<div id={props.id} style={style} onClick={handlerClick}>{props.item}</div>)
    }

    let cursitem = props.curs.map((curs, index) => {
        let even = index % 2 === 0
        return (<Print key={curs.id} id={curs.id} item={curs.name} even={even} />)
    })

    return (<div>{cursitem}</div>)
}

