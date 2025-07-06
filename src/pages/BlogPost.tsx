import { useParams } from "react-router-dom";
import { posts } from "../lib/posts";

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div className="p-4 text-red-600">Post not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
