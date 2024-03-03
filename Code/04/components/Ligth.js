import { useState } from "react"

export default function Ligth() {
    const [ligth, setLigth] = useState('white')

    function Lamp() {
        const styles = {
            width: "100px",
            height: "100px",
        }
        styles.background = ligth
        return (
            <div style={styles}/>
        )
    }

    function handlerClick(e) {
        switch(e.target.id) {
            case "1": 
                setLigth('red')
                break
            case "2": 
                setLigth('yellow')
                break
            case "3": 
                setLigth('green')
                break
        }
    }

    return (
        <div>
            <button id="1" onClick={handlerClick}>Красный</button><br/>
            <button id="2" onClick={handlerClick}>Желтый</button><br/>
            <button id="3" onClick={handlerClick}>Зеленый</button><br/>
            <br/>
            <Lamp/>
        </div>
    )
}


