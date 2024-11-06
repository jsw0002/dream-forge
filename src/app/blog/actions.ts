"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "src/markdown/blogs");

export async function getBlogs() {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogs = fileNames.map((fileName) => {
    const filePath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(".md", ""),
      data,
      content,
    };
  });

  return allBlogs;
}

export async function getBlog(slug: string) {
  const filePath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    data,
    content,
  };
}
