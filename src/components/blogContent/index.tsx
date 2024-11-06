"use client";

import BlogDetails from "./BlogDetails";
import BackToBlog from "./BackToBlog";
import { BlogData, getBlog } from "@/app/blog/actions";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";
import { useState } from "react";

export default function BlogContent({
  content,
}: {
  content: Awaited<ReturnType<typeof getBlog>>;
}) {
  const [showBottomLink, setShowBottomLink] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return (
    <div className="mt-10" ref={contentRef}>
      <BackToBlog />
      <Image
        src={content.data.image}
        alt={content.data.title || "Blog post image"}
        width={1200}
        height={630}
        className="w-full max-h-[500px] object-cover mb-4"
      />
      <BlogDetails data={content.data as BlogData} />
      <ReactMarkdown
        components={{
          p: (props) => <p className="my-4" {...props} />,
          li: (props) => <li className="my-2" {...props} />,
          hr: () => <hr className="my-6" />,
          pre: (props) => <pre className="my-6" {...props} />,
        }}>
        {content.content}
      </ReactMarkdown>
      {showBottomLink && (
        <div className="mt-8">
          <BackToBlog />
        </div>
      )}
    </div>
  );
}
