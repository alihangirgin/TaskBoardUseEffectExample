import { useState } from 'react';
import './Task.css'

export default function TaskForm({formParameters, isUpdate, updateId, updateFormParamaters}) {
const [titleValue, setTitleValue] = useState( formParameters?.title ?? "");
const [descriptionValue, setDescriptionValue] = useState(formParameters?.description ?? ""); 
const [idValue, setIdValue] = useState(updateId ?? 0); 

const handleTaskInputOnChange = (event) => {
    setTitleValue(event.target.value);
}

const handleTaskAreaOnChange = (event) => {
    setDescriptionValue(event.target.value);
}

const handleFormCreateOnSubmit = (event) => {
    event.preventDefault();
    if(isUpdate)
        updateFormParamaters(idValue, titleValue, descriptionValue);
    else
        formParameters(titleValue, descriptionValue);
    setTitleValue("");
    setDescriptionValue("");
    setIdValue(0);
}

  return (
<div>
    {isUpdate != true  ? 
     <div className='task-create-form-div'>
        <h3>Please Add Task</h3>
        <form className="task-form" onSubmit={handleFormCreateOnSubmit}>
            <label className='task-label'>Title</label>
            <input value={titleValue} onChange={handleTaskInputOnChange} className='task-input' type="text"></input>
            <label className='task-label'>Description</label>
            <textarea value={descriptionValue}  onChange={handleTaskAreaOnChange} className='task-input' rows={5}></textarea> 
            <button className='task-button'>Create</button>       
        </form>
    </div>   
    :
    <div className='task-update-form-div'>
    <h3>Please Update the Task</h3>
    <form className="task-form" onSubmit={handleFormCreateOnSubmit}>
        <label className='task-label'>Title</label>
        <input value={titleValue} onChange={handleTaskInputOnChange} className='task-input' type="text"></input>
        <label className='task-label'>Description</label>
        <textarea value={descriptionValue}  onChange={handleTaskAreaOnChange} className='task-input' rows={5}></textarea> 
        <button className='task-button-update'>Update</button>       
    </form>
</div> 
}
</div>

  )
}
