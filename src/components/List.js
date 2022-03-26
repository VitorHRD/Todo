import React from "react"

import ListItem from "./ListItem";

function List(props) {

    return (
        <ul>
            {props.items.map(item =><ListItem item = {item} onDone={props.onDone} onItemDeleted = {props.onItemDeleted}></ListItem>)}
        </ul>)
}
export default List