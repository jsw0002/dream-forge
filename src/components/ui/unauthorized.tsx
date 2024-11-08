import { XCircle } from "lucide-react";
import Link from "next/link";

const Unauthorized = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
      <XCircle className="h-16 w-16 text-red-500" />
      <h1 className="text-2xl font-bold">Access Denied</h1>
      <p className="text-muted-foreground">
        You are not authorized to access this page.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
        Return to Home
      </Link>
    </div>
  );
};

export default Unauthorized;
