import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [tasks,setTasks] = useState([
    {
        id : 1,
        text: 'Doctor appointment',
        day: 'Feb 25 at 5pm',
        reminder : true,
    },
    {
        id : 2,
        text: 'Love appointment',
        day: 'Feb 14 at 7am',
        reminder : true,
    },
    {
        id : 3,
        text: 'Death appointment',
        day: 'Oct 31 at 5pm',
        reminder : false,
    },
    {
        id : 4,
        text: 'Food appointment',
        day: 'Feb 25 at 5pm',
        reminder : false,
    },
])

const [showAddTask,setShowAddTask] = useState(false)

//add task 
const addTask = (task) => {
  setTasks([...tasks, task])
}

// delete task
const onDelete = (id)=> {
  //console.log('delete',id);
  setTasks(tasks.filter((task)=> task.id!==id));
}

const toggleReminder = (id) => {
  //console.log(id)
  
  setTasks(tasks.map((task)=> task.id === id ? {...task , reminder : !task.reminder} : task));
}
  return (
    <div className="container">
      <Header onToggle={()=> setShowAddTask(!showAddTask)} show={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete ={onDelete} onToggle={toggleReminder} />
      ):
      ('No tasks to show')
      }
    </div>
  );
} 

export default App;
