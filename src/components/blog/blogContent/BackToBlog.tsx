import Link from "next/link";

const BackToBlog = () => {
  return (
    <Link
      href="/blog"
      className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
      ← Back to blog list
    </Link>
  );
};

export default BackToBlog;
