export default function Lister(props) {
    
    function Print(props) {
        const style = {}
        if (!props.even) {
            style.background = "LightGreen"
        }
        return (
            <div style={style}>
                {props.item}
            </div>
        )
    }

    let cursitem = props.curs.map((curs, index) => {
        let even = index % 2 === 0
        return (<Print key={curs.id} item={curs.name} even={even} />)
    })

    return (
        <div>
            {cursitem}
        </div>
    )
}

