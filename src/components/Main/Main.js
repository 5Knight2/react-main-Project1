import React,{useState} from "react";
import Form from "../Form/Form"
import ItemList from "../ItemList/ItemList"

const Main=(props)=>{
  
    const [editing,setEditing]=useState(false)
    const[editItem,setEditItem]=useState({})
    let j={};
    const addItem=(item)=>{
        props.addItem(item)
        setEditing(false);
    }

    const editClicked=(id)=>{
        setEditing(true);
        for(let i of props.items){
            if(i.id==id){setEditItem(i)
                
            j=i;
            setEditItem(j)
            console.log(editItem,j,i,"here")
            break;}
        }
        console.log(editItem,"MAin")
        if(editItem.id!=id)setEditItem({});
    }
    const deleteClicked=(id)=>{
        props.deleteItem(id)
    }

    return(
        <React.Fragment>
            <h2 align="center">Total Blogs={props.items.length}</h2>
        <Form editing={editing} add={addItem} item={j}></Form>
        <ItemList items={props.items} editClicked={editClicked} deleteClicked={deleteClicked} ></ItemList>
       
        </React.Fragment>
    )
}

export default Main;