export default async function PostPage({ params }: { params: { id: string } }) {
  // params.id contains whatever is in the URL
  // For /posts/5, params.id = "5"
  
  // Fetch data from the JSON placeholder API
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await response.json();

  return (
    <>
      <section className="bg-yellow-600 flex-1 p-8 text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Post #{post.id}</h1>
        <h2 className="text-xl mb-4">{post.title}</h2>
        <p>{post.body}</p>
      </section>

      <section className="bg-yellow-600 flex-1 p-8 text-white flex items-center justify-center">
        <p>User ID: {post.userId}</p>
      </section>
    </>
  );
}