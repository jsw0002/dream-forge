"use client";

import BlogCard from "@/components/blog/BlogCard";
import { getBlogs } from "./actions";
import { useEffect, useState } from "react";

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
    <>
      <section className="bg-white pb-10 dark:bg-gray-950 lg:pb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <section key="featured">
            {featuredBlogs.length > 0 && (
              <h2 className="text-2xl font-bold mb-4 text-center">
                Featured Posts
              </h2>
            )}
            <div className="-mx-4 flex flex-wrap">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </section>

          {Object.entries(groupedBlogs).map(([category, categoryBlogs]) => (
            <section key={category}>
              <h2 className="text-2xl font-bold mb-4 text-center capitalize">
                {category}
              </h2>
              <div className="-mx-4 flex flex-wrap">
                {categoryBlogs.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
