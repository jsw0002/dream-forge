"use client";

import ReactMarkdown from "react-markdown";
import { formatDate } from "../../../lib/formatDate";
import { getBlog } from "../actions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";

export default function Blog() {
  const [blog, setBlog] = useState<Awaited<ReturnType<typeof getBlog>> | null>(
    null
  );
  const { slug } = useParams();
  const [showBottomLink, setShowBottomLink] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slug || typeof slug !== "string") return;
    const fetchBlog = async () => {
      const blog = await getBlog(slug);
      setBlog(blog);
    };

    fetchBlog();

    const checkScroll = () => {
      if (contentRef.current) {
        const hasScroll = contentRef.current.scrollHeight > window.innerHeight;
        setShowBottomLink(hasScroll);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  if (!blog) return null;

  return (
    <div className="mt-10" ref={contentRef}>
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← Back to blog list
      </Link>
      <Image
        src={blog.data.image}
        alt={blog.data.title || "Blog post image"}
        width={1200}
        height={630}
        className="w-full max-h-[500px] object-cover mb-4"
      />
      <h1>{blog.data.title}</h1>
      <p className="text-sm text-muted-foreground mb-4">
        {formatDate(blog.data.date)}
      </p>
      <ReactMarkdown
        components={{
          p: (props) => <p className="my-4" {...props} />,
          li: (props) => <li className="my-2" {...props} />,
          hr: () => <hr className="my-6" />,
          pre: (props) => <pre className="my-6" {...props} />,
        }}>
        {blog.content}
      </ReactMarkdown>
      {showBottomLink && (
        <div className="mt-8">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:underline">
            ← Back to blog list
          </Link>
        </div>
      )}
    </div>
  );
}
