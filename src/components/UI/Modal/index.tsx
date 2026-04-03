"use client";

import React from "react";
import { Dialog } from "radix-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/shared/lib/css";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40",
            "bg-black/50 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50",
            "-translate-x-1/2 -translate-y-1/2",
            "w-full max-w-2xl max-h-[90vh]",
            "flex flex-col",
            "bg-[var(--surface-page)]",
            "rounded-[var(--radius-lg)]",
            "[box-shadow:var(--shadow-card)]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            className,
          )}
        >
          {/* Header */}
          <div
            className={cn(
              "flex items-center justify-between shrink-0",
              "px-[var(--spacing-md)]",
              "border-b border-[var(--border-divider)]",
            )}
          >
            {title ? (
              <Dialog.Title className="font-[var(--font-header)] text-[color:var(--text-heading)]">
                {title}
              </Dialog.Title>
            ) : (
              <Dialog.Title />
            )}
            <Dialog.Close
              aria-label="Close"
              className={cn(
                "w-7 h-7 flex items-center justify-center",
                "text-[color:var(--text-muted)] hover:text-[color:var(--text-heading)]",
                "transition-colors duration-200",
              )}
            >
              <FontAwesomeIcon icon={faXmark} className="text-base" />
            </Dialog.Close>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-[var(--spacing-xl)]">
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
