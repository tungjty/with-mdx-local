import Link from "next/link";
import { getAllPostsMeta } from "../lib/posts";

export default function Home({ posts   }) {
  return (
    <div className="p-4">
      <h1 className="mb-6 text-3xl font-bold text-sky-500">
        Welcome to my Blog
      </h1>
      <p className="mb-4 text-2xl font-medium text-gray-500">Recent posts</p>
      <ul className="flex flex-col gap-2">
        {posts.map((post: any) => (
          <li key={post.slug} className="w-1/2 rounded-md p-4 shadow-md">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = getAllPostsMeta();

  return {
    props: {
      posts,
    },
  };
}
