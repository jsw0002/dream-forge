import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "./ui/card";

const ThreeDPrintingCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>3D Printing</CardTitle>
        <CardDescription>
          Here are the top 3d printing projects I'm working on
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-6 text-left">
          <li>3d printed phone stand</li>
          <li>3d printed phone holder</li>
          <li>3d printed phone grip</li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="secondary">View all 3d prints</Button>
      </CardFooter>
    </Card>
  );
};

export default ThreeDPrintingCard;
