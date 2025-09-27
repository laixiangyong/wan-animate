import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale, langName }: { locale: any; langName?: string }) => {
  const demoUrl = langName ? `/${langName}/wan-animate-demo` : '/wan-animate-demo';

  return (
    <Link href={demoUrl}>
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Try Wan Animate Demo"
      >
        <RocketIcon />
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
