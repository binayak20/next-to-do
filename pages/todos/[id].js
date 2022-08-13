export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((todo) => {
    return {
      params: { id: todo.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { todo: data },
  };
};

const Details = ({ todo }) => {
  return (
    <div>
      <h1>{todo.name}</h1>
      <p>{todo.email}</p>
      <p>{todo.website}</p>
      <p>{todo.address.city}</p>
    </div>
  );
};

export default Details;
