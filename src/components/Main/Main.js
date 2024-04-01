import React,{useState} from "react";
import Form from "../Form/Form"
import ItemList from "../ItemList/ItemList"

const Main=(props)=>{
  
    const [editing,setEditing]=useState(false)
    const[editItem,setEditItem]=useState({})
  
    const addItem=(item)=>{
        props.addItem(item)
        setEditing(false);
        setEditItem({})
    }

    const editClicked=(id)=>{
        setEditing(true);
        const itemToEdit = props.items.find(item => item.id === id);
        if (itemToEdit) {
            setEditItem(itemToEdit);
        }
        console.log(editItem,"MAin") 
    }
    const deleteClicked=(id)=>{
        props.deleteItem(id)
    }

    return(
        <React.Fragment>
            <h2 align="center">Total Blogs={props.items.length}</h2>
        <Form editing={editing} add={addItem} item={editItem}></Form>
        <ItemList items={props.items} editClicked={editClicked} deleteClicked={deleteClicked} ></ItemList>
       
        </React.Fragment>
    )
}

export default Main;