"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { getBusinessPlans } from "@/app/business-plan/actions";
import Link from "next/link";
import { useEffect, useState } from "react";

const BusinessIdeaSection = () => {
  const [businessPlans, setBusinessPlans] = useState<
    Awaited<ReturnType<typeof getBusinessPlans>>
  >([]);

  useEffect(() => {
    const fetchBusinessPlans = async () => {
      const plans = await getBusinessPlans();
      setBusinessPlans(plans);
    };
    fetchBusinessPlans();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href="/business-plan">Business Ideas</Link>
        </CardTitle>
        <CardDescription>
          These are the ideas I'm psyched out of my mind about
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="text-left">
          {businessPlans.map((plan) => (
            <li key={plan.slug}>
              <Link href={`/business-plan/${plan.slug}`}>
                {plan.data.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BusinessIdeaSection;
