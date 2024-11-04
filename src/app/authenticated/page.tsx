import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/auth-options";

const Authenticated = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex h-screen items-center justify-center">
        You are not authorized to access this page.
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center">
      Authenticated
    </div>
  );
};

export default Authenticated;
