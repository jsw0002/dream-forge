import BusinessPlanContent from "@/components/business-plan/businessPlanContent";
import { getBusinessPlan } from "../actions";

export default async function BusinessPlan({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const businessPlan = await getBusinessPlan(resolvedParams.slug);

  if (!businessPlan) return null;

  return <BusinessPlanContent content={businessPlan} />;
}
