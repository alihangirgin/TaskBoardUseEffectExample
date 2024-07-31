import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/Form/TaskForm";
import TaskList from "./components/Form/TaskList";
import axios from "axios";


function App() {

  const getTasks = async() => {
    const response = await axios.get("http://localhost:3000/tasks")
    setTasks(response.data);
  }

  useEffect(()=> {
    getTasks();
  },[])

  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = async (title, description) => {

    const response = await axios.post("http://localhost:3000/tasks", {
      title : title,
      description : description
    })

    setTasks([
      ...tasks,
      {
        id: response.data.id,
        title: title,
        description: description,
      },
    ]);
  };

  const handleDeletedItem = async(deletedItemId) => {
    const newArray = tasks.filter(x=> x.id != deletedItemId);
    setTasks(newArray);
    await axios.delete(`http://localhost:3000/tasks/${deletedItemId}`)
  }

  const handleUpdateFormParameters = async(idValue, titleValue, descriptionValue) => {
    const itemToBeUpdateIndex =  tasks.findIndex(x=> x.id === idValue);
    if(itemToBeUpdateIndex != -1)
    {
      tasks[itemToBeUpdateIndex].title =  titleValue;
      tasks[itemToBeUpdateIndex].description =  descriptionValue;
      setTasks(tasks);
      await axios.patch(`http://localhost:3000/tasks/${idValue}`, {
        title : titleValue,
        description : descriptionValue
      })
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
