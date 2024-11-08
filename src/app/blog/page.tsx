"use client";

import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { getBlogs } from "./actions";
import Image from "next/image";
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
              <Image
                src={blog.data.image}
                alt={blog.data.title || "Blog post image"}
                width={500}
                height={300}
              />
              <CardTitle className="py-3">{blog.data.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{blog.data.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
