import React from "react";
import Item from "../Item/Item";

const ItemList=(props)=>{
const editClicked=(id)=>{
    props.editClicked(id)
}
const deleteClicked=(id)=>{
    props.deleteClicked(id)
}
    return(<React.Fragment>
        <ul>
            {
                props.items.map((item)=>{
                    return ( <Item key={item.id} item={item} editClicked={editClicked} deleteClicked={deleteClicked}></Item>)
                })
           
}
        </ul>
    </React.Fragment>)
}

export default ItemList;