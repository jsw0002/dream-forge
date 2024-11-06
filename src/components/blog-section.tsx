"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { getBlogs } from "@/app/blog/actions";
import Link from "next/link";
import { useState, useEffect } from "react";

const BlogSection = () => {
  const [recentBlogs, setRecentBlogs] = useState<
    Awaited<ReturnType<typeof getBlogs>>
  >([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      const sorted = blogs
        .sort(
          (a, b) =>
            new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
        )
        .slice(0, 5);
      setRecentBlogs(sorted);
    };
    fetchBlogs();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href="/blog">Blogs</Link>
        </CardTitle>
        <CardDescription>Recent blog posts</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="text-left">
          {recentBlogs.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>{blog.data.title}</Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BlogSection;
