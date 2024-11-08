import {
  Card,
  CardDescription,
  CardContent,
  CardTitle,
  CardHeader,
} from "../ui/card";
import Image from "next/image";
import { BlogList } from "@/app/blog/page";

function BlogCard({ blog, onClick }: { blog: BlogList; onClick: () => void }) {
  return (
    <Card
      className="hover:bg-muted transition-colors duration-200 cursor-pointer"
      onClick={onClick}>
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
  );
}

export default BlogCard;
