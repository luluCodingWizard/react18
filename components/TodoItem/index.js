import React from "react";
import styles from "../List/list.module.css";

function TodoItem({ item }) {
  return (
    <div key={item.key} className={styles.item}>
      <h4 className={styles.item_title}> {item.title}</h4>
      <p> {item.completed ? "completed" : "not completed"}</p>
    </div>
  );
}

export default TodoItem;
