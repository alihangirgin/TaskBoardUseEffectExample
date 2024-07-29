import { useState } from "react";
import "./App.css";
import TaskForm from "./components/Form/TaskForm";
import TaskList from "./components/Form/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (title, description) => {
    setTasks([
      ...tasks,
      {
        id: Math.round(Math.random() * 99999),
        title: title,
        description: description,
      },
    ]);
  };

  const handleDeletedItem = (deletedItemId) => {
    const newArray = tasks.filter(x=> x.id != deletedItemId);
    setTasks(newArray);
  }

  const handleUpdateFormSubmit = (updateFormParamaters) => {
    debugger;
    tempArray = [...tasks];
    const itemToBeUpdateIndex =  tempArray.findIndex(x=> x.id === updateFormParamaters.id)
    if(itemToBeUpdateIndex != -1)
      tempArray[itemToBeUpdateIndex] = updateFormParamaters;
    setTasks(tempArray);
  }

  return (
    <div className="App">
      <TaskForm formParameters={handleFormSubmit} updateFormParamaters={handleUpdateFormSubmit} />
      <h1>My Tasks</h1>
      <TaskList tasks= {tasks} deletedItemId={handleDeletedItem}/>
    </div>
  );
}

export default App;
