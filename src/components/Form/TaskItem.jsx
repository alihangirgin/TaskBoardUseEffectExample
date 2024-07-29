import React, { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskItem({ taskParam, deletedItemId, updateFormParamaters }) {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleUpdateButtonOnClick = () => {
    setShowEditForm(true);
  };

  const handleDeleteButtonOnClick = () => {
    deletedItemId(taskParam.id);
  };

  const handleUpdateFormParameters = (idValue, titleValue, descriptionValue) => {
    setShowEditForm(false);
    updateFormParamaters(idValue, titleValue, descriptionValue);
  }

  return (
    <div className="task-item-div">
      {showEditForm ? 
      
      <div>
        <TaskForm isUpdate={true}  updateId={taskParam.id} updateFormParamaters={handleUpdateFormParameters}/>
      </div> 
      
      : <div>
          <h3>Your Task</h3>
          <p>{taskParam.title}</p>
          <h3>Your Task Detail</h3>
          <p>{taskParam.description}</p>
          <div>
            <button className="update-button" onClick={handleUpdateButtonOnClick}>
              <label>Update</label>
            </button>
            <button className="delete-button" onClick={handleDeleteButtonOnClick}>
              <label>Delete</label>
            </button>
          </div>        
        </div>}

    </div>
  );
}
