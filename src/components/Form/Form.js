import React,{useRef} from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const Form=(props)=>{
 
    const titleRef=useRef()
    const descriptionRef=useRef()
    const urlRef=useRef()
    const idRef=useRef()
    let button='Post';

    if(props.editing===true){button="Edit"
  idRef.current.value=props.item.id;
titleRef.current.value=props.item.title;
urlRef.current.value=props.item.url;
descriptionRef.current.value=props.item.description;
}
    else {button="Post";
    console.log("post")
    //idRef.current.value=-1;
}

    const buttonAction=()=>{
       
        
            
            console.log("buttonAction")
            let item={
                id:idRef.current.value,
                title:titleRef.current.value,
            description:descriptionRef.current.value,
        url:urlRef.current.value}
props.add(item)
idRef.current.value=-1;
titleRef.current.value="";
urlRef.current.value="";
descriptionRef.current.value="";
        
    }

    return(
    <React.Fragment>
        
        <input id="id" type="number" hidden={true} ref={idRef}></input>
        <label htmlFor='title'>Title:</label>
        <input id="title" type="text" width={50} ref={titleRef}></input>
        <br></br>
        <br></br>
        <label htmlFor='description'>Description:</label>
        <input id="description" type="text" width={50} ref={descriptionRef}></input>
        <br></br> 
        <br></br>
        <label htmlFor='url'>URL:</label>
        <input id="url" type="url" width={50} ref={urlRef}></input>
        <br></br>
        <br></br>
        <Button id="submit" onClick={buttonAction} >{button}</Button>
    </React.Fragment>)
}

export default Form;