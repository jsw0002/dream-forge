import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "./ui/card";

const BlogCard = () => {
  return (
    <Card>
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
