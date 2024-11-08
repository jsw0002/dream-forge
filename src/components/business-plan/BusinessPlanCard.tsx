import { BusinessPlanList } from "./BusinessPlanList";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

function BusinessPlanCard({
  businessPlan,
  onClick,
}: {
  businessPlan: BusinessPlanList;
  onClick: () => void;
}) {
  return (
    <Card
      className="hover:bg-muted transition-colors duration-200 cursor-pointer"
      onClick={onClick}>
      <CardHeader>
        <CardTitle className="py-3">{businessPlan.data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{businessPlan.data.description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default BusinessPlanCard;
