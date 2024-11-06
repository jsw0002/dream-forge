"use client";

import BlogCard from "@/components/blog/BlogCard";
import { getBlogs } from "./actions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export type BlogList = Awaited<ReturnType<typeof getBlogs>>[number];

function groupBlogsByCategory(blogs: BlogList[]) {
  return blogs.reduce(
    (acc, blog) => {
      blog.data.categories.forEach((category: string) => {
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(blog);
      });
      return acc;
    },
    {} as Record<string, BlogList[]>
  );
}

export default function Blog() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogList[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getBlogs();
      setBlogs(response);
    };

    fetchBlogs();
  }, []);

  const featuredBlogs = blogs.filter((blog) => blog.data.featured);
  const groupedBlogs = groupBlogsByCategory(blogs);

  return (
    <div className="mt-10 space-y-12">
      {featuredBlogs.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                onClick={() => router.push(`/blog/${blog.slug}`)}
              />
            ))}
          </div>
        </section>
      )}

      {Object.entries(groupedBlogs).map(([category, categoryBlogs]) => (
        <section key={category}>
          <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                onClick={() => router.push(`/blog/${blog.slug}`)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
