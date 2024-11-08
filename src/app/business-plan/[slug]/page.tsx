import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import BusinessPlanContent from "@/components/business-plan/businessPlanContent";
import { getBusinessPlan } from "../actions";
import { getServerSession } from "next-auth";
import Unauthorized from "@/components/ui/unauthorized";

export default async function BusinessPlan({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Unauthorized />;
  }

  const resolvedParams = await params;
  const businessPlan = await getBusinessPlan(resolvedParams.slug);

  if (!businessPlan) return null;

  return <BusinessPlanContent content={businessPlan} />;
}
