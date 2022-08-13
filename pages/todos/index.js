import Link from "next/link";
import styles from "../../styles/TodoList.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { todos: data },
  };
};

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      <h1>All List</h1>
      {todos?.map((todo) => (
        <Link href={`/todos/${todo.id}`} key={todo.id}>
          <a className={styles.single}>
            <h3>{todo.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default TodoList;
