"use client";

import { useEffect, useState } from "react";
import { getBusinessPlans } from "@/app/business-plan/actions";
import BusinessPlanCard from "./BusinessPlanCard";
import { useRouter } from "next/navigation";

export type BusinessPlanList = Awaited<
  ReturnType<typeof getBusinessPlans>
>[number];

function groupBusinessPlansByStatus(businessPlans: BusinessPlanList[]) {
  return businessPlans.reduce(
    (acc, businessPlan) => {
      const status = businessPlan.data.status;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(businessPlan);
      return acc;
    },
    {} as Record<string, BusinessPlanList[]>
  );
}

const BusinessPlanList = () => {
  const [businessPlans, setBusinessPlans] = useState<BusinessPlanList[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBusinessPlans = async () => {
      const response = await getBusinessPlans();
      setBusinessPlans(response);
    };

    fetchBusinessPlans();
  }, []);

  const groupedBusinessPlans = groupBusinessPlansByStatus(businessPlans);

  return (
    <div className="mt-10 space-y-12">
      {Object.entries(groupedBusinessPlans).map(([status, businessPlans]) => (
        <section key={status}>
          <h2 className="text-2xl font-bold mb-4 capitalize">{status}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessPlans.map((businessPlan) => (
              <BusinessPlanCard
                key={businessPlan.slug}
                businessPlan={businessPlan}
                onClick={() =>
                  router.push(`/business-plan/${businessPlan.slug}`)
                }
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default BusinessPlanList;
