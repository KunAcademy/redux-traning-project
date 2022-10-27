import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../../styles/Todo.module.scss";
import { selectTasks } from "../../redux/slice/todolistSlice";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <div className={styles.listTask}>
      {tasks?.map((item) => (
        <Task item={item} key={item.id} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default Tasks
