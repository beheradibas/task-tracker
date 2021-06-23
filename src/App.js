import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import About from './components/About'

function App() {
  const [tasks,setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async () => {
        const taskFromServer = await fetchTasks()
        setTasks(taskFromServer)
    }
    getTasks()
  },[])

  
const fetchTasks = async () => {
  const res= await fetch('http://localhost:5000/tasks')
  const data = await res.json();
  return data
  // console.log(data);


}
const fetchTask = async (id) => {
  const res= await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json();
  return data
  // console.log(data);


}

const [showAddTask,setShowAddTask] = useState(false)

//add task 
const addTask = async (task) => {
  const res= await fetch(`http://localhost:5000/tasks`,{
    method : 'POST',
    headers : {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json();
  setTasks([...tasks, data])
}

// delete task
const onDelete = async (id)=> {
  //console.log('delete',id);
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method : 'DELETE'
  })
  setTasks(tasks.filter((task)=> task.id!==id));
}

const toggleReminder = async (id) => {
  //console.log(id)
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, 
    reminder : !taskToToggle.reminder 
  }
  const res= await fetch(`http://localhost:5000/tasks/${id}`,{
    method : 'PUT',
    headers : {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })
  const data = await res.json();
  
  setTasks(tasks.map((task)=> task.id === id ? {...task , reminder : data.reminder} : task));
}
  return (
    <Router>
    <div className="container">
      <Header onToggle={()=> setShowAddTask(!showAddTask)} show={showAddTask} />
      
    <Route path='/' exact render={()=>(
      <>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete ={onDelete} onToggle={toggleReminder} />
      ):
      ('No tasks to show')
      }
     
      </>
    )} />
    
    <Route path='/about' component={About}/>
    <Footer />
    </div>
    </Router>
  );
} 

export default App;
