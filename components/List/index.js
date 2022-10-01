import styles from "./list.module.css";
import todos from "../../mocks/todo";

const List = () => {
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <div className={styles.item}>
          <h4 className={styles.item_title}> {todo.title}</h4>
          <p> {todo.completed ? "completed" : "not completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
