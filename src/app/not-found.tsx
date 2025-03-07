﻿import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { homePath } from "@/paths";

export default function NotFound() {
  return (
    <Placeholder
      label="Movie not found"
      button={
        <Button asChild variant="outline">
          <Link href={homePath()}>Go to Movies</Link>
        </Button>
      }
    />
  );
}
