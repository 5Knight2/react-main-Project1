import React from "react";
import Button from "../UI/Button"

const Item=(props)=>{
let item=props.item
const editClicked=()=>{
   
    props.editClicked(item.id)
}
const deleteClicked=()=>{
    
    props.deleteClicked(item.id)
}

    return(<React.Fragment>
        <h2> title={props.item.title}</h2>
        <img src={props.item.url} alt="img" width="200" height="200"></img>
        <p>{props.item.description}</p>
        <Button onClick={editClicked}>Edit</Button >
        <Button onClick={deleteClicked}>Delete</Button >
    </React.Fragment>)
}

export default Item;