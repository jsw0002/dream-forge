import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

const CryptoSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crypto</CardTitle>
        <CardDescription>
          Here are the top crypto projects I'm working on
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="text-left">
          <li>Crypto trading bot</li>
          <li>Crypto trading bot</li>
          <li>Crypto trading bot</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CryptoSection;
