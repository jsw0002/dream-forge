import Link from "next/link";

const BackToBusinessPlan = () => {
  return (
    <Link
      href="/business-plan"
      className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
      ← Back to business plan list
    </Link>
  );
};

export default BackToBusinessPlan;
