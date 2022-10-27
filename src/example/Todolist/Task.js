import React from 'react';
import { Button } from 'antd';

import { removeTask } from '../../redux/slice/todolistSlice';
import styles from "../../styles/Todo.module.scss";

const Task = ({ item, dispatch }) => {
  const renderStatusTask = (status) => {
    let text = "";
    let style = "";
    switch (status) {
      case 0:
        text = "Todo";
        style = "todoStyle";
        break;
      case 1:
        text = "Doing";
        style = "doingStyle";
        break;
      case 2: 
        text = "Pending";
        style = "pendingStyle";
        break;
      default:
        text = "Todo";
        style = "todoStyle";
    }

    return (
      <div className={`${styles.baseStatus} ${styles[style]}`}>{text}</div>
    );
  };
  
  return (
    <div className={styles.taskStyle}>
    <div className={styles.taskContent}>
      <div className={styles.title}>
        <span>{item.title}</span>
      </div>
      <div>{renderStatusTask(item.status)}</div>
    </div>
    <div className={styles.buttonTask}>
      <Button>Edit</Button>
      <Button onClick={() => dispatch(() => dispatch(removeTask(item.id)))}>
        Delete
      </Button>
    </div>
  </div>
  )
}

export default Task 