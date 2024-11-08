"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { useRouter } from "next/navigation";

const BlogCard = () => {
  const router = useRouter();
  return (
    <Card
      className="cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800"
      onClick={() => router.push("/blog")}>
      <CardHeader>
        <CardTitle>Blogs</CardTitle>
        <CardDescription>
          Here are the various blogs I'm planning
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-6 text-left">
          <li>Story of the Dream Forge</li>
          <li>Free business advice</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
