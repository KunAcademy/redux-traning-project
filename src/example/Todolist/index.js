import React from "react";

import styles from "../../styles/Todo.module.scss";
import FormCreate from "./FormCreate";
import Tasks from "./Tasks";

const Todolist = () => {
  return (
    <div className={styles.todoWrapper}>
      <h1>Task management</h1>
      <FormCreate />
      <Tasks />
    </div>
  );
};

export default Todolist;
