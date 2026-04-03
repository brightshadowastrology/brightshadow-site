"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/shared/lib/css";
import { useCart } from "@/context/CartContext";

interface CartIconProps {
  className?: string;
}

export default function CartIcon({ className }: CartIconProps) {
  const { items: cartItems } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      href="/cart"
      aria-label="Cart"
      className={cn(
        "relative inline-flex items-center justify-center",
        "w-10 h-10",
        "text-[color:var(--text-body)] hover:text-[color:var(--surface-action)]",
        "transition-colors duration-200",
        className,
      )}
    >
      <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />

      {mounted && cartItems.length > 0 && (
        <span
          className={cn(
            "absolute -top-1 -right-1",
            "min-w-[18px] h-[18px] px-[3px]",
            "flex items-center justify-center",
            "bg-[var(--surface-action)] text-white",
            "text-[10px] font-semibold leading-none",
            "rounded-[var(--radius-full)]",
          )}
        >
          {cartItems.length > 99 ? "99+" : cartItems.length}
        </span>
      )}
    </Link>
  );
}
