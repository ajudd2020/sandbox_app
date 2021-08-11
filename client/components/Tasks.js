import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {useDispatch, useSelector} from "react-redux";
import get from "lodash/get";
import isEqual from "lodash/isEqual";

export const Tasks = ({tasks}) => {
    // const maxClaimed = useSelector(state => get(state, ["dashboards", "roles", role, "data", "maxClaimed"], 0));
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
