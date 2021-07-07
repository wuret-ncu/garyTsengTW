import React from 'react';
import './ToDoList.css'


function Data(props) {
    return(
        <div>
            <input type="checkbox"/>
            <label>{props.name}</label>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
    
}

function ToDoList(props){
    const dataList = props.name.map(value =>
        <Data key={value} name={value}/>)
    return(
        <div>
            {dataList}
        </div>
    )
}

export default ToDoList;