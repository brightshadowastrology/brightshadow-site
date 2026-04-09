import Link from "next/link";
import React from "react";

import { Button } from "@/components/UI/Button";

export default function NotFound() {
  return (
    <div className="container min-h-[70vh] py-[var(--spacing-xl)] flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4">This page could not be found.</p>
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
