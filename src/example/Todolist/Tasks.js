import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../../styles/Todo.module.scss";
import { selectTasks } from "../../redux/slice/todolistSlice";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleRenderTask = () => {
    if (tasks.length === 0) {
      return <div>There are no task left</div>;
    }
    
    return (
      <>
        {tasks?.map((item) => (
          <Task item={item} key={item.id} dispatch={dispatch} />
        ))}
      </>
    );
  };
  return <div className={styles.listTask}>{handleRenderTask()}</div>;
};

export default Tasks;
