import { getData } from '../api/fetchData';

const Test = async () => {
  const data = await getData();

  const posts = data.props.posts;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {/* TODO Render other post details here */}
        </div>
      ))}
    </div>
  );
};

export default Test;
