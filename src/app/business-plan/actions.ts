"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const businessPlansDirectory = path.join(
  process.cwd(),
  "src/markdown/business-plans"
);

export type BusinessPlanData = {
  title: string;
  description: string;
  date: string;
  author: string;
  industry: string;
  targetMarket: string;
  investmentRequired: string;
  potentialRevenue: string;
  businessModel: string;
  tags: string[];
  status: "Idea" | "Research Phase" | "In Development" | "Launched" | "On Hold";
};

export type BusinessPlan = {
  slug: string;
  data: BusinessPlanData;
  content: string;
};

export async function getBusinessPlans() {
  const fileNames = fs.readdirSync(businessPlansDirectory);
  const allBusinessPlans = fileNames.map((fileName) => {
    const filePath = path.join(businessPlansDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(".md", ""),
      data,
      content,
    };
  });

  return allBusinessPlans;
}

export async function getBusinessPlan(slug: string) {
  const filePath = path.join(businessPlansDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug, data, content };
}
