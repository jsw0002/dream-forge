import Link from "next/link";

const BackToButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
      ← Back to {label}
    </Link>
  );
};

export default BackToButton;
