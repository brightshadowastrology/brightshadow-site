import Link from "next/link";
import React from "react";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="h-screen min-h-[100vh] pt-[var(--spacing-3xl)] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-0">404</h1>
        <p className="mb-4">This page could not be found.</p>
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </Section>
  );
}
