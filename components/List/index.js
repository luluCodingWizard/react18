import styles from "./list.module.css";
import todos from "../../mocks/todo";
import TodoItem from "../TodoItem";

const List = () => {
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem item={todo} />
      ))}
    </div>
  );
};

export default List;
