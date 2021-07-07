import React from 'react';
import './To_do_list.css'


function To_do_list(props){
    return(
        <div>
            <input className="ALL"type="checkbox" id="study" name="study" value="Study" />
            <label className="ALL"> 讀書</label>
            <button className="ALL">Edit</button>
            <button className="ALL">Delete</button>
            <br />
            <input className="ALL"type="checkbox" id="washing" name="washing" value="Washing" />
            <label className="ALL"> 洗浴室</label>
            <button className="ALL">Edit</button>
            <button className="ALL">Delete</button>
            <br />
            <input className="ALL" type="checkbox" id="exercise" name="exercise" value="Exercise" />
            <label className="ALL"> 運動</label>
            <button className="ALL">Edit</button>
            <button className="ALL">Delete</button>
            <br />
        </div>
    )
}

export default To_do_list;