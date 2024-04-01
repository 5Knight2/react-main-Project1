import React,{useRef} from "react";

const Form=(props)=>{
 
    const titleRef=useRef()
    const descriptionRef=useRef()
    const urlRef=useRef()
    const idRef=useRef()
    let button='Post';

    if(props.editing===true){button="Edit"
    console.log(props.item)
//   idRef.current.value=props.editItem.id;
// titleRef.current.value=props.editItem.title;
// urlRef.current.value=props.editItem.url;
// descriptionRef.current.value=props.editItem.description;
}
    else {button="Post";
}

    const buttonAction=()=>{
       
        if(button==="Post"){
            
            console.log("buttonAction")
            let item={
                id:idRef.current.value,
                title:titleRef.current.value,
            description:descriptionRef.current.value,
        url:urlRef.current.value}
props.add(item)
        }
        else{}
    }

    return(
    <React.Fragment>
        
        <input id="id" type="number" hidden={true} ref={idRef}></input>
        <label for='title'>Title:</label>
        <input id="title" type="text" width={50} ref={titleRef}></input>
        <br></br>
        <label for='description'>Description:</label>
        <input id="description" type="text" width={50} ref={descriptionRef}></input>
        <br></br>
        <label for='url'>URL:</label>
        <input id="url" type="url" width={50} ref={urlRef}></input>
        <br></br>
        <input id="button" type="button" width={50} value={button} onClick={buttonAction}></input>
    </React.Fragment>)
}

export default Form;