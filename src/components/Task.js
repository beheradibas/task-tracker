import { FaTrash } from 'react-icons/fa'
const Task = ({task,onDelete,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder':''} `} onDoubleClick={()=>onToggle(task.id)}
        //Tried to change selectability - thats is to make select not selected when double clicked

        //htmlStyle={{-moz-user-select: none, -webkit-user-select: none, -ms-user-select:none, user-select:none,-o-user-select:none}}
        // htmlUnselectable="on"
        // onSelectStart="return false;" 
        // onMouseDown="return false;"
        >
            <h3 >
                <div className="taskname">{task.text}</div>
            
            <FaTrash style={{color:'red',
            cursor :'pointer',
            flexShrink : 0,
            margin : '3px',
            display : 'flex',
            
            }}
            //size="1x" 
            onClick={()=>onDelete(task.id)}

            />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
