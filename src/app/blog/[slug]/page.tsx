import { getBlog } from "../actions";
import BlogContent from "@/components/blogContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
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

export default async function Blog({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (!blog) return null;

  return <BlogContent content={blog} />;
}
