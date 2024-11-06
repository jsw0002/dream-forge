import { BlogData } from "@/app/blog/actions";
import { Calendar, User, Group } from "lucide-react";
import { formatDate } from "@/lib/formatDate";

const BlogDetails = ({ data }: { data: BlogData }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6 text-sm">
      <div className="flex items-center text-muted-foreground">
        <Calendar className="w-4 h-4 mr-2" />
        {formatDate(data.date)}
      </div>

      {data.author && (
        <div className="flex items-center text-muted-foreground">
          <User className="w-4 h-4 mr-2" />
          {data.author}
        </div>
      )}

      {data.categories?.length > 0 && (
        <div className="flex items-center text-muted-foreground">
          <Group className="w-4 h-4 mr-2" />
          {data.categories.join(" · ")}
        </div>
      )}

      {data.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
