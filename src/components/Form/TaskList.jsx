import React from 'react'
import './Task.css'
import TaskItem from "./TaskItem";

export default function TaskList({tasks, deletedItemId}) {
  return (
    <div className='task-list-div'>
    {
        tasks.map( (x, index) => (
            <TaskItem taskParam={x} key={index} deletedItemId={deletedItemId}/>
        ))
    }      
    </div>
  )
}
