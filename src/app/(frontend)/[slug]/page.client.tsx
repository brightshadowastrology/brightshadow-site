"use client";
import { useCart } from "@/context/CartContext";
import React, { useEffect } from "react";

type Props = {
  clearCart?: boolean;
};

const PageClient: React.FC<Props> = ({ clearCart }) => {
  const { clear } = useCart();

  useEffect(() => {
    if (clearCart) clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearCart]);

  return <React.Fragment />;
};

export default PageClient;
