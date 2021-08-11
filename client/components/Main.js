import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from "react-redux";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import Tasks from './Tasks';
import TaskForm from './taskForm';
import { getTasks } from '../store';

/**
 * COMPONENT
 */
export const Main = () => {
    const tasks = useSelector(state => get(state, 'tasks', []), isEqual);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTasks())
    }, [])

  return (
    <>
        <Tasks tasks={tasks} />
        <TaskForm />
    </>
  )
}

export default Main
