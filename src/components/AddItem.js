import React, {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import './Additem.css'

function AddItem(props){
    const [inputData, setData]=useState("");
    return(
        <div className="addItemDiv">
            <input  type="text" onChange={(e)=>{setData(e.target.value);}} />
            <button onClick={() => props.changeItem({id:nanoid(), name:inputData, completed:false})}>新增</button>
            <br />
        </div>
    )
}

export default AddItem;