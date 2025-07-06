import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

function BlogIndex() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>
            <Link className="text-blue-600 underline" to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogIndex;
