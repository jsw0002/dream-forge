"use client";

import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { getBlogs } from "./actions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Blog = Awaited<ReturnType<typeof getBlogs>>[number];

export default function Blog() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getBlogs();
      setBlogs(response);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mt-10">
      <h1>My Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Card
            key={blog.slug}
            className="hover:bg-muted transition-colors duration-200 cursor-pointer"
            onClick={() => router.push(`/blog/${blog.slug}`)}>
            <CardHeader>
              <CardTitle className="mb-3">{blog.data.title}</CardTitle>
              <CardDescription>{blog.data.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
