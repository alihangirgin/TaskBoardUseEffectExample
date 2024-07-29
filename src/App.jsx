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

  const handleUpdateFormParameters = (idValue, titleValue, descriptionValue) => {
    const itemToBeUpdateIndex =  tasks.findIndex(x=> x.id === idValue);
    if(itemToBeUpdateIndex != -1)
    {
      tasks[itemToBeUpdateIndex].title =  titleValue;
      tasks[itemToBeUpdateIndex].description =  descriptionValue;
      setTasks(tasks);
    }
  }

  return (
    <div className="App">
      <TaskForm formParameters={handleFormSubmit}/>
      <h1>My Tasks</h1>
      <TaskList tasks= {tasks} deletedItemId={handleDeletedItem} updateFormParamaters={handleUpdateFormParameters}/>
    </div>
  );
}

export default App;
