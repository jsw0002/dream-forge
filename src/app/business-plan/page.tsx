import { authOptions } from "../api/auth/[...nextauth]/auth-options";
import BusinessPlanList from "@/components/business-plan/BusinessPlanList";
import { getServerSession } from "next-auth";
import Unauthorized from "@/components/ui/unauthorized";

export default async function BusinessPlan() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Unauthorized />;
  }

  return <BusinessPlanList />;
}
