import { LucideClapperboard } from "lucide-react";
import Link from "next/link";

import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { homePath } from "@/paths";

export const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
      <div className="flex align-items gap-x-2">
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}>
          <LucideClapperboard className="size-6" />

          <h1 className="text-2xl font-semibold">MovieVault</h1>
        </Link>
      </div>

      <ThemeSwitcher />
    </header>
  );
};
