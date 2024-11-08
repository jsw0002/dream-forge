import BlogContent from "@/components/blog/blogContent";
import { getBlog } from "../actions";
import { TPageProps } from "@/types/page";

export async function generateMetadata({ params }: TPageProps) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);
  return {
    title: blog?.data.metaTitle || blog?.data.title,
    description: blog?.data.metaDescription || blog?.data.description,
    keywords: blog?.data.tags || blog?.data.categories,
    robots: { index: true, follow: true },
    openGraph: {
      title: blog?.data.metaTitle || blog?.data.title,
      description: blog?.data.metaDescription || blog?.data.description,
      images: blog?.data.image,
    },
    twitter: {
      title: blog?.data.metaTitle || blog?.data.title,
      description: blog?.data.metaDescription || blog?.data.description,
      images: blog?.data.image,
    },
  };
}

export default async function Blog({ params }: TPageProps) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (!blog) return null;

  return <BlogContent content={blog} />;
}
