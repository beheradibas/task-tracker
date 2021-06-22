import { useState } from 'react';
const AddTask = ({ onAdd }) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Empty task can not be added, please add a task name')
        }
        else {
            onAdd({
            //id : Math.floor(Math.random()*100+1 ),
            day : day,
            text : text,
            reminder : reminder,
            })
        setText('')
        setDay('')
        setReminder(false)
        }

    }
    return (
        <form className='add-form' onSubmit = {onSubmit}>
            <div className="form-control">
            <label>Add Task</label>
        <input 
        type='text'
        placeholder='Enter task name'
        value={text}
        onChange = {(e)=> setText(e.target.value)}
        />
            </div>
        <div className="form-control">
        <label>Add Date and Time</label>
        <input 
        type='text'
        placeholder='Enter date and time'
        value={day}
        onChange = {(e)=> setDay(e.target.value)}
        />
        </div>
        <div className ='form-control form-control-check'>
        <label>Set reminder</label>
        <input 
        type='checkbox'
        
        checked={reminder}
        onChange = {(e)=> setReminder(e.currentTarget.checked)}
        />
        </div>
        <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
