import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";

const BusinessIdeaCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Ideas</CardTitle>
        <CardDescription>
          Here are the various business ideas I'm cooking up
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-6 text-left">
          <li>Home management app</li>
          <li>Privacy mask</li>
          <li>Book series</li>
          <li>Crypto trading bot</li>
          <li>3d printing service</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default BusinessIdeaCard;
