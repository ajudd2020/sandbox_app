import axios from 'axios'

/**
 * Action Types
 */

const GOT_TASKS = 'GOT_TASKS';

/**
 * Action Creators
 */
const gotTasks = (tasks) => ({type: GOT_TASKS, tasks})


/**
 * Thunk Creators
 */
export const getTasks = () => async dispatch => {
    try {
        const res = await axios.get('/api/tasks');
        console.log("RES", res)
        dispatch(gotTasks(res.data))
    }
    catch (err) {
        console.error(err);
    }
}

export const createTask = (task, priority) => {
    return async (dispatch) => {
        try{
            const res = await axios.post('/api/tasks', {task, priority})
        } catch (err) {
            console.error(err);
        }
    }
}


/**
 * Default state
 */
const defaultState = [];

/**
 * Reducer
 */
export default function (state = defaultState, action) {
    switch (action.type) {
        case GOT_TASKS: 
            console.log("ACTION", action)
            return action.tasks
        default: 
            return state
    }
}