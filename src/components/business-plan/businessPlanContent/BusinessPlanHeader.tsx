import { BusinessPlan } from "@/app/business-plan/actions";

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <dt className="text-sm text-gray-500">{label}</dt>
      <dd className="text-base font-medium">{value}</dd>
    </div>
  );
}

const BusinessPlanDetails = ({ data }: { data: any }) => {
  return (
    <div className="mb-8 space-y-6 border-b pb-6">
      <div className="border-b pb-6">
        <h1 className="text-4xl font-bold mb-3">{data.title}</h1>
        <p className="text-lg text-gray-600">{data.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InfoItem label="Author" value={data.author} />
        <InfoItem label="Industry" value={data.industry} />
        <InfoItem label="Target Market" value={data.targetMarket} />
        <InfoItem label="Investment Required" value={data.investmentRequired} />
        <InfoItem label="Potential Revenue" value={data.potentialRevenue} />
        <InfoItem label="Business Model" value={data.businessModel} />
      </div>

      <div className="flex flex-wrap gap-2">
        {data.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-md">
        Status: {data.status}
      </div>
    </div>
  );
};

export default BusinessPlanDetails;
