import { BlogList } from "@/app/blog/page";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";

function BlogCard({ blog }: { blog: BlogList }) {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <Image
              src={blog.data.image}
              alt={blog.data.title || "Blog post image"}
              width={500}
              height={300}
            />
          </div>
          <div>
            {blog.data.date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {formatDate(blog.data.date)}
              </span>
            )}
            <h3>
              <a
                href={`/blog/${blog.slug}`}
                className="mb-4 inline-block text-xl font-semibold text-foreground hover:text-primary dark:hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                {blog.data.title}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {blog.data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
