import React from 'react'
import './actions.css';
import {useState} from 'react';
function Actions({lister , setListN}) {
    const [Input , setInput] = useState("");
    // console.log(Input);
    const addNode =(e)=> {
        e.preventDefault();
        setListN([...lister,Input]);    
        setInput("");    
    }
    const deleteNode =(e)=> {
        setListN(lister.slice(0, lister.length-1));
    }
    return (
        <div className="myactions">
            <div className="mycontainer">
                <input type="text" placeholder="Enter a number to add" onChange={(e)=>{setInput(e.target.value)}} value={Input}/>
                <button className="btn1" onClick={addNode}>Add</button>
                <button className="btn2" onClick = {deleteNode}>Delete</button>
            </div>
        </div>
    )
}

export default Actions
