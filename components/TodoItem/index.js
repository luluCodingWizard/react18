import React, { useState } from "react";
import styles from "../List/list.module.css";

function TodoItem({ item }) {
  const [isCompleted, setIsCompleted] = useState(item.completed);
  const hundleCompletion = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <div key={item.key} className={styles.item}>
      <h4 className={styles.item_title}> {item.title}</h4>
      <p className={!isCompleted ? styles.notCompleted : ""}>
        {" "}
        {isCompleted ? "completed" : "not completed"}
      </p>
      <button onClick={hundleCompletion}>
        {isCompleted ? "set to no completed" : "set completed"}
      </button>
    </div>
  );
}

export default TodoItem;
