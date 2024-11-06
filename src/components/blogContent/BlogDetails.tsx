import { BlogData } from "@/app/blog/actions";
import { Calendar, User, Group, Watch } from "lucide-react";
import CustomHoverCard from "../ui/hover-card";
import { formatDate } from "@/lib/formatDate";

const BlogDetails = ({ data }: { data: BlogData }) => {
  return (
    <div className="flex flex-wrap gap-8 mb-6 text-sm">
      <CustomHoverCard
        triggerContent={
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(data.date)}
          </div>
        }
        hoverContent={`Created: ${formatDate(data.date)}`}
      />

      {data.author && (
        <CustomHoverCard
          triggerContent={
            <div className="flex items-center text-muted-foreground">
              <User className="w-4 h-4 mr-2" />
              {data.author}
            </div>
          }
          hoverContent={
            <>
              <p>Author: {data.author}</p>
              <ul>
                <li>Also potentially</li>
                <li>a list of recent</li>
                <li>articles?</li>
              </ul>
            </>
          }
        />
      )}

      {data.readingTime && (
        <div className="flex items-center text-muted-foreground">
          <Watch className="w-4 h-4 mr-2" />
          {data.readingTime} min read
        </div>
      )}

      {data.categories?.length > 0 && (
        <CustomHoverCard
          triggerContent={
            <div className="flex items-center text-muted-foreground">
              <Group className="w-4 h-4 mr-2" />
              {data.categories.join(" · ")}
            </div>
          }
          hoverContent={
            <p>
              I'm thinking this one would instead link to a category specific
              page or section
            </p>
          }
        />
      )}

      {data.tags?.length > 0 && (
        <CustomHoverCard
          triggerContent={
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
          }
          hoverContent={
            <p>
              I'm thinking each of these would link to a tag specific page or
              section
            </p>
          }
        />
      )}
    </div>
  );
};

export default BlogDetails;
