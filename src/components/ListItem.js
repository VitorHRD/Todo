import React from "react"
import Card from './card';



function DoneImg(props) {
    if (props.done) {
        return (<img alt="done" width="32px" src="./assets/check.png"></img>)
    }
    else {
        return (<img alt="undone" width="32px" src="./assets/uncheck.png"></img>)
    }
}
function ListItem(props) {

    return (

        <li key={props.item.id} id={props.item.id}>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button className="btn" onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done}></DoneImg></button>
                    <button className="btn" onClick={() => { props.onItemDeleted(props.item) }} ><img alt="delete" src="./assets/lixo.png" width="32px"></img></button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem