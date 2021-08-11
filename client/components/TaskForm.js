import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'
import { createTask } from '../store/tasks';

/**
 * COMPONENT
 */
const TaskForm = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('')
    const [priority, setPriority] = useState(0);

    const handleSubmit = (e) => {
        console.log("SUBMIT BEING HANDLED")
        console.log("TASK", task, "PRIORITY", priority)
        dispatch(createTask(task, priority))
    }
    const handleChange = (e) => {
        const item = e.target.name
        item === "Task" ? setTask(e.target.value) : setPriority(e.target.value)
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="Task">
                        <small>Task</small>
                    </label>
                    <input
                        name="Task"
                        type="text"
                        value={task}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="Priority">
                        <small>Priority</small>
                    </label>
                    <input
                        name="priority"
                        type="number"
                        min="1"
                        max="5"
                        value={priority}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm;
