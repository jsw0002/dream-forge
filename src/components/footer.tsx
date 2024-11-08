import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export const Footer = () => {
  return (
    <footer className="text-muted-foreground py-4 w-full text-sm">
      <div className="container relative flex justify-center">
        <div>
          © {new Date().getFullYear()} By{" "}
          <Button variant="link" className="p-0" asChild>
            <a href="https://dream-forge-lake.vercel.app/enterprise">
              DF Enterprises
            </a>
          </Button>
        </div>
        <div className="absolute right-0">
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};
