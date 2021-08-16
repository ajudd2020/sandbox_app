import React from 'react'

export const Tasks = ({tasks}) => {
    console.log("TASKS IN TASK COMPONENT", tasks)

  return (
    <ul>
        {tasks.length > 0? tasks.map((task, i) => {
            return (
                <li key={i}> 
                    {task.task} Priority: {task.priority}
                </li>
            )
        }) : 'loading tasks'}
    </ul>
  )
}


export default Tasks;
